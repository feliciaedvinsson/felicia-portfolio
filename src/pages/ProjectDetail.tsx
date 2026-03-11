import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const AUTO_PLAY_INTERVAL = 4000;

const ProcessCarousel = ({ title, images, projectTitle }: {title: string;images: string[];projectTitle: string;}) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prev = useCallback(() => setCurrent((c) => c === 0 ? images.length - 1 : c - 1), [images.length]);
  const next = useCallback(() => setCurrent((c) => c === images.length - 1 ? 0 : c + 1), [images.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleManualNav = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    // Resume auto-play after 8s of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getIndex = (offset: number) => {
    return (current + offset + images.length) % images.length;
  };

  const positions = [-1, 0, 1];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative h-[450px] md:h-[550px] flex items-center justify-center perspective-[1200px]">
        {positions.map((offset) => {
          const index = getIndex(offset);
          const isCenter = offset === 0;

          const translateX = offset * 300;
          const translateZ = isCenter ? 0 : -120;
          const rotateY = offset * -20;
          const scale = isCenter ? 1 : 0.8;
          const opacity = isCenter ? 1 : 0.5;
          const zIndex = isCenter ? 10 : 5;
          const blur = isCenter ? 0 : 3;

          return (
            <div
              key={`${offset}-${index}`}
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`
              }}
              onClick={() => {
                if (offset < 0) handleManualNav(prev);else
                if (offset > 0) handleManualNav(next);
              }}>
              
              <img
                src={images[index]}
                alt={`${projectTitle} - ${title} ${index + 1}`}
                className="rounded-xl shadow-lg max-h-[400px] md:max-h-[500px] w-auto object-contain" />
              
            </div>);

        })}

        <button
          onClick={() => handleManualNav(prev)}
          className="absolute left-2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-background transition"
          aria-label="Previous">
          
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleManualNav(next)}
          className="absolute right-2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow hover:bg-background transition"
          aria-label="Next">
          
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) =>
        <button
          key={i}
          onClick={() => {
            handleManualNav(() => setCurrent(i));
          }}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          i === current ?
          "bg-primary scale-125" :
          "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
          }
          aria-label={`Go to slide ${i + 1}`} />

        )}
      </div>
    </div>);

};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projektet hittades inte</h1>
          <Button onClick={() => navigate("/")} variant="outline" className="rounded-full">
            Tillbaka
          </Button>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
          
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Button>

        <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
          {project.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">{project.description}</p>

        {/* Top Images – stacked layout (above Process) */}
        {project.topImages && project.topImages.length > 0 && project.topImagesLayout === "stacked" &&
        <div className="flex flex-col gap-6 mb-12">
            {project.topImages.map((img, i) =>
          <div key={i} className="rounded-xl overflow-hidden bg-muted w-full">
                <img src={img} alt={`${project.title} omslag ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
          )}
          </div>
        }

        {/* Top Images – 2x2 grid + 3-column row layout */}
        {project.topImages && project.topImages.length >= 7 && project.topImagesLayout === "grid-2x2-plus-3" &&
          <div className="flex flex-col gap-6 mb-12">
            <div className="grid grid-cols-2 gap-6">
              {project.topImages.slice(0, 4).map((img, i) =>
                <div key={i} className="rounded-xl overflow-hidden bg-muted">
                  <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-auto object-contain" />
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {project.topImages.slice(4, 7).map((img, i) =>
                <div key={i} className="rounded-xl overflow-hidden bg-muted">
                  <img src={img} alt={`${project.title} ${i + 5}`} className="w-full h-auto object-contain" />
                </div>
              )}
            </div>
          </div>
        }

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{project.processTitle || "Process"}</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.process}</p>
        </div>

        {/* Images */}
        {project.images.length > 0 &&
        <div className="grid gap-6 mb-12">
            {project.images.map((img, i) => {
            const isLastPair = project.images.length >= 3 && i >= project.images.length - 2;
            if (isLastPair && i === project.images.length - 2) {
              return (
                <div key={i} className="flex gap-6 col-span-full">
                    <div className="flex-1 rounded-xl overflow-hidden bg-muted">
                      <img src={project.images[i]} alt={`${project.title} ${i + 1}`} className="w-full h-auto object-contain" />
                    </div>
                    <div className="flex-1 rounded-xl overflow-hidden bg-muted">
                      <img src={project.images[i + 1]} alt={`${project.title} ${i + 2}`} className="w-full h-auto object-contain" />
                    </div>
                  </div>);

            }
            if (isLastPair && i === project.images.length - 1) return null;
            return;
          })}
          </div>
        }

        {/* Process Galleries */}
        {project.processGalleries?.map((gallery, gi) =>
        <ProcessCarousel key={gi} title={gallery.title} images={gallery.images} projectTitle={project.title} />
        )}

        {/* Top Images – grid layout (after Process) */}
        {project.topImages && project.topImages.length > 0 && project.topImagesLayout !== "stacked" &&
        <div className="grid grid-cols-3 gap-4 mb-8">
            {project.topImages.map((img, i) =>
          <div key={i} className="rounded-xl overflow-hidden bg-muted">
                <img src={img} alt={`${project.title} omslag ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
          )}
          </div>
        }

        {project.interstitial &&
        <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">{project.interstitial.title}</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.interstitial.text}</p>
          </div>
        }

        {/* Media Row */}
        {project.mediaRow &&
        <div className="grid grid-cols-2 gap-4 mb-8">
            {project.mediaRow.items.map((item, i) =>
          <div key={i} className="rounded-xl overflow-hidden bg-muted">
                <img src={item.src} alt={`${project.title} media ${i + 1}`} className="w-full h-auto" />
              </div>
          )}
          </div>
        }

        {/* Bottom Section */}
        {project.bottomSection && (() => {
          const bs = project.bottomSection;
          const videosBlock = bs.videos && bs.videos.length > 0 && (
            <div className={`${bs.videos.length === 1 ? 'max-w-[50%]' : 'grid grid-cols-2'} gap-4 mb-8`}>
              {bs.videos.map((vid, i) =>
                <div key={i} className="rounded-xl overflow-hidden bg-muted">
                  <video
                    src={vid.src}
                    autoPlay={vid.autoPlay}
                    loop={vid.loop}
                    muted={vid.muted}
                    playsInline
                    controls={!vid.autoPlay}
                    className="w-full h-auto" />
                </div>
              )}
            </div>
          );
          const textBlock = (
            <>
              <h2 className="text-2xl font-bold mb-3">{bs.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">{bs.text}</p>
            </>
          );
          return (
            <div className="mb-12">
              {bs.videosFirst ? <>{videosBlock}{textBlock}</> : <>{textBlock}{videosBlock}</>}
            </div>
          );
        })()}

        {/* Video placeholder */}
        {project.videoUrl &&
        <div className="rounded-xl overflow-hidden bg-muted aspect-video mb-12">
            <iframe
            src={project.videoUrl}
            title={project.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          
          </div>
        }

        {/* Links */}
        {project.links && project.links.length > 0 &&
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Länkar</h2>
            <div className="flex flex-col gap-3">
              {project.links.map((link, i) =>
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline">
              
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </a>
            )}
            </div>
          </div>
        }

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Verktyg</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) =>
            <span
              key={tool}
              className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              
                {tool}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>);

};

export default ProjectDetail;
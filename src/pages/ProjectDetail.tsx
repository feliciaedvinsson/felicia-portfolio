import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProcessCarousel = ({ title, images, projectTitle }: { title: string; images: string[]; projectTitle: string }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

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
              className="absolute transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`,
              }}
              onClick={() => {
                if (offset < 0) prev();
                else if (offset > 0) next();
              }}
            >
              <img
                src={images[index]}
                alt={`${projectTitle} - ${title} ${index + 1}`}
                className="w-[340px] md:w-[480px] h-[255px] md:h-[360px] object-contain rounded-xl"
                style={{
                  boxShadow: isCenter
                    ? '0 25px 60px -12px rgba(0, 0, 0, 0.5)'
                    : '0 15px 40px -8px rgba(0, 0, 0, 0.3)',
                }}
              />
            </div>
          );
        })}

        <button
          onClick={prev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/90 transition-colors border border-border/30"
          aria-label="Föregående"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/60 backdrop-blur-sm rounded-full p-2 hover:bg-background/90 transition-colors border border-border/30"
          aria-label="Nästa"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {current + 1} / {images.length}
      </div>
    </div>
  );
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
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Button>

        <p className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
          {project.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">{project.description}</p>

        {/* Top Images (side by side) */}
        {project.topImages && project.topImages.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.topImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-muted aspect-[4/5]">
                <img src={img} alt={`${project.title} omslag ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Interstitial title + text */}
        {project.interstitial && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3">{project.interstitial.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{project.interstitial.text}</p>
          </div>
        )}

        {/* Images */}
        <div className="grid gap-6 mb-12">
          {project.images.map((img, i) => {
            const isLastPair = project.images.length >= 3 && i >= project.images.length - 2;
            if (isLastPair && i === project.images.length - 2) {
              return (
                <div key={i} className="grid grid-cols-2 gap-6 col-span-full">
                  <div className="rounded-xl overflow-hidden bg-muted aspect-[3/4]">
                    <img src={project.images[i]} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden bg-muted aspect-[3/4]">
                    <img src={project.images[i + 1]} alt={`${project.title} ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            }
            if (isLastPair && i === project.images.length - 1) return null;
            return (
              <div key={i} className="rounded-xl overflow-hidden bg-muted aspect-video">
                <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        {/* Video placeholder */}
        {project.videoUrl && (
          <div className="rounded-xl overflow-hidden bg-muted aspect-video mb-12">
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.process}</p>
        </div>

        {/* Process Galleries */}
        {project.processGalleries?.map((gallery, gi) => (
          <ProcessCarousel key={gi} title={gallery.title} images={gallery.images} projectTitle={project.title} />
        ))}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Länkar</h2>
            <div className="flex flex-col gap-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Verktyg</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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

        {/* Images */}
        <div className="grid gap-6 mb-12">
          {project.images.map((img, i) => {
            const isLastPair = project.images.length >= 4 && i >= project.images.length - 2;
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
        {project.videoUrl !== undefined && (
          <div className="rounded-xl overflow-hidden bg-muted aspect-video mb-12 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Video kommer snart</p>
          </div>
        )}

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Process</h2>
          <p className="text-muted-foreground leading-relaxed">{project.process}</p>
        </div>

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

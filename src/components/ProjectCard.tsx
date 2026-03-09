import { useNavigate } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projekt/${project.id}`)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
          {project.category}
        </p>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

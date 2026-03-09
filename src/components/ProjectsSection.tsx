import { useState } from "react";
import { categories, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [active, setActive] = useState("Alla");

  const filtered = active === "Alla" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projekt" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Mina Projekt</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">Ett urval av mina senaste arbeten inom design, foto, animation och illustration.

        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm px-4 py-2 rounded-full transition-all duration-200 font-medium ${
            active === cat ?
            "bg-primary text-primary-foreground" :
            "bg-secondary text-secondary-foreground hover:bg-primary/10"}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) =>
          <ProjectCard key={project.id} project={project} />
          )}
        </div>
      </div>
    </section>);

};

export default ProjectsSection;
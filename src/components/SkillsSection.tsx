import { Figma, Code, Paintbrush, Film, Palette, PenTool, Layout, Globe } from "lucide-react";

const skills = [
{ name: "Adobe Illustrator", icon: PenTool },
{ name: "Adobe XD", icon: Layout },
{ name: "After Effects", icon: Film },
{ name: "Procreate", icon: Paintbrush },
{ name: "Figma", icon: Figma },
{ name: "Canva", icon: Palette },
{ name: "HTML", icon: Code },
{ name: "CSS", icon: Globe }];


const SkillsSection = () => {
  return (
    <section id="kompetenser" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kompetenser</h2>
        <p className="text-muted-foreground mb-14 max-w-lg mx-auto">
          Verktyg och teknologier jag arbetar med.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(({ name, icon: Icon }) =>
          <div
            key={name}
            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border
                transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30">
            
              <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SkillsSection;
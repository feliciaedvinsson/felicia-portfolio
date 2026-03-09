import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/20" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
          Digital Designer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Felicia<br />
          <span className="text-primary">Edvinsson</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Kreativ digital designer med passion för UI-design och grafisk formgivning. 
          Jag skapar visuella upplevelser som engagerar och inspirerar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#projekt">Se Projekt</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#kontakt">Kontakta Mig</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

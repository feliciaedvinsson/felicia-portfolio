import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4 font-medium">
          Digital Designer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          Felicia<br />
          <span className="text-primary">Edvinsson</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          En kreativ digital designer med passion för UI-design och grafisk formgivning. Utforska min portfolio och se hur design kan göra skillnad!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
            <a href="#projekt">Se projekt</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
            <a href="#kontakt">Kontakta mig</a>
          </Button>
        </div>
      </div>
    </section>);
};

export default HeroSection;
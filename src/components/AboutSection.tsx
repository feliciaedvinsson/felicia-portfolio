import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import feliciaImg from "@/assets/felicia.png";

const AboutSection = () => {
  return (
    <section id="om-mig" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
              <img src={feliciaImg} alt="Felicia Edvinsson" className="w-full h-full object-cover" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Om Mig</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Felicia Edvinsson</span> är en designer med 
                passion för UI och grafisk design. Ända sedan hon var liten har hon älskat att vara kreativ 
                på olika sätt, och hon njuter fortfarande av att upptäcka nya hobbyer och kreativa utlopp.
              </p>
              <p>
                Hon har starka tekniska kunskaper i flera designverktyg inklusive Adobe Illustrator, 
                Adobe XD, Adobe After Effects, Procreate, Figma och Canva. Hon har även grundläggande 
                kunskaper i HTML och CSS, vilket ger henne en djupare förståelse för hur design och 
                utveckling samverkar i digitala projekt.
              </p>
              <p>
                Utöver sin tekniska bakgrund har hon erfarenhet av service, försäljning och 
                projektledning, vilket har hjälpt henne att utveckla starka kommunikations- och 
                samarbetsförmågor. Hon tror att framgångsrika projekt bygger på starkt samarbete 
                mellan kollegor och kunder.
              </p>
              <p>
                Hon studerar för närvarande en kandidatexamen i Digital Design vid{" "}
                <span className="text-foreground font-medium">Högskolan Kristianstad</span>.
              </p>

              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-full px-6 gap-2">
                  <a href="/cv.pdf" download>
                    <Download className="w-4 h-4" />
                    Ladda ner CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

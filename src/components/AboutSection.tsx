import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import feliciaImg from "@/assets/felicia.png";

const AboutSection = () => {
  return (
    <section id="om-mig" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Om Mig</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Jag är en designer med en passion för UI- och grafisk design. Ända sedan jag var liten har jag älskat att vara kreativ på olika sätt, och än idag hittar jag ofta nya saker att pyssla med och hobbys att hänge mig till. Jag har god teknisk kompetens inom flera designverktyg, bland annat Adobe Illustrator, Adobe After Effects, Adobe XD, Procreate, Figma och Canva. Dessutom har jag grundläggande kunskaper i kodning med HTML och CSS, vilket ger mig en bättre förståelse för hur design och utveckling möts i digitala projekt.
              </p>
              <p>
                Förutom min tekniska bakgrund har jag erfarenheter inom service, försäljning och projektledning, vilket har hjälpt mig att utveckla starka kommunikations- och samarbetsfärdigheter. Jag tror att ett framgångsrikt projekt bygger på ett bra samarbete mellan kollegor och kunder, och jag strävar alltid efter att skapa en öppen och inkluderande dialog för att nå de bästa resultaten.
              </p>
              <p>
                Jag studerar för närvarande en kandidatexamen i digital design vid{" "}
                <span className="text-foreground font-medium">Högskolan Kristianstad</span>, där jag har fått möjlighet att fördjupa mig i designteori, användarcentrerade metoder och kreativa tekniker. Tveka inte att höra av dig om du vill samarbeta, eller om du är nyfiken på att veta mer om mig och mina projekt!
              </p>
            </div>

            <div className="pt-6">
              <Button asChild variant="outline" className="rounded-full px-6 gap-2">
                <a href="/cv.pdf" download>
                  <Download className="w-4 h-4" />
                  Ladda ner CV
                </a>
              </Button>
            </div>
          </div>

          {/* Image – aligned to bottom of text block */}
          <div className="hidden md:flex items-end self-stretch pb-[3.5rem]">
            <div className="w-64 lg:w-72 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={feliciaImg}
                alt="Felicia Edvinsson"
                className="w-full h-auto object-cover object-top grayscale contrast-110 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
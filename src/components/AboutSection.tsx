import { Button } from "@/components/ui/button";
import { Download, Scissors, Plane, Trophy, Star } from "lucide-react";
import feliciaImg from "@/assets/felicia.png";

const funFacts = [
{
  icon: Scissors,
  title: "Kreativa hobbys",
  items: ["Virka", "Pyssla", "Måla"]
},
{
  icon: Plane,
  title: "Drömresmål",
  items: ["Tokyo", "Hawaii", "Svalbard"]
},
{
  icon: Trophy,
  title: "Sport",
  items: ["Padel", "Golf", "Snowboarding"]
},
{
  icon: Star,
  title: "Kuriosa",
  items: ["Älskar julen", "Hundmänniska"]
}];


const AboutSection = () => {
  return (
    <section id="om-mig" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="flex justify-center md:items-end md:self-stretch md:pb-[3.5rem]">
            <div className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={feliciaImg}
                alt="Felicia Edvinsson"
                className="w-full h-auto object-cover object-top grayscale contrast-110 rounded-2xl" />
              
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Om mig</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Jag är en designer med en passion för UI- och grafisk design. Ända sedan jag var liten har jag älskat att vara kreativ på olika sätt, och än idag hittar jag ofta nya saker att pyssla med och hobbys att hänge mig till. Jag har god teknisk kompetens inom flera designverktyg, bland annat Adobe Illustrator, Adobe After Effects, Procreate, Figma och Canva. Dessutom har jag grundläggande kunskaper i kodning med HTML och CSS, vilket ger mig en bättre förståelse för hur design och utveckling möts i digitala projekt.
              </p>
              <p>
                Förutom min tekniska bakgrund har jag erfarenheter inom service, försäljning och projektledning, vilket har hjälpt mig att utveckla starka kommunikations- och samarbetsfärdigheter. Jag tror att ett framgångsrikt projekt bygger på ett bra samarbete mellan kollegor och kunder, och jag strävar alltid efter att skapa en öppen och inkluderande dialog för att nå de bästa resultaten.
              </p>
              <p>
                Jag tar min kandidatexamen i digital design vid Högskolan Kristianstad i slutet av maj, där jag har fått möjlighet att fördjupa mig i designteori, användarcentrerade metoder och kreativa tekniker. Tveka inte att höra av dig om du vill samarbeta, eller om du är nyfiken på att veta mer om mig och mina projekt!
              </p>
            </div>

            <div className="pt-6">
              <Button asChild variant="outline" className="rounded-full px-6 gap-2">
                <a href="/CV Felicia Edvinsson.pdf" download="CV Felicia Edvinsson.pdf">
                  <Download className="w-4 h-4" />
                  Ladda ner CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Snabba fakta */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">Snabba fakta om mig</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.map(({ icon: Icon, title, items }) =>
            <div
              key={title}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 text-center">
              
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                  transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{title}</span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {items.map((item) =>
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  
                      {item}
                    </span>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;
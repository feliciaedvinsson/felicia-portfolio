export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  process: string;
  tools: string[];
}

export const categories = [
  "Alla",
  "UI Design",
  "Grafisk Design",
  "Fotografi",
  "Filmredigering",
  "Illustration",
];

export const projects: Project[] = [
  {
    id: "ui-app-redesign",
    title: "App Redesign",
    category: "UI Design",
    description: "En modern redesign av en mobilapplikation med fokus på användarvänlighet och visuell klarhet.",
    tags: ["Figma", "Adobe XD"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet startade med användarundersökningar och wireframes innan den visuella designen tog form i Figma.",
    tools: ["Figma", "Adobe XD", "Adobe Illustrator"],
  },
  {
    id: "ui-dashboard",
    title: "Dashboard Design",
    category: "UI Design",
    description: "Ett intuitivt dashboard för datavisualisering med ren layout och tydlig hierarki.",
    tags: ["Figma", "Adobe XD"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Designprocessen fokuserade på att göra komplex data lättförståelig genom tydlig visuell hierarki.",
    tools: ["Figma", "Adobe XD"],
  },
  {
    id: "grafisk-affisch",
    title: "Evenemangsaffisch",
    category: "Grafisk Design",
    description: "En serie affischer för ett kulturevenemang med fokus på typografi och färg.",
    tags: ["Adobe Illustrator", "Canva"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Konceptet utvecklades genom skisser och moodboards innan den digitala produktionen i Illustrator.",
    tools: ["Adobe Illustrator", "Canva"],
  },
  {
    id: "grafisk-branding",
    title: "Varumärkesidentitet",
    category: "Grafisk Design",
    description: "Komplett visuell identitet inklusive logotyp, färgpalett och typografi för ett startup.",
    tags: ["Adobe Illustrator", "Figma"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Arbetet inkluderade konkurrentanalys, moodboards, och iterativa designrundor med klienten.",
    tools: ["Adobe Illustrator", "Figma"],
  },
  {
    id: "foto-natur",
    title: "Naturfotografi",
    category: "Fotografi",
    description: "En fotoserie som fångar den skandinaviska naturens skönhet genom årstiderna.",
    tags: ["Kamera", "Adobe Lightroom"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Bilderna togs under flera månader för att fånga olika ljusförhållanden och årstider.",
    tools: ["Kamera", "Adobe Lightroom"],
  },
  {
    id: "film-kortfilm",
    title: "Kortfilm",
    category: "Filmredigering",
    description: "En kreativ kortfilm med fokus på berättande genom visuella effekter och klippning.",
    tags: ["Adobe After Effects", "Premiere Pro"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    videoUrl: "",
    process: "Från manus till färdig produktion, inklusive filmning, klippning och efterbearbetning.",
    tools: ["Adobe After Effects", "Adobe Premiere Pro"],
  },
  {
    id: "illustration-digital",
    title: "Digitala Illustrationer",
    category: "Illustration",
    description: "En samling digitala illustrationer skapade i Procreate med fokus på karaktärsdesign.",
    tags: ["Procreate", "Adobe Illustrator"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Varje illustration började som en snabb skiss som sedan förfinades digitalt i Procreate.",
    tools: ["Procreate", "Adobe Illustrator"],
  },
  {
    id: "illustration-editorial",
    title: "Editorial Illustration",
    category: "Illustration",
    description: "Illustrationer skapade för tidningsartiklar med en unik och igenkännbar stil.",
    tags: ["Procreate", "Figma"],
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Nära samarbete med redaktörer för att skapa illustrationer som kompletterar texten.",
    tools: ["Procreate", "Figma"],
  },
];

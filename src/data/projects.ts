import mockupNordvag from "@/assets/mockup-nordvag.png";
import mockupTradgard from "@/assets/mockup-tradgard.png";
import mockupVisitkort from "@/assets/mockup-visitkort.png";
import mockupUmekakel from "@/assets/mockup-umekakel.jpg";
import mockupNaturfoto from "@/assets/mockup-naturfoto.png";
import mockupKortfilm from "@/assets/mockup-kortfilm.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  process: string;
  tools: string[];
}

export const categories = [
  "Utvalda",
  "UI Design",
  "Grafisk Design",
  "Fotografi",
  "Motion & Video",
  "Illustration",
];

export const projects: Project[] = [
  {
    id: "ui-app-redesign",
    title: "Nordväg",
    category: "UI Design",
    categories: ["UI Design"],
    description: "En prototyp av en fiktiv hemsida för friluftsprodukter.",
    tags: ["Figma"],
    thumbnail: mockupNordvag,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet startade med användarundersökningar och wireframes innan den visuella designen tog form i Figma.",
    tools: ["Figma"],
  },
  {
    id: "ui-dashboard",
    title: "Trädklippet",
    category: "UI Design",
    categories: ["UI Design"],
    description: "En prototyp av en ny hemsida till Trädklippet AB.",
    tags: ["Figma"],
    thumbnail: mockupTradgard,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Designprocessen fokuserade på att göra komplex data lättförståelig genom tydlig visuell hierarki.",
    tools: ["Figma"],
  },
  {
    id: "grafisk-affisch",
    title: "Dermosil",
    category: "Grafisk Design",
    categories: ["Grafisk Design", "Motion & Video"],
    description: "Ett projekt jag arbetade i, under min praktik hos Chillimedia.",
    tags: ["Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
    thumbnail: mockupVisitkort,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Konceptet utvecklades genom skisser och moodboards innan den digitala produktionen.",
    tools: ["Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
  },
  {
    id: "grafisk-branding",
    title: "Umekakel",
    category: "Grafisk Design",
    categories: ["Grafisk Design"],
    description: "Reklam flyers till företaget Umekakel, som skapades under min praktik hos Chillimedia.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupUmekakel,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Arbetet inkluderade konkurrentanalys, moodboards, och iterativa designrundor med klienten.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "foto-natur",
    title: "Tornedalens textil",
    category: "Fotografi",
    categories: ["Grafisk Design", "Fotografi", "Motion & Video"],
    description: "Ett projekt jag arbetade i, under min praktik hos Chillimedia.",
    tags: ["Adobe Lightroom", "Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
    thumbnail: mockupNaturfoto,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Bilderna togs under flera månader för att fånga olika ljusförhållanden och årstider.",
    tools: ["Adobe Lightroom", "Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
  },
  {
    id: "film-kortfilm",
    title: "Motorcentralen",
    category: "Illustration",
    categories: ["Illustration"],
    description: "En poster jag skapade under min praktik hos Chillimedia, som sedan gavs till en av deras kunder.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupKortfilm,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Från manus till färdig produktion, inklusive filmning, klippning och efterbearbetning.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
];

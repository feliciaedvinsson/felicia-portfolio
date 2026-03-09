import mockupNordvag from "@/assets/mockup-nordvag.png";
import mockupTradgard from "@/assets/mockup-tradgard.png";
import mockupVisitkort from "@/assets/mockup-visitkort.png";
import mockupUmekakel from "@/assets/mockup-umekakel.jpg";
import mockupNaturfoto from "@/assets/mockup-naturfoto.png";
import mockupKortfilm from "@/assets/mockup-kortfilm.png";
import mockupKulturkomp from "@/assets/mockup-kulturkomp.jpg";
import mockupMotorcentralen from "@/assets/mockup-motorcentralen.jpg";
import mockupIntext from "@/assets/mockup-intext.png";
import mockupEpson from "@/assets/mockup-epson.png";
import motorcentralenDetail1 from "@/assets/motorcentralen-detail-1.png";
import motorcentralenDetail2 from "@/assets/motorcentralen-detail-2.png";
import motorcentralenDetail3 from "@/assets/motorcentralen-detail-3.jpg";
import motorcentralenDetail4 from "@/assets/motorcentralen-detail-4.jpg";

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
    images: [motorcentralenDetail1, motorcentralenDetail2, motorcentralenDetail3, motorcentralenDetail4],
    process: "Från manus till färdig produktion, inklusive filmning, klippning och efterbearbetning.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "ui-kulturkompassen",
    title: "Kulturkompassen",
    category: "UI Design",
    categories: ["UI Design"],
    description: "En prototyp av en fiktiv app för att främja svenska kulturminnen.",
    tags: ["Adobe XD"],
    thumbnail: mockupKulturkomp,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet fokuserade på att skapa en användarvänlig app-prototyp för att utforska svenska kulturminnen.",
    tools: ["Adobe XD"],
  },
  {
    id: "motorcentralen-foto",
    title: "Motorcentralen",
    category: "Motion & Video",
    categories: ["Motion & Video", "Fotografi"],
    description: "En projekt jag utförde under min praktik hos Chillimedia.",
    tags: ["Adobe After Effects", "Adobe Lightroom", "Adobe Photoshop"],
    thumbnail: mockupMotorcentralen,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet kombinerade fotografi och videoproduktion för att skapa visuellt material.",
    tools: ["Adobe After Effects", "Adobe Lightroom", "Adobe Photoshop"],
  },
  {
    id: "intext-designstudio",
    title: "Intext designstudio",
    category: "Illustration",
    categories: ["Illustration"],
    description: "En poster jag skapade under min praktik hos Chillimedia, som sedan gavs till en av deras kunder.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupIntext,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet inkluderade konceptutveckling och grafisk produktion för att skapa en unik poster.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "epson-illustration",
    title: "EPSON",
    category: "Illustration",
    categories: ["Illustration"],
    description: "En poster jag skapade under min praktik hos Chillimedia, som sedan gavs till en av deras kunder.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupEpson,
    images: ["/placeholder.svg", "/placeholder.svg"],
    process: "Projektet inkluderade konceptutveckling och illustrationsarbete för att skapa en unik poster.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
];

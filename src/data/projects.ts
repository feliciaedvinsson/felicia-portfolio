import mockupNordvag from "@/assets/mockup-nordvag.png";
import tornedalensFoto1 from "@/assets/tornedalens-foto-1.jpg";
import tornedalensFoto2 from "@/assets/tornedalens-foto-2.jpg";
import tornedalensFoto3 from "@/assets/tornedalens-foto-3.png";
import tornedalensFoto4 from "@/assets/tornedalens-foto-4.png";
import tornedalensFoto5 from "@/assets/tornedalens-foto-5.png";
import tornedalensFoto6 from "@/assets/tornedalens-foto-6.jpg";
import tornedalensFoto7 from "@/assets/tornedalens-foto-7.png";
import tornedalensFoto8 from "@/assets/tornedalens-foto-8.png";
import tornedalensFoto9 from "@/assets/tornedalens-foto-9.png";
import tornedalensBlackweek from "@/assets/tornedalens-blackweek.mp4";
import mockupTradgardDetail from "@/assets/mockup-tradgard-detail.png";
import mockupTradgard from "@/assets/mockup-tradgard.png";
import mockupVisitkort from "@/assets/mockup-visitkort.png";
import mockupUmekakel from "@/assets/mockup-umekakel.jpg";
import umekakelDetail from "@/assets/umekakel-detail.png";
import umekakelDetail2 from "@/assets/umekakel-detail-2.png";
import umekakelDetail3 from "@/assets/umekakel-detail-3.png";
import umekakelFlyer from "@/assets/umekakel-flyer.png";
import mockupNaturfoto from "@/assets/mockup-naturfoto.png";
import mockupKortfilm from "@/assets/mockup-kortfilm.png";
import mockupKulturkomp from "@/assets/mockup-kulturkomp.jpg";
import mockupMotorcentralen from "@/assets/mockup-motorcentralen.jpg";
import mockupIntext from "@/assets/mockup-intext.png";
import mockupEpson from "@/assets/mockup-epson.png";
import mockupChillimedia from "@/assets/mockup-chillimedia.png";
import dermosilOmslag1 from "@/assets/dermosil-omslag-1.jpg";
import dermosilOmslag2 from "@/assets/dermosil-omslag-2.jpg";
import dermosilOmslag3 from "@/assets/dermosil-omslag-3.jpg";
import dermosilKampanj1 from "@/assets/dermosil-kampanj-1.jpg";
import dermosilKampanj2 from "@/assets/dermosil-kampanj-2.jpg";
import dermosilKampanjVideo from "@/assets/dermosil-kampanj.mp4";
import dermosilKampanjVideo2 from "@/assets/dermosil-kampanj-video-1.mp4";
import dermosilJulVideo from "@/assets/dermosil-jul-video.mp4";
import motorcentralenDetail1 from "@/assets/motorcentralen-detail-1.png";
import motorcentralenDetail2 from "@/assets/motorcentralen-detail-2.png";
import motorcentralenDetail3 from "@/assets/motorcentralen-detail-3.jpg";
import motorcentralenDetail4 from "@/assets/motorcentralen-detail-4.jpg";
import motorcentralenVideo1 from "@/assets/motorcentralen-video-1.mp4";
import nordvagDetail1 from "@/assets/nordvag-detail-1.png";
import nordvagDetail2 from "@/assets/nordvag-detail-2.png";
import nordvagMockupMobile from "@/assets/nordvag-mockup-mobile.png";
import nordvagMockupDesktop from "@/assets/nordvag-mockup-desktop.png";
import nordvagSketch1 from "@/assets/nordvag-sketch-1.jpeg";
import nordvagSketch2 from "@/assets/nordvag-sketch-2.jpeg";
import nordvagSketch3 from "@/assets/nordvag-sketch-3.jpeg";
import nordvagWireframe1 from "@/assets/nordvag-wireframe-1.png";
import nordvagWireframe2 from "@/assets/nordvag-wireframe-2.png";
import nordvagWireframe3 from "@/assets/nordvag-wireframe-3.png";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProcessGallery {
  title: string;
  images: string[];
}

export interface Interstitial {
  title: string;
  text: string;
}

export interface MediaItem {
  type: "image" | "video";
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface MediaRow {
  items: MediaItem[];
  position?: "before-process" | "after-interstitial";
}

export interface BottomSection {
  title: string;
  text: string;
  videos?: MediaItem[];
  videosFirst?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  tags: string[];
  thumbnail: string;
  topImages?: string[];
  topImagesLayout?: "stacked" | "grid" | "grid-2x2-plus-3";
  interstitial?: Interstitial;
  images: string[];
  videoUrl?: string;
  processTitle?: string;
  process: string;
  processGalleries?: ProcessGallery[];
  mediaRow?: MediaRow;
  bottomSection?: BottomSection;
  tools: string[];
  links?: ProjectLink[];
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
    id: "ui-nordvag",
    title: "Nordväg",
    category: "UI Design",
    categories: ["UI Design"],
    description: "En prototyp av en fiktiv hemsida för friluftsprodukter.",
    tags: ["Figma"],
    thumbnail: mockupNordvag,
    topImages: [nordvagMockupMobile, nordvagMockupDesktop],
    topImagesLayout: "stacked",
    images: [nordvagDetail1, nordvagDetail2],
    process: "I denna uppgift, som utfördes under min utbildning skulle vi skapa en hemsida för ett fiktivt företag som säljer friluftsprodukter. Vi fick en grafisk profil och vissa bilder som var obligatoriska att använda, vilket gav ett tydligt ramverk för designen.\n\nJag började med skisser på papper för att snabbt utforska layoutidéer och hur innehållet kunde struktureras både för desktop och mobil. När jag hade en tydligare vision skapade jag wireframes i Adobe Illustrator, där fokus låg på användarflöde och struktur snarare än färg och stil.\n\nSlutligen utvecklade jag den färdiga designen i Figma, där jag implementerade den grafiska profilen och de obligatoriska bilderna. Jag arbetade med responsiva versioner för både desktop och mobil och säkerställde att designen var användarvänlig och visuellt konsekvent över olika skärmstorlekar.",
    processGalleries: [
      {
        title: "Skisser och wireframes",
        images: [nordvagSketch1, nordvagSketch2, nordvagSketch3, nordvagWireframe1, nordvagWireframe2, nordvagWireframe3],
      },
    ],
    tools: ["Figma"],
    links: [
      { label: "Länk till prototyp med desktop-vy", url: "https://www.figma.com/proto/4aPRIP8BuuqRMD8ouYZ7lt/Nordva%CC%88g?node-id=1-2&t=mZfuDB0abFffbtK9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=136%3A614" },
      { label: "Länk till prototyp med mobil-vy", url: "https://www.figma.com/proto/4aPRIP8BuuqRMD8ouYZ7lt/Nordva%CC%88g?node-id=200-333&t=y82GRpgvDHPcHnwX-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A25&starting-point-node-id=200%3A333" },
    ],
  },
  {
    id: "gestaltning-praktik",
    title: "Gestaltning av praktik",
    category: "Motion & Video",
    categories: ["Motion & Video"],
    description: "En gestaltande motion graphic om mina erfarenheter hos min praktikplats, Chillimedia. Detta var en uppgift under min utbildning.",
    tags: ["Adobe After Effects"],
    thumbnail: mockupChillimedia,
    images: [],
    videoUrl: "https://www.youtube.com/embed/gPHQSxEfa5Y",
    process: "Mer information kommer snart.",
    tools: ["Adobe After Effects"],
  },
  {
    id: "dermosil",
    title: "Dermosil",
    category: "Grafisk Design",
    categories: ["Grafisk Design", "Motion & Video"],
    description: "Ett projekt jag arbetade i, under min praktik hos Chillimedia.",
    tags: ["Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
    thumbnail: mockupVisitkort,
    topImages: [dermosilOmslag1, dermosilOmslag2, dermosilOmslag3],
    interstitial: {
      title: "Framtagning av koncept",
      text: "Som en del av projektet tog vi fram ett koncept för sociala medier med namnet \"Dejta Dermosil\". Idén var att skapa en serie reels där publiken på ett lättsamt och engagerande sätt får lära känna företaget, dess produkter och varumärke, som att \"dejta\" företaget och steg för steg upptäcka vad de erbjuder.\n\nArbetet började med en gemensam kreativ process där vi brainstormade fram olika idéer och koncept kring hur företaget skulle kunna introduceras för en svensk publik. Vi skissade på flera olika riktningar, testade tankar och utvecklade dem vidare. Under processen itererade vi mycket, vissa idéer omarbetades, andra byttes ut helt, tills vi till slut landade i konceptet \"Dejta Dermosil\".\n\nMin roll i projektet blev sedan att ta fram tre olika förslag på omslag till serien. Omslagen var tänkta att användas på sociala medier för att tydligt markera att inläggen tillhör serien och samtidigt ge en känsla för innehållet. I designen fokuserade jag på att skapa något som var igenkännbart, visuellt tilltalande och som kunde fungera konsekvent genom hela reel-serien.",
    },
    mediaRow: {
      items: [
        { type: "image", src: dermosilKampanj1 },
        { type: "image", src: dermosilKampanj2 },
      ],
    },
    bottomSection: {
      title: "Kampanjmaterial för sociala medier",
      text: "Utöver konceptarbetet togs även kampanjmaterial fram för sociala medier. Materialet bestod av grafik och video anpassat för olika plattformar, med fokus på att kommunicera erbjudanden och produkter på ett visuellt tilltalande sätt som passar den svenska marknaden.",
      videos: [
        { type: "video", src: dermosilKampanjVideo2, autoPlay: true, loop: true, muted: true },
        { type: "video", src: dermosilJulVideo, autoPlay: false, loop: false, muted: false },
      ],
    },
    images: [],
    processTitle: "Uppdrag",
    process: "I projektet fick jag möjlighet att arbeta med ett större projekt inför en pitch till en potentiell nykund. Tillsammans med två medarbetare ansvarade jag för att ta fram visuellt och konceptuellt material som skulle presenteras under pitchen.\n\nKunden var ett finskt företag som ville etablera sig starkare på den svenska marknaden. Vårt uppdrag var därför att utveckla idéer och koncept som kunde hjälpa företaget att nå en svensk målgrupp. En viktig del av arbetet var att anpassa  deras befintliga innehåll för sociala medier, både i tonalitet och visuellt uttryck.\n\nFokus låg på att introducera företaget till en svensk publik, lyfta fram deras produkter på ett tydligt sätt och skapa innehåll som kändes relevant för den svenska marknaden. Genom konceptförslag och visuellt material visade vi hur företaget kunde kommunicera sitt varumärke och sina produkter på ett sätt som bättre tilltalar svenska konsumenter.",
    tools: ["Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
  },
  {
    id: "umekakel",
    title: "Umekakel",
    category: "Grafisk Design",
    categories: ["Grafisk Design"],
    description: "Reklamflyers till företaget Umekakel, som skapades under min praktik hos Chillimedia.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupUmekakel,
    images: [umekakelDetail, umekakelDetail2, umekakelDetail3],
    topImages: [umekakelFlyer],
    topImagesLayout: "stacked" as const,
    process: "Under min praktik hos Chillimedia fick jag i uppdrag att skapa marknadsföringsmaterial för en av deras kunder. Uppdraget bestod av en A5-flyer med fram- och baksida, som skulle delas ut i brevlådor, samt en A4-poster som kunde sättas upp i exempelvis trapphus.\n\nMålet med projektet var att presentera företaget, visa vilka tjänster de erbjuder och samtidigt locka potentiella kunder i området. Jag fick fria händer i designen, men utgick från företagets grafiska profil och fick veta att tjänsterna skulle framgå tydligt.\n\nUnder processen fokuserade jag på att skapa en tydlig, attraktiv och lättillgänglig design som snabbt kommunicerar företagets budskap. Jag tog hänsyn till målgruppen och den begränsade distributionen inom ett specifikt bostadsområde, vilket påverkade både layout och informationsmängd.\n\nResultatet blev ett sammanhängande uttryck mellan flyer och poster, där båda formaten tydligt lyfter fram företagets tjänster på ett engagerande och lättförståeligt sätt.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "tornedalens-textil",
    title: "Tornedalens textil",
    category: "Fotografi",
    categories: ["Grafisk Design", "Fotografi", "Motion & Video"],
    description: "Ett projekt jag arbetade i, under min praktik hos Chillimedia.",
    tags: ["Adobe Lightroom", "Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
    thumbnail: mockupNaturfoto,
    topImages: [tornedalensFoto3, tornedalensFoto4, tornedalensFoto5, tornedalensFoto6, tornedalensFoto7, tornedalensFoto8, tornedalensFoto9],
    topImagesLayout: "grid-2x2-plus-3" as const,
    images: [tornedalensFoto1, tornedalensFoto2],
    processTitle: "Fotografi",
    process: "Dessa bilder fotograferades och redigerades av mig under min praktik hos Chillimedia. Fotograferingen var en del av ett större uppdrag där vi producerade material åt en kund. Teamet arbetade med att filma en headerfilm till kundens hemsida, samtidigt som vi tog fram bildmaterial som kunde användas till företagets sociala medier.\n\nMin roll var att fotografera stillbilder under produktionen och därefter redigera dem för att skapa ett enhetligt och visuellt tilltalande resultat. Fokus låg på att ta fram bilder som både passade kundens visuella uttryck och fungerade bra i digitala kanaler.",
    bottomSection: {
      title: "Rörligt material",
      text: "Kunden önskade marknadsföringsmaterial till en Black Week-kampanj. Jag fick relativt fria händer i den kreativa utformningen, men utgick från vissa förutbestämda ramar, bland annat specifika färger på handskarna som skulle lyftas i kampanjen samt det kampanjpris som skulle kommuniceras.\n\nMaterielet togs fram med fokus på tydlig priskommunikation och ett uttryck som passar Black Week, där kontrast och tydlighet var centrala. Designen anpassades för att framhäva produkterna och göra erbjudandet lätt att uppfatta snabbt.\n\nKampanjmaterialet producerades i två språkversioner, svenska och norska, eftersom det skulle publiceras i båda länderna.",
      videos: [
        { type: "video", src: tornedalensBlackweek, autoPlay: false, loop: false, muted: false },
      ],
      videosFirst: true,
    },
    tools: ["Adobe Lightroom", "Adobe Illustrator", "Adobe After Effects", "Adobe Photoshop"],
  },
  {
    id: "tradklippet",
    title: "Trädklippet",
    category: "UI Design",
    categories: ["UI Design"],
    description: "En prototyp av en ny hemsida till Trädklippet AB.",
    tags: ["Figma"],
    thumbnail: mockupTradgard,
    images: [mockupTradgardDetail],
    process: "Denna prototyp skapades tillsammans med Emil Juntikka, som en del av ett potentiellt projekt för Trädklippet AB. Kunden önskade en ny version av deras nuvarande webbplats, med ett mordernare uttryck. \n\nMer information och visuellt material kommer snart..",
    tools: ["Figma"],
  },
  {
    id: "motorcentralen-illustration",
    title: "Motorcentralen",
    category: "Illustration",
    categories: ["Illustration"],
    description: "Två posters jag skapade under min praktik hos Chillimedia, som sedan gavs till en av deras kunder som en gåva.",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    thumbnail: mockupKortfilm,
    images: [motorcentralenDetail1, motorcentralenDetail2, motorcentralenDetail3, motorcentralenDetail4],
    process: "Detta projekt genomfördes under min praktik hos Chillimedia och skapades för en av deras kunder. Uppgiften var att ta fram två posters som skulle ges bort som en gåva, där jag fick relativt fria händer i det kreativa arbetet.\n\nUtgångspunkten var att utgå från företagets grafiska profil och skapa ett uttryck som kändes representativt för deras varumärke. Målet var att ta fram en design som både fungerade som en uppskattad gåva och samtidigt speglade företagets visuella identitet.\n\nUnder processen tog jag fram två olika posters och arbetade igenom flera designförslag. Jag testade olika layoutlösningar, typografi och färgkombinationer för att hitta ett uttryck som passade både syftet och varumärket. Efter att ha utforskat och utvärderat flera versioner landade jag slutligen i den slutgiltiga designen, där fokus låg på att skapa en genomarbetad och visuellt tilltalande poster som låg i linje med företagets grafiska profil.",
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
    process: "Kulturkompassen är en prototyp som skapades tillsammans med Lisa Sjöström och Aleksandar Praizovic, som en del av ett skolprojekt.\n\nProjektets syfte var att skapa en prototyp för en mobilapp för att främja kulturminnen i Sverige\n\nMer information kommer snart..",
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
    processTitle: "Innehåll för sociala medier",
    process: "Under min praktik hos Chillimedia arbetade jag med innehåll till en av deras kunder, där Chillimedia ansvarade för företagets sociala medier. Jag redigerade både bilder och video som skulle publiceras i deras kanaler, med fokus på att skapa material som var visuellt tilltalande och anpassat för plattformarna.\n\nJag var även delaktig i planeringen av innehållet och schemalade delar av publiceringarna, vilket gav mig erfarenhet av hur sociala medier kan struktureras strategiskt för att skapa ett jämnt och genomtänkt flöde.",
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

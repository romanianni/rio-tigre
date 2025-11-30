import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/assets/images/zf04M.jpg";
import image2 from "@/assets/images/zf02.jpeg";
import image3 from "@/assets/images/zf01.jpeg";

gsap.registerPlugin(ScrollTrigger);

// Define section data for better maintainability
const sections = [
  {
    id: 1,
    backgroundImage: image1,
    content: <h1 className="text-5xl font-bold text-white">Sección 1</h1>,
    hasOverlay: true,
    contentLayout: "",
  },
  {
    id: 2,
    backgroundImage: image2,
    content: <p className="text-3xl text-white">Texto sobre la imagen 2</p>,
    hasOverlay: false,
    contentLayout: "flex-col",
  },
  {
    id: 3,
    backgroundImage: image3,
    content: (
      <button className="rounded-xl bg-white/80 px-6 py-3 text-black">
        Botón sobre imagen
      </button>
    ),
    hasOverlay: false,
    contentLayout: "",
  },
] as const;

// Reusable Section component
interface SectionProps {
  backgroundImage: string;
  content: React.ReactNode;
  hasOverlay?: boolean;
  contentLayout?: string;
}

const Section: React.FC<SectionProps> = ({
  backgroundImage,
  content,
  hasOverlay = false,
  contentLayout = "",
}) => (
  <section
    className="panel relative h-screen w-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {hasOverlay && <div className="absolute inset-0 bg-black/40" />}
    <div
      className={`relative z-10 flex h-full items-center justify-center ${contentLayout}`}
    >
      {content}
    </div>
  </section>
);

function App() {
  return (
    <div className="relative">
      {sections.map((section) => (
        <Section
          key={section.id}
          backgroundImage={section.backgroundImage}
          content={section.content}
          hasOverlay={section.hasOverlay}
          contentLayout={section.contentLayout}
        />
      ))}
    </div>
  );
}

export default App;

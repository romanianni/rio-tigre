import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "@/assets/images/zf02.jpeg";
import image1 from "@/assets/images/zf04M.jpg";
import image3 from "@/assets/images/zf01.jpeg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative">
      <section
        className="panel relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* opcional: capa oscura */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Sección 1</h1>
        </div>
      </section>

      <section
        className="panel relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <p className="text-3xl text-white">Texto sobre la imagen 2</p>
        </div>
      </section>

      <section
        className="panel relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="relative z-10 flex h-full items-center justify-center">
          <button className="rounded-xl bg-white/80 px-6 py-3 text-black">
            Botón sobre imagen
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

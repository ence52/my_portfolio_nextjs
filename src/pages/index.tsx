import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div
      className={`${montserrat.className} max-w-7xl mx-auto pt-10 md:px-0 px-4 `}
    >
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <p className="text-center  my-10">
        Designed & Built by Erkan INCE | Fueled by Coffee☕
      </p>
    </div>
  );
}

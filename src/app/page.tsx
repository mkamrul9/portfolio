import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <section
        id="projects"
        className="min-h-screen border-t border-gray-200 bg-white"
      />
      <section
        id="experience"
        className="min-h-screen border-t border-gray-200 bg-gray-50"
      />
      <section
        id="contact"
        className="min-h-screen border-t border-gray-200 bg-white"
      />
    </main>
  );
}

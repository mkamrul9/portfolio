import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />

      <section id="about" className="min-h-screen border-t border-gray-200 bg-white" />
      <section
        id="skills"
        className="min-h-screen border-t border-gray-200 bg-gray-50"
      />
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

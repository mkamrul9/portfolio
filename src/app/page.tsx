"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

export default function Home() {
  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Experience key="experience" />,
    <Contact key="contact" />,
    <Footer key="footer" />,
  ];

  return (
    <main className="scroll-smooth">
      <CustomCursor />
      <Navbar />
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: Math.min(idx * 0.04, 0.2) }}
        >
          {section}
        </motion.div>
      ))}
      <ScrollToTop />
    </main>
  );
}

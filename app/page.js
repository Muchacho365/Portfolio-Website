import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import Projects from "@/components/sections/Projects";
import ExperienceAndAbout from "@/components/sections/ExperienceAndAbout";
import AiAssistant from "@/components/ui/AiAssistant";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Anchor for top of page */}
      <div id="top" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <TechMarquee />
        <Projects />
        <ExperienceAndAbout />
        <AiAssistant />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

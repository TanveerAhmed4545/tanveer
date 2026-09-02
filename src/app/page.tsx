import { Navbar } from "@/components/common/navbar";
// import { Hero } from "@/components/sections/hero-section"; // Preserved and disconnected per user request
import { HeroBanner } from "@/components/sections/hero-banner";
import { Stats } from "@/components/sections/stats-section";
import { About } from "@/components/sections/about-section";
import { Experience } from "@/components/sections/experience-section";
import { Projects } from "@/components/sections/projects-section";
import { Skills } from "@/components/sections/skills-section";
import { Article } from "@/components/sections/article-section";
import { Contact } from "@/components/sections/contact-section";
import { Footer } from "@/components/common/footer";
import { Preloader } from "@/components/base/preloader";
import { RightNav } from "@/components/common/right-nav";

export default function Home() {
  return (
    <div className="portfolio-root bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground overflow-x-hidden w-full max-w-[100vw]">
      <Preloader />
      <RightNav />
      <Navbar />
      <main className="flex-1">
        {/* <Hero /> */}
        <HeroBanner />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Article />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

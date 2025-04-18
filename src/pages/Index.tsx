
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-bg">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

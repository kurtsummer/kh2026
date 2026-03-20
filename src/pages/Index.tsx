import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Occasions from "@/components/Occasions";
import Repertoire from "@/components/Repertoire";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MusicHelper from "@/components/MusicHelper";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 selection:bg-primary/30 selection:text-secondary">
      {/* Progress Bar */}

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Occasions />
        <Repertoire />
        <Contact />
      </main>
      
      <MusicHelper />
      <Footer />
    </div>

  );
};

export default Index;

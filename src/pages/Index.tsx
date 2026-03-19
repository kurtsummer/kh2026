import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { OpeningHours } from "@/components/OpeningHours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <ServicesSection />
        <About />
        <Pricing />
        <OpeningHours />
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

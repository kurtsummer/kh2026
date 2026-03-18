import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Services } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { OpeningHours } from "@/components/OpeningHours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      {/* Floating Emergency Pill */}
      <div className="fixed bottom-8 right-8 z-[60] group">
        <div className="bg-rose-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-bounce hover:animate-none cursor-pointer transition-all hover:scale-105 active:scale-95">
          <AlertCircle className="w-5 h-5" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold leading-none opacity-80">Notruf</span>
            <span className="font-bold text-lg leading-none">112</span>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

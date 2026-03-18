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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      {/* Floating Emergency Pill */}
      <div className="fixed bottom-8 right-8 z-[60] group">
        <div className="bg-rose-600 text-white px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.3)] flex items-center gap-4 animate-bounce hover:animate-none cursor-pointer transition-all hover:scale-105 active:scale-95 border-4 border-white">
          <AlertCircle className="w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-widest leading-none opacity-80 mb-1">Notruf</span>
            <span className="font-black text-2xl leading-none tracking-tighter">112</span>
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

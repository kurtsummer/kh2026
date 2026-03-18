import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Services } from "@/components/ServicesSection";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { OpeningHours } from "@/components/OpeningHours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Compass } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      {/* Floating Travel Concierge Pill */}
      <div className="fixed bottom-8 right-8 z-[60] group">
        <div className="bg-sky-600 text-white px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(14,165,233,0.3)] flex items-center gap-4 animate-bounce-slow hover:animate-none cursor-pointer transition-all hover:scale-105 active:scale-95 border-4 border-white">
          <Compass className="w-8 h-8 text-white animate-spin-slow" />
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-widest leading-none opacity-80 mb-1">Live Chat</span>
            <span className="font-black text-xl leading-none tracking-tighter">Urlaubs-Concierge</span>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <DestinationsSection />
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

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
          alt="Pub atmosphere" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D241E]/60 via-[#2D241E]/40 to-[#FFFDF5]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#E6B325]/20 border border-[#E6B325]/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="text-[#E6B325] font-bold tracking-wider text-sm uppercase">Seit 1995 in Musterhausen</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          Wo Fremde zu <span className="text-[#E6B325]">Freunden</span> werden.
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Herzlich willkommen in Mustermann's Braustube. Erlebe ehrliche Gastfreundschaft, kühles Craft-Bier und die beste Atmosphäre der Stadt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-[#E6B325] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#d4a21e] transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Speisekarte ansehen
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
          >
            Unsere Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;

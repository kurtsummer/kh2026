import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Friendly Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536964541075-e392f41c07bd?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmosphärischer Pub-Bereich mit Gästen" 
          className="w-full h-full object-cover scale-105 filter brightness-[0.5] dark:brightness-[0.4] contrast-[1.1]"
        />
        {/* Warm Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/20 dark:from-[#0F0A08]/40 via-transparent to-[#FAF6F0] dark:to-[#0F0A08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,136,6,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="h-[1px] w-12 bg-[#D48806]" />
          <div className="flex gap-1 text-[#D48806]">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
          <div className="h-[1px] w-12 bg-[#D48806]" />
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic-font-pub animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Dein zweites <br />
          <span className="text-[#D48806] not-italic">Wohnzimmer.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed font-serif animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 italic">
          Kühles Bier, ehrliche Küche und die beste Gesellschaft in Musterhausen. Seit 1995.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-[#D48806] text-[#1A0F0A] px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(212,136,6,0.4)] hover:-translate-y-1"
          >
            Zur Speisekarte
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
          >
            Tisch reservieren
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="text-[#D48806] w-10 h-10" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
        .italic-font-pub {
          font-family: 'Playfair Display', serif;
        }
      `}} />
    </section>
  );
};

export default Hero;

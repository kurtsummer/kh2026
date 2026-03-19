import React from 'react';
import { Heart, Beer, Users, Quote } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#FAF6F0] dark:bg-[#0F0A08] relative overflow-hidden transition-colors duration-500">
      {/* Decorative wood grain background subtle */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            {/* Vintage Frame Effect */}
            <div className="absolute -inset-4 border border-[#2D241E]/10 dark:border-[#D48806]/20 rounded-2xl" />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1597075095353-83321473266e?q=80&w=1000&auto=format&fit=crop" 
                alt="Cozy Pub Interior" 
                className="w-full h-full object-cover dark:grayscale-[0.2] dark:sepia-[0.2] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0]/60 dark:from-[#0F0A08] via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-10 -right-6 bg-white dark:bg-[#1A0F0A] border border-[#2D241E]/5 dark:border-[#D48806]/30 p-10 rounded-xl shadow-2xl max-w-[280px] hidden md:block transform rotate-3">
              <Quote className="text-[#D48806] w-8 h-8 mb-4 opacity-50" />
              <p className="text-[#2D241E] dark:text-[#F5E6D3] italic font-serif text-lg leading-relaxed">
                "Hier zählt nicht, was du arbeitest, sondern dass du da bist."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#D48806]" />
                <p className="font-bold text-[#D48806] text-xs uppercase tracking-widest">Max Mustermann</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border border-[#D48806]/30 rounded-full text-[#D48806] text-[10px] font-black uppercase tracking-[0.3em]">
                Unsere Geschichte
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#2D241E] dark:text-white leading-tight">
                Tradition, die man <br />
                <span className="text-[#D48806]">schmecken kann.</span>
              </h2>
              <p className="text-xl text-[#2D241E]/70 dark:text-[#F5E6D3]/70 leading-relaxed font-serif italic">
                Seit fast drei Jahrzehnten ist Mustermann's Braustube der Ankerpunkt in Musterhausen. Was als kleine Kellerbar begann, ist heute ein Ort, an dem Geschichten geschrieben werden. 
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Beer className="w-6 h-6 text-[#1A0F0A]" />,
                  title: 'Eigene Rezeptur',
                  desc: 'Unser "Muster-Helles" wird nach Familienrezept gebraut.'
                },
                {
                  icon: <Users className="w-6 h-6 text-[#1A0F0A]" />,
                  title: 'Für Alle Da',
                  desc: 'Vom Stammtisch bis zur Firmenfeier – Platz für 150 Gäste.'
                },
                {
                  icon: <Heart className="w-6 h-6 text-[#1A0F0A]" />,
                  title: 'Gastgeber mit Herz',
                  desc: 'Persönlicher Service wird bei uns großgeschrieben.'
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-[#2D241E]/5 dark:border-[#D48806]/10 hover:border-[#D48806]/40 transition-all bg-white dark:bg-[#1A0F0A]/50 shadow-sm hover:shadow-xl">
                  <div className="bg-[#D48806] w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-xl text-[#2D241E] dark:text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

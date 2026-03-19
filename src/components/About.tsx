import React from 'react';
import { Heart, Beer, Users, Quote, Camera } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#FAF6F0] dark:bg-[#0F0A08] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group space-y-6">
            {/* Main Image with Vintage Frame */}
            <div className="relative">
              <div className="absolute -inset-4 border border-[#2D241E]/10 dark:border-[#D48806]/20 rounded-2xl" />
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Einladender Pub Innenraum" 
                  className="w-full h-full object-cover dark:grayscale-[0.1] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0]/40 dark:from-[#0F0A08]/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Smaller Detail Images for "Friendlier" look */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=600&auto=format&fit=crop" 
                  alt="Frisch gezapftes Bier" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1599940824399-b87987cb971a?q=80&w=600&auto=format&fit=crop" 
                  alt="Gemütliche Tischrunde" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1A0F0A] border border-[#2D241E]/5 dark:border-[#D48806]/30 p-8 rounded-xl shadow-2xl max-w-[260px] hidden xl:block transform -rotate-2">
              <Quote className="text-[#D48806] w-6 h-6 mb-3 opacity-50" />
              <p className="text-[#2D241E] dark:text-[#F5E6D3] italic font-serif text-base leading-relaxed">
                "Ein Ort, an dem die Zeit stillsteht und das Lachen niemals aufhört."
              </p>
              <p className="mt-4 font-black text-[#D48806] text-[10px] uppercase tracking-widest">— Max Mustermann</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border border-[#D48806]/30 rounded-full text-[#D48806] text-[10px] font-black uppercase tracking-[0.3em]">
                Willkommen Zuhause
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#2D241E] dark:text-white leading-tight">
                Wo Gastfreundschaft <br />
                <span className="text-[#D48806]">Tradition hat.</span>
              </h2>
              <p className="text-xl text-[#2D241E]/70 dark:text-[#F5E6D3]/70 leading-relaxed font-serif italic">
                Seit 1995 ist Mustermann's Braustube das Herzstück von Musterhausen. Wir glauben an ehrliches Handwerk, regionale Produkte und die magischen Momente, die nur in einem echten Pub entstehen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Beer className="w-5 h-5 text-[#1A0F0A]" />,
                  title: 'Bierkultur',
                  desc: '12 Sorten vom Fass, darunter unser berühmtes Hausbräu.'
                },
                {
                  icon: <Users className="w-5 h-5 text-[#1A0F0A]" />,
                  title: 'Beisammensein',
                  desc: 'Vom Stammtisch bis zum Junggesellenabschied – wir haben Platz.'
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-[#2D241E]/5 dark:border-[#D48806]/10 bg-white dark:bg-[#1A0F0A]/50 shadow-sm hover:shadow-xl transition-all">
                  <div className="bg-[#D48806] w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-lg text-[#2D241E] dark:text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-3 text-[#D48806] font-black text-xs uppercase tracking-[0.3em] group">
                <Camera size={18} />
                Mehr Impressionen entdecken
                <div className="w-8 h-[1px] bg-[#D48806] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

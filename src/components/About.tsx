import { Coffee, Heart, Users, Utensils, Star, Sun, ShieldCheck } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Coffee className="w-6 h-6" />, label: "Tassen Melange/Jahr", value: "35.000+" },
    { icon: <Heart className="w-6 h-6" />, label: "Zufriedene Gäste", value: "15.000+" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Tradition & Handwerk", value: "100%" },
    { icon: <Star className="w-6 h-6" />, label: "Jahre Tradition", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0A1A17] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] border-[12px] border-[#FDF5E6] dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop"
                alt="Wiener Kaffeehaus-Atmosphäre"
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#800020] text-white p-10 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center animate-bounce-slow border-4 border-[#D4AF37]">
              <span className="text-4xl font-serif font-black">15+</span>
              <span className="text-xs font-black uppercase tracking-widest text-center">Jahre<br />Genuss</span>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-4 -z-10 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[#800020] rounded-full" />
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase border border-[#D4AF37]/20">
                <Users className="w-4 h-4" />
                <span>Wiener Erbe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] leading-tight">
                Ein Hauch von Wien <br />
                <span className="text-[#800020]">in Musterhausen.</span>
              </h2>
              <p className="text-lg text-[#3D2B1F]/70 dark:text-[#FDF5E6]/70 leading-relaxed font-medium">
                Das Café Mustermann ist mehr als nur ein Café – es ist eine Institution der Gemütlichkeit. Gegründet von Max Mustermann, führen wir die stolze Tradition der Wiener Kaffeehauskultur fort. 
              </p>
              <p className="text-lg text-[#3D2B1F]/70 dark:text-[#FDF5E6]/70 leading-relaxed font-medium">
                Bei uns finden Sie nicht nur exzellente Kaffeespezialitäten, sondern auch einen Ort zum Entschleunigen. Hier wird Zeitung gelesen, diskutiert oder einfach nur der Moment genossen – ganz im Sinne der klassischen Wiener Lebensart.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#3D2B1F]/10 dark:border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#800020]/10 rounded-xl text-[#800020] group-hover:bg-[#800020] group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">{stat.value}</span>
                  </div>
                  <p className="text-sm font-bold text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4 bg-[#FDF5E6] dark:bg-zinc-900 p-6 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#800020]/20 shadow-lg shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                    alt="Max Mustermann" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">"Kaffeehaus ist ein Ort, wo man allein sein kann, ohne einsam zu sein."</p>
                  <p className="text-sm font-black text-[#800020] uppercase tracking-widest mt-1">— Max Mustermann</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

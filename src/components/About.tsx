import { Coffee, Heart, Users, Utensils, Star, Sun } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Coffee className="w-6 h-6" />, label: "Tassen Kaffee/Jahr", value: "25.000+" },
    { icon: <Heart className="w-6 h-6" />, label: "Zufriedene Gäste", value: "10.000+" },
    { icon: <Sun className="w-6 h-6" />, label: "Sonnentage im Garten", value: "180+" },
    { icon: <Star className="w-6 h-6" />, label: "Jahre Tradition", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0A1A17] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop"
                alt="Das gemütliche Ambiente des Café Mustermann"
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16332C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#C5A059] text-white p-10 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center animate-bounce-slow">
              <span className="text-4xl font-black">15+</span>
              <span className="text-xs font-black uppercase tracking-widest text-center">Jahre<br />Genuss</span>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-4 -z-10 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[#16332C] rounded-full" />
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 text-[#C5A059] px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                <Users className="w-4 h-4" />
                <span>Unsere Geschichte</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-tight">
                Mit Leidenschaft <br />
                <span className="text-[#C5A059]">von Max Mustermann.</span>
              </h2>
              <p className="text-lg text-[#16332C]/70 dark:text-[#FDF8F1]/70 leading-relaxed">
                Willkommen im Herzen von Musterhausen. Was vor 15 Jahren als kleine Kaffeerösterei begann, hat sich unter der Leitung von Max Mustermann zu einem Ort der Begegnung und des Genusses entwickelt. 
              </p>
              <p className="text-lg text-[#16332C]/70 dark:text-[#FDF8F1]/70 leading-relaxed">
                Bei uns wird Handwerk großgeschrieben. Ob unsere täglich frisch gebackenen Kuchen, die hauseigenen Röstungen oder die liebevoll zubereiteten Frühstücksplatten – wir legen Wert auf regionale Zutaten und echte Qualität. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#16332C]/10 dark:border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C5A059]/10 rounded-xl text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-black text-[#16332C] dark:text-[#FDF8F1]">{stat.value}</span>
                  </div>
                  <p className="text-sm font-bold text-[#16332C]/50 dark:text-[#FDF8F1]/50 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4 bg-[#FDF8F1] dark:bg-zinc-900 p-6 rounded-3xl border border-[#C5A059]/20">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#C5A059]/20 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                    alt="Max Mustermann" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-black text-[#16332C] dark:text-[#FDF8F1]">"Kaffee ist für mich mehr als ein Getränk, es ist ein Stück Lebensqualität."</p>
                  <p className="text-sm font-bold text-[#C5A059] uppercase tracking-widest mt-1">— Max Mustermann, Inhaber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

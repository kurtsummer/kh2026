import { Star, Quote, Palmtree, Ship, Plane } from "lucide-react";

const testimonials = [
  {
    name: "Sabine Müller",
    role: "Malediven Urlauberin",
    content: "Max Mustermann hat uns die perfekte Hochzeitsreise zusammengestellt. Von der Ankunft bis zum Abflug war alles perfekt organisiert. Ein Traum wurde wahr!",
    rating: 5,
    icon: Palmtree
  },
  {
    name: "Thomas Schmidt",
    role: "Kreuzfahrt-Fan",
    content: "Die Beratung zur Mittelmeer-Kreuzfahrt war erstklassig. Max kennt die Schiffe in- und auswendig und hat uns wertvolle Tipps für die Landausflüge gegeben.",
    rating: 5,
    icon: Ship
  },
  {
    name: "Familie Weber",
    role: "Städtereise New York",
    content: "Das Hotel in Manhattan war ein echter Geheimtipp. Super zentral und trotzdem ruhig. Dank der tollen Planung hatten wir eine stressfreie Zeit in NYC.",
    rating: 5,
    icon: Plane
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-sky-900 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] border-4 border-amber-400/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] border-4 border-white/10 rounded-full animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 bg-amber-400 text-sky-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-amber-400/20">
            Kundenstimmen
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            Echte Erlebnisse <br />
            <span className="text-amber-400 italic">unserer Reisenden</span>
          </h2>
          <p className="text-sky-100 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
            Nichts motiviert uns mehr als die glücklichen Gesichter unserer Kunden nach ihrer Rückkehr.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-3xl border-4 border-white/10 p-12 rounded-[4rem] flex flex-col justify-between hover:bg-white/20 transition-all duration-700 group hover:-translate-y-4 relative">
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-amber-400/20 transition-colors duration-700">
                <t.icon className="w-24 h-24 rotate-12" />
              </div>
              
              <div>
                <Quote className="w-16 h-16 text-amber-400 mb-10 opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                <p className="text-white text-xl leading-relaxed mb-12 font-bold italic tracking-tight">
                  "{t.content}"
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-lg" />
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-black text-3xl tracking-tighter italic">{t.name}</h4>
                  <p className="text-amber-400 font-black text-[10px] uppercase tracking-[0.3em] leading-none">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sabine Müller",
    role: "Verkäuferin in Musterhausen",
    content: "Herr Mustermann hat meine Immobilie innerhalb von nur 4 Wochen zum Wunschpreis verkauft. Die Beratung war professionell und ehrlich. Ich fühlte mich jederzeit bestens betreut!",
    rating: 5
  },
  {
    name: "Thomas Schmidt",
    role: "Käufer einer Penthouse-Wohnung",
    content: "Endlich ein Makler, der wirklich zuhört. Die Besichtigung war top vorbereitet und alle Unterlagen lagen sofort vor. Die Abwicklung beim Notar verlief reibungslos.",
    rating: 5
  },
  {
    name: "Karin Weber",
    role: "Vermieterin",
    content: "Hervorragende Mietersuche. Max Mustermann hat mir tolle Mieter präsentiert, die perfekt zur Hausgemeinschaft passen. Absolute Empfehlung für alle Vermieter!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] border-[1px] border-amber-500/20 rounded-full" />
        <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] border-[1px] border-amber-500/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Kundenstimmen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Ihr Vertrauen ist <br />
            <span className="text-amber-500">unser größtes Kapital</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit Max Mustermann Immobilien sagen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] flex flex-col justify-between hover:bg-white/10 transition-all duration-700 group hover:-translate-y-2">
              <div>
                <Quote className="w-16 h-16 text-amber-500 mb-10 opacity-40 group-hover:opacity-100 transition-all duration-700" />
                <p className="text-slate-300 text-xl leading-relaxed mb-12 font-medium italic">
                  "{t.content}"
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-1.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-black text-2xl tracking-tight">{t.name}</h4>
                  <p className="text-amber-500 font-black text-xs uppercase tracking-widest leading-none">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

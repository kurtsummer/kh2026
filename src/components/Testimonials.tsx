import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sabine Müller",
    role: "Langjährige Patientin",
    content: "Dr. Mustermann nimmt sich immer viel Zeit und erklärt alles sehr verständlich. Die Praxisorganisation ist hervorragend!",
    rating: 5
  },
  {
    name: "Thomas Schmidt",
    role: "Patient",
    content: "Endlich ein Arzt, der wirklich zuhört. Das gesamte Team ist kompetent und herzlich. Hier fühlt man sich gut aufgehoben.",
    rating: 5
  },
  {
    name: "Karin Weber",
    role: "Mutter von 2 Kindern",
    content: "Hervorragende Betreuung für die ganze Familie. Moderne Ausstattung und sehr kurze Wartezeiten. Absolut empfehlenswert.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-indigo-950 overflow-hidden relative">
      {/* Abstract medical patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] border-[2px] border-indigo-500/30 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] border-[1px] border-indigo-500/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-400 font-extrabold tracking-[0.2em] uppercase text-sm mb-4">Patientenstimmen</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ihr Vertrauen ist unser Ziel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] flex flex-col justify-between hover:bg-white/10 transition-all duration-500 group">
              <div>
                <Quote className="w-12 h-12 text-indigo-500 mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                <p className="text-indigo-50/90 text-lg leading-relaxed mb-10 font-medium italic">
                  "{t.content}"
                </p>
              </div>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
                <h4 className="text-white font-black text-xl">{t.name}</h4>
                <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

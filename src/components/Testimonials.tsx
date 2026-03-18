import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sabine Müller",
    role: "Patientin seit 5 Jahren",
    content: "Dr. Mustermann nimmt sich immer viel Zeit und erklärt alles sehr verständlich. Die Praxisorganisation ist top!",
    rating: 5
  },
  {
    name: "Thomas Schmidt",
    role: "Patient",
    content: "Endlich ein Arzt, der wirklich zuhört. Das Team ist super freundlich und die Wartezeiten sind absolut im Rahmen.",
    rating: 5
  },
  {
    name: "Karin Weber",
    role: "Mutter von 2 Kindern",
    content: "Tolle Betreuung für die ganze Familie. Man fühlt sich hier einfach gut aufgehoben und kompetent beraten.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-teal-600 overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-100 font-bold tracking-wider uppercase text-sm mb-3">Erfahrungen</h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6">
            Was unsere Patienten sagen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/20 transition-all duration-300">
              <div>
                <Quote className="w-10 h-10 text-teal-300 mb-6 opacity-50" />
                <p className="text-white text-lg leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-teal-200 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

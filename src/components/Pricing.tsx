import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const prices = [
  {
    category: "Medizinisch",
    title: "Med. Fußpflege (Basis)",
    price: "45€",
    duration: "ca. 30-45 Min.",
    features: [
      "Nagelkürzen & Glätten",
      "Reinigung Nagelfalz",
      "Hornhautentfernung",
      "Kleine Abschlusspflege",
    ],
    popular: true,
  },
  {
    category: "Wellness",
    title: "Fußpflege-Wellness-Paket",
    price: "65€",
    duration: "ca. 60 Min.",
    features: [
      "Alle Leistungen der Basis-Pflege",
      "Belebendes Fußbad",
      "Wohltuende Fußmassage",
      "Luxus-Packung/Pflege",
    ],
    popular: false,
  },
  {
    category: "Spezial",
    title: "Spangenbehandlung",
    price: "ab 55€",
    duration: "ca. 20-30 Min.",
    features: [
      "Individuelle Anfertigung",
      "Setzen der Spange",
      "Regelmäßige Kontrolle",
      "Druckentlastung inklusive",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="preise" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/30 rounded-l-[10rem] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-cyan-600 font-black uppercase tracking-widest text-sm bg-cyan-50 px-4 py-2 rounded-full inline-block">
            Preise & Pakete
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Transparente Preise für Ihre <br />
            <span className="text-cyan-600">Gesundheit & Schönheit.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Wählen Sie die passende Behandlung für Ihre Bedürfnisse. Qualität und Transparenz stehen bei uns an erster Stelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {prices.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-4 ${
                item.popular 
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-400 scale-105" 
                  : "bg-white text-slate-900 shadow-xl shadow-slate-100 border border-slate-100"
              }`}
            >
              {item.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg">
                  Empfehlung
                </div>
              )}
              
              <div className="space-y-2 mb-8">
                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${
                  item.popular ? "bg-white/10 text-cyan-300" : "bg-cyan-50 text-cyan-600"
                }`}>
                  {item.category}
                </span>
                <h3 className="text-2xl font-black pt-4">{item.title}</h3>
                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-4xl font-black">{item.price}</span>
                  <span className={`text-sm font-bold ${item.popular ? "text-slate-400" : "text-slate-500"}`}>
                    / Sitzung
                  </span>
                </div>
                <p className={`text-sm font-bold pt-2 ${item.popular ? "text-cyan-300" : "text-cyan-600"}`}>
                  {item.duration}
                </p>
              </div>

              <div className={`h-px w-full my-8 ${item.popular ? "bg-white/10" : "bg-slate-100"}`} />

              <ul className="space-y-5 mb-10">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-[15px] font-bold">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.popular ? "bg-cyan-500 text-white" : "bg-cyan-50 text-cyan-600"
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={item.popular ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-14 rounded-2xl text-lg font-black transition-all active:scale-95 ${
                  item.popular 
                    ? "bg-white text-slate-900 hover:bg-slate-100" 
                    : "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-100"
                }`}
                onClick={() => {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Jetzt anfragen
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-bold text-sm">
            * Alle Preise inkl. MwSt. Abweichungen je nach Aufwand möglich. <br />
            Hausbesuche auf Anfrage gegen Aufpreis möglich.
          </p>
        </div>
      </div>
    </section>
  );
};

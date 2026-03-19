import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Heart, Waves, Footprints, Thermometer } from "lucide-react";

const services = [
  {
    title: "Medizinische Fußpflege",
    description: "Fachgerechte Behandlung von Hühneraugen, eingewachsenen Nägeln und Hornhautproblemen.",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-cyan-100 text-cyan-600",
    features: ["Fachgerechtes Nagelkürzen", "Entfernung von Hornhaut", "Hühneraugen-Behandlung"],
  },
  {
    title: "Kosmetische Fußpflege",
    description: "Ästhetische Pflege für Ihre Füße, inklusive Nagelverschönerung und entspannender Massage.",
    icon: <Waves className="w-6 h-6" />,
    color: "bg-teal-100 text-teal-600",
    features: ["Wellness-Fußbad", "Nagelhautpflege", "Nagel-Lackierung"],
  },
  {
    title: "Diabetische Fußpflege",
    description: "Spezialisierte Pflege für Diabetiker unter Einhaltung strengster Hygiene- und Sicherheitsregeln.",
    icon: <Thermometer className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    features: ["Sensibilitätsprüfung", "Verletzungsfreie Pflege", "Individuelle Beratung"],
  },
  {
    title: "Spangenbehandlung",
    description: "Sanfte Korrektur bei eingewachsenen oder Rollnägeln ohne chirurgischen Eingriff.",
    icon: <Footprints className="w-6 h-6" />,
    color: "bg-cyan-200 text-cyan-700",
    features: ["3TO Spangentechnik", "Druckentlastung", "Langfristige Korrektur"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="leistungen" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#f8fafc] to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Umfassende Pflege für Ihre <br />
            <span className="text-cyan-600">Füße und Ihr Wohlbefinden.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Ob medizinisch notwendig oder rein zur Entspannung – wir bieten Ihnen maßgeschneiderte Behandlungen in einer ruhigen und hygienischen Atmosphäre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-100"
            >
              <CardHeader className="p-8 pb-4">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500 shadow-sm`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-4">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 text-[15px] leading-relaxed font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-cyan-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-100 rounded-[2.5rem] pointer-events-none transition-colors" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

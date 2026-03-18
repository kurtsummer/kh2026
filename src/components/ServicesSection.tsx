import { 
  Stethoscope, 
  Syringe, 
  Activity, 
  Heart, 
  Thermometer, 
  ClipboardCheck 
} from "lucide-react";

const services = [
  {
    title: "Allgemeinmedizin",
    description: "Umfassende Betreuung bei akuten und chronischen Erkrankungen.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Vorsorge",
    description: "Regelmäßige Check-ups ab 35, Hautkrebs-Screening und Jugenduntersuchungen.",
    icon: ClipboardCheck,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Impfungen",
    description: "Reiseberatung und Durchführung aller standardmäßigen Schutzimpfungen.",
    icon: Syringe,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "EKG & Lungenfunktion",
    description: "Moderne Diagnostik zur Früherkennung von Herz- und Lungenerkrankungen.",
    icon: Activity,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Laboruntersuchungen",
    description: "Tägliche Blutentnahmen und schnelle Auswertung wichtiger Parameter.",
    icon: Thermometer,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "DMP Programme",
    description: "Strukturierte Behandlungsprogramme für chronisch Kranke (Diabetes, Asthma, COPD).",
    icon: Heart,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Unsere Leistungen</h2>
          <p className="text-4xl md:text-5xl font-bold text-teal-950 mb-6">
            Kompetente Medizin für die ganze Familie
          </p>
          <p className="text-teal-800/60 max-w-2xl mx-auto text-lg">
            Wir bieten Ihnen ein breites Spektrum an medizinischen Leistungen, um Ihre Gesundheit 
            langfristig zu erhalten und zu fördern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-teal-950 mb-3">{service.title}</h3>
              <p className="text-teal-800/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

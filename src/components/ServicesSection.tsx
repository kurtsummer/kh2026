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
    description: "Umfassende hausärztliche Betreuung bei akuten und chronischen Beschwerden.",
    icon: Stethoscope,
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100"
  },
  {
    title: "Vorsorge & Check-up",
    description: "Präventionsuntersuchungen ab 35, Hautkrebs-Screening und Jugendvorsorge.",
    icon: ClipboardCheck,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    title: "Impfschutz",
    description: "Umfassende Impfberatung für den Alltag und für Ihre nächste Reise.",
    icon: Syringe,
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100"
  },
  {
    title: "Herz & Lunge",
    description: "Diagnostik mittels EKG, Belastungs-EKG und Lungenfunktionsprüfung.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    title: "Labordiagnostik",
    description: "Präzise Blutuntersuchungen in Kooperation mit führenden Fachlaboren.",
    icon: Thermometer,
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100"
  },
  {
    title: "DMP Programme",
    description: "Strukturierte Behandlungsprogramme für chronische Erkrankungen.",
    icon: Heart,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-extrabold tracking-[0.2em] uppercase text-sm mb-4">Medizinische Leistungen</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Kompetenz durch Erfahrung
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Wir bieten Ihnen eine moderne und leitliniengerechte hausärztliche Versorgung auf höchstem fachlichem Niveau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-10 rounded-[2.5rem] bg-slate-50/50 border ${service.border} hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 rounded-[1.25rem] ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

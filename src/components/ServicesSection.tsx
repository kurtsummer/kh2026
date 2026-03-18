import { 
  Home, 
  Search, 
  BarChart3, 
  Handshake, 
  Calculator, 
  Camera 
} from "lucide-react";

const services = [
  {
    title: "Immobilienverkauf",
    description: "Wir vermarkten Ihre Immobilie zum bestmöglichen Preis mit modernster Technik und großem Netzwerk.",
    icon: Home,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  },
  {
    title: "Marktwertanalyse",
    description: "Kostenlose und unverbindliche Wertermittlung Ihrer Immobilie auf Basis aktueller Marktdaten in Musterhausen.",
    icon: BarChart3,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    title: "Suchservice",
    description: "Finden Sie Ihr Traumobjekt noch bevor es offiziell gelistet wird – durch unseren exklusiven Suchservice.",
    icon: Search,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  },
  {
    title: "Beratung & Strategie",
    description: "Individuelle Beratung für Kapitalanleger, Projektentwickler und private Bauherren.",
    icon: Handshake,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  },
  {
    title: "Finanzierungsvermittlung",
    description: "Wir unterstützen Sie bei der Suche nach der passenden Finanzierung durch unsere Bankpartner.",
    icon: Calculator,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  },
  {
    title: "Profifotografie & Video",
    description: "High-End-Präsentation Ihrer Immobilie durch professionelle Fotos, Drohnenaufnahmen und 360°-Rundgänge.",
    icon: Camera,
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100"
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Unsere Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Umfassender Service <br />
            <span className="text-amber-500">aus einer Hand</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Wir begleiten Sie mit Leidenschaft und Fachkompetenz bei jedem Schritt Ihres Immobiliengeschäfts in Musterhausen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-12 rounded-[3.5rem] bg-slate-50/50 border ${service.border} hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2`}
            >
              <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

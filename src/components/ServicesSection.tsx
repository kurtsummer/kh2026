import { 
  Palmtree, 
  Plane, 
  Ship, 
  Map, 
  ShieldCheck, 
  Compass,
  Briefcase,
  Ticket
} from "lucide-react";

const services = [
  {
    title: "Pauschalreisen",
    description: "Sorglos in den Urlaub mit unseren attraktiven Komplettpaketen inkl. Flug, Hotel und Transfer.",
    icon: Palmtree,
    color: "bg-sky-50 text-sky-600",
    border: "border-sky-100"
  },
  {
    title: "Kreuzfahrten",
    description: "Entdecken Sie die Weltmeere auf den modernsten Schiffen von AIDA, TUI Cruises und vielen mehr.",
    icon: Ship,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  },
  {
    title: "Individualreisen",
    description: "Wir stellen Ihre Traumreise ganz nach Ihren persönlichen Wünschen und Vorstellungen zusammen.",
    icon: Map,
    color: "bg-sky-50 text-sky-600",
    border: "border-sky-100"
  },
  {
    title: "Geschäftsreisen",
    description: "Professionelle Planung und Buchung für Ihre Business-Trips – effizient und unkompliziert.",
    icon: Briefcase,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  },
  {
    title: "Reiseversicherung",
    description: "Gehen Sie auf Nummer sicher mit dem passenden Reiseschutz für alle Eventualitäten.",
    icon: ShieldCheck,
    color: "bg-sky-50 text-sky-600",
    border: "border-sky-100"
  },
  {
    title: "Last Minute",
    description: "Spontane Auszeit gesucht? Finden Sie bei uns die besten Schnäppchen für Kurzentschlossene.",
    icon: Ticket,
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100"
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-lg shadow-sky-100">
            <Compass className="w-5 h-5 animate-spin-slow" />
            Unsere Leistungen
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Ihr Weg zum <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 italic">perfekten Urlaub</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
            Wir kümmern uns um jedes Detail Ihrer Reise, damit Sie sich voll und ganz auf das Erleben konzentrieren können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-12 rounded-[4rem] bg-white border-4 ${service.border} hover:border-transparent hover:shadow-[0_40px_80px_-15px_rgba(0,186,255,0.15)] transition-all duration-700 hover:-translate-y-4 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <service.icon className="w-32 h-32 rotate-12" />
              </div>
              
              <div className={`w-24 h-24 rounded-[2.5rem] ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-sky-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-bold">
                {service.description}
              </p>
              
              <div className="mt-10 flex items-center gap-2 text-sky-600 font-black uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

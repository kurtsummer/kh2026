import { 
  Palmtree, 
  Ship, 
  Map, 
  ShieldCheck, 
  Compass,
  Briefcase,
  Ticket,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Pauschalreisen",
    description: "Sorglos in den Urlaub mit unseren attraktiven Komplettpaketen inkl. Flug, Hotel und Transfer.",
    icon: Palmtree,
    color: "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-500/20"
  },
  {
    title: "Kreuzfahrten",
    description: "Entdecken Sie die Weltmeere auf den modernsten Schiffen von AIDA, TUI Cruises und vielen mehr.",
    icon: Ship,
    color: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-500/20"
  },
  {
    title: "Individualreisen",
    description: "Wir stellen Ihre Traumreise ganz nach Ihren persönlichen Wünschen und Vorstellungen zusammen.",
    icon: Map,
    color: "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-500/20"
  },
  {
    title: "Geschäftsreisen",
    description: "Professionelle Planung und Buchung für Ihre Business-Trips – effizient und unkompliziert.",
    icon: Briefcase,
    color: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-500/20"
  },
  {
    title: "Reiseversicherung",
    description: "Gehen Sie auf Nummer sicher mit dem passenden Reiseschutz für alle Eventualitäten.",
    icon: ShieldCheck,
    color: "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-500/20"
  },
  {
    title: "Last Minute",
    description: "Spontane Auszeit gesucht? Finden Sie bei uns die besten Schnäppchen für Kurzentschlossene.",
    icon: Ticket,
    color: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-500/20"
  }
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-50 dark:bg-sky-500/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-50 dark:bg-amber-500/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-lg shadow-sky-100 dark:shadow-sky-900/20">
            <Compass className="w-5 h-5 animate-spin-slow" />
            Unsere Leistungen
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Ihr Weg zum <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 italic">perfekten Urlaub</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
            Wir kümmern uns um jedes Detail Ihrer Reise, damit Sie sich voll und ganz auf das Erleben konzentrieren können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-12 rounded-[4rem] bg-white dark:bg-slate-900 border-4 ${service.border} hover:border-transparent hover:shadow-[0_40px_80px_-15px_rgba(0,186,255,0.15)] transition-all duration-700 hover:-translate-y-4 relative overflow-hidden shadow-sm`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <service.icon className="w-32 h-32 rotate-12 text-slate-900 dark:text-white" />
              </div>
              
              <div className={`w-24 h-24 rounded-[2.5rem] ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-bold">
                {service.description}
              </p>
              
              <div className="mt-10 flex items-center gap-2 text-sky-600 dark:text-sky-400 font-black uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

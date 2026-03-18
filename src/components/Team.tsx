const team = [
  {
    name: "Max Mustermann",
    role: "Inhaber & Immobilienmakler",
    specialty: "Verkauf & Akquisition",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sandra Beispiel",
    role: "Marketing & Backoffice",
    specialty: "Exposé-Gestaltung",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Thomas Muster",
    role: "Immobilienökonom",
    specialty: "Marktwertanalyse",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  }
];

export const Team = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Hinter den Kulissen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Ihre Experten für <br />
            <span className="text-amber-500">Musterhausen</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Ein starkes Team mit Leidenschaft für Immobilien und dem Fokus auf Ihre individuellen Ziele.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-12 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] transition-all duration-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale-[0.2] contrast-[1.05] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
                  <p className="text-amber-400 font-black tracking-[0.2em] uppercase text-xs mb-3">{member.specialty}</p>
                </div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{member.name}</h3>
              <p className="text-amber-600 font-black uppercase tracking-[0.2em] text-[10px]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

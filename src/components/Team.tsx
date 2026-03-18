const team = [
  {
    name: "Dr. med. Max Mustermann",
    role: "Facharzt für Allgemeinmedizin",
    specialty: "Chirotherapie & Akupunktur",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Erika Musterfrau",
    role: "Praxisleitung",
    specialty: "Präventionsassistentin",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Julia Beispiel",
    role: "Medizinische Fachangestellte",
    specialty: "Impfspezialistin & Labor",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-extrabold tracking-[0.2em] uppercase text-sm mb-4">Unser Team</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Kompetente Begleitung <br />
            <span className="text-indigo-600">für Ihre Gesundheit</span>
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Hinter jeder erfolgreichen Behandlung steht ein engagiertes Team, das sich mit Leidenschaft um Ihr Wohlbefinden kümmert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-xl group-hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] transition-all duration-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.02] group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <p className="text-white font-bold tracking-wider uppercase text-[10px] mb-2">{member.specialty}</p>
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{member.name}</h3>
              <p className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

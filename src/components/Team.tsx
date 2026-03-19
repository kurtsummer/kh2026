const team = [
  {
    name: "Max Mustermann",
    role: "Inhaber & Reiseexperte",
    specialty: "Kreuzfahrten & Fernreisen",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sandra Beispiel",
    role: "Reiseverkehrskauffrau",
    specialty: "Familienurlaub & Wellness",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Thomas Muster",
    role: "Reisespezialist",
    specialty: "Städtereisen & Individual",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  }
];

export const Team = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-sky-100 dark:shadow-sky-900/20">
            Hinter den Kulissen
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Ihre Experten für <br />
            <span className="text-sky-600 dark:text-sky-400 italic">unvergessliche Momente</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
            Ein leidenschaftliches Team, das die Welt für Sie entdeckt hat. Wir beraten Sie mit Herz und Verstand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-12 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] group-hover:shadow-[0_50px_100px_-20px_rgba(14,165,233,0.3)] transition-all duration-700 hover:-translate-y-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale-[0.2] group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 dark:from-slate-950/90 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
                  <p className="text-amber-400 font-black tracking-[0.3em] uppercase text-[10px] mb-3">{member.specialty}</p>
                  <p className="text-white text-sm font-bold opacity-80">Über {Math.floor(Math.random() * 20) + 10} Länder bereist</p>
                </div>
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter italic">{member.name}</h3>
              <p className="text-sky-600 dark:text-sky-400 font-black uppercase tracking-[0.3em] text-[10px]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

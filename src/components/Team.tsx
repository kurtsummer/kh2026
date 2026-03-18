const team = [
  {
    name: "Dr. med. Max Mustermann",
    role: "Facharzt für Allgemeinmedizin",
    specialty: "Chirotherapie & Akupunktur",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Erika Musterfrau",
    role: "Medizinische Fachangestellte",
    specialty: "Praxismanagement & Labor",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Julia Beispiel",
    role: "Medizinische Fachangestellte",
    specialty: "Prävention & Impfberatung",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop"
  }
];

export const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Unser Team</h2>
          <p className="text-4xl md:text-5xl font-bold text-teal-950 mb-6">
            Für Sie im Einsatz
          </p>
          <p className="text-teal-800/60 max-w-2xl mx-auto text-lg">
            Ein eingespieltes Team aus erfahrenen Fachkräften sorgt dafür, dass Sie sich bei uns 
            gut aufgehoben fühlen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-teal-100 font-medium">{member.specialty}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-teal-950 mb-1">{member.name}</h3>
              <p className="text-teal-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

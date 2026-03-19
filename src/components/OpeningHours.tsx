import { Clock, Calendar, AlertCircle } from "lucide-react";

export const OpeningHours = () => {
  const hours = [
    { day: "Montag", time: "08:30 – 18:00 Uhr" },
    { day: "Dienstag", time: "08:30 – 18:00 Uhr" },
    { day: "Mittwoch", time: "08:30 – 14:00 Uhr" },
    { day: "Donnerstag", time: "10:00 – 19:30 Uhr" },
    { day: "Freitag", time: "08:30 – 16:00 Uhr" },
    { day: "Samstag", time: "Nach Vereinbarung" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <section id="oeffnungszeiten" className="py-24 bg-[#f8fafc] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-cyan-600 font-black uppercase tracking-widest text-sm bg-cyan-50 px-4 py-2 rounded-full inline-block">
                Besuch planen
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Unsere Öffnungszeiten in <br />
                <span className="text-cyan-600">Musterhausen.</span>
              </h2>
            </div>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Planen Sie Ihren Besuch ganz bequem nach Ihren zeitlichen Möglichkeiten. Wir legen großen Wert auf Pünktlichkeit, um Ihnen unnötige Wartezeiten zu ersparen.
            </p>

            <div className="p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100 flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">Termine nur nach Vereinbarung</h3>
                <p className="text-slate-600 font-medium">
                  Um die bestmögliche Behandlungsqualität zu gewährleisten, bitten wir Sie um eine telefonische Terminreservierung.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50/50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Wochenplan</h3>
              </div>

              <div className="space-y-5">
                {hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group/item p-2 rounded-xl transition-colors hover:bg-slate-50">
                    <span className="text-lg font-bold text-slate-700 flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      {item.day}
                    </span>
                    <span className={`text-lg font-black ${item.time === "Geschlossen" ? "text-slate-400" : "text-cyan-600"}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

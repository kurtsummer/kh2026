import { Clock, Info, ShieldCheck } from "lucide-react";

const schedule = [
  { days: "Montag", morning: "08:00 - 12:00", afternoon: "15:00 - 18:00" },
  { days: "Dienstag", morning: "08:00 - 12:00", afternoon: "15:00 - 18:00" },
  { days: "Mittwoch", morning: "08:00 - 12:00", afternoon: "geschlossen" },
  { days: "Donnerstag", morning: "08:00 - 12:00", afternoon: "15:00 - 19:00" },
  { days: "Freitag", morning: "08:00 - 12:00", afternoon: "geschlossen" },
];

export const OpeningHours = () => {
  return (
    <section id="sprechzeiten" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-indigo-900 rounded-[3.5rem] p-10 md:p-20 text-white shadow-3xl relative overflow-hidden border border-indigo-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800/40 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-800 border border-indigo-700 flex items-center justify-center shadow-inner">
                <Clock className="w-8 h-8 text-indigo-300" />
              </div>
              <div>
                <h2 className="text-3xl font-black mb-1">Sprechzeiten</h2>
                <p className="text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">Immer für Sie erreichbar</p>
              </div>
            </div>

            <div className="space-y-6">
              {schedule.map((item) => (
                <div 
                  key={item.days} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-indigo-800 last:border-0 group"
                >
                  <span className="font-black text-xl tracking-tight group-hover:text-indigo-300 transition-colors">{item.days}</span>
                  <div className="flex items-center gap-6 text-indigo-100/80 font-bold">
                    <span className="text-lg">{item.morning}</span>
                    <span className="h-4 w-px bg-indigo-800" />
                    <span className="text-lg">{item.afternoon}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-indigo-950/40 rounded-[2rem] border border-indigo-800 flex gap-6 items-start">
              <div className="w-12 h-12 bg-rose-600/20 rounded-2xl flex items-center justify-center shrink-0 border border-rose-500/20">
                <Info className="w-6 h-6 text-rose-500" />
              </div>
              <div className="space-y-3">
                <p className="font-black text-rose-500 uppercase tracking-widest text-xs">Wichtiger Hinweis</p>
                <p className="text-sm text-indigo-200 leading-relaxed font-medium">
                  Außerhalb der Sprechzeiten erreichen Sie den ärztlichen Notdienst unter der bundeseinheitlichen Rufnummer <span className="text-white font-black underline decoration-indigo-500 underline-offset-4">116 117</span>.
                </p>
                <div className="flex items-center gap-2 text-white font-black text-sm">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Lebensbedrohlicher Notfall? Wählen Sie sofort die 112.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

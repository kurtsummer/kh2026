import { Clock, Info, CalendarCheck } from "lucide-react";

const schedule = [
  { days: "Montag", hours: "09:00 - 13:00 & 14:00 - 18:00" },
  { days: "Dienstag", hours: "09:00 - 13:00 & 14:00 - 18:00" },
  { days: "Mittwoch", hours: "09:00 - 13:00 (Nachmittags Termine)" },
  { days: "Donnerstag", hours: "09:00 - 13:00 & 14:00 - 19:00" },
  { days: "Freitag", hours: "09:00 - 13:00 & 14:00 - 18:00" },
  { days: "Samstag", hours: "10:00 - 13:00 (Nur nach Vereinbarung)" },
];

export const OpeningHours = () => {
  return (
    <section id="oeffnungszeiten" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-sky-900 rounded-[4rem] p-12 md:p-24 text-white shadow-[0_50px_100px_-20px_rgba(12,74,110,0.4)] relative overflow-hidden border-8 border-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-800/40 rounded-full blur-3xl -mr-40 -mt-40" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-8 mb-16">
              <div className="w-20 h-20 rounded-[2rem] bg-sky-800 border-4 border-sky-700 flex items-center justify-center shadow-inner group hover:rotate-12 transition-transform duration-500">
                <Clock className="w-10 h-10 text-sky-300" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">Öffnungszeiten</h2>
                <p className="text-sky-400 font-black text-[10px] uppercase tracking-[0.4em]">Wir sind für Sie da</p>
              </div>
            </div>

            <div className="space-y-8">
              {schedule.map((item) => (
                <div 
                  key={item.days} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b-2 border-sky-800/50 last:border-0 group"
                >
                  <span className="font-black text-2xl tracking-tighter group-hover:text-amber-400 transition-colors italic">{item.days}</span>
                  <div className="flex items-center gap-6 text-sky-100 font-bold">
                    <span className="text-xl">{item.hours}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 bg-sky-950/50 rounded-[3rem] border-4 border-sky-800 flex gap-8 items-center group hover:bg-sky-950 transition-colors duration-500">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shrink-0 border-4 border-white group-hover:rotate-6 transition-transform">
                <CalendarCheck className="w-8 h-8 text-sky-950" />
              </div>
              <div className="space-y-3">
                <p className="font-black text-amber-400 uppercase tracking-[0.3em] text-[10px]">Wunschtermin vereinbaren</p>
                <p className="text-lg text-sky-100 leading-tight font-bold">
                  Gerne beraten wir Sie auch außerhalb unserer regulären Öffnungszeiten. Rufen Sie uns einfach an!
                </p>
                <p className="text-white font-black text-2xl tracking-tighter underline decoration-amber-400 decoration-4 underline-offset-8">
                  01234 / 567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

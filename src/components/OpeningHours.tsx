import { Clock, Info } from "lucide-react";

const schedule = [
  { days: "Montag", morning: "08:00 - 12:00", afternoon: "15:00 - 18:00" },
  { days: "Dienstag", morning: "08:00 - 12:00", afternoon: "15:00 - 18:00" },
  { days: "Mittwoch", morning: "08:00 - 12:00", afternoon: "geschlossen" },
  { days: "Donnerstag", morning: "08:00 - 12:00", afternoon: "15:00 - 19:00" },
  { days: "Freitag", morning: "08:00 - 12:00", afternoon: "geschlossen" },
];

export const OpeningHours = () => {
  return (
    <section id="sprechzeiten" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-teal-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-800 rounded-full" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-teal-800 flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-3xl font-bold">Sprechzeiten</h2>
            </div>

            <div className="space-y-4">
              {schedule.map((item) => (
                <div 
                  key={item.days} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-teal-800 last:border-0"
                >
                  <span className="font-bold text-lg">{item.days}</span>
                  <div className="flex gap-4 text-teal-100">
                    <span>{item.morning}</span>
                    <span className="opacity-40">|</span>
                    <span>{item.afternoon}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-teal-800/50 rounded-2xl border border-teal-700 flex gap-4">
              <Info className="w-6 h-6 text-teal-400 shrink-0" />
              <p className="text-sm text-teal-100 leading-relaxed">
                <span className="font-bold text-white block mb-1">Notfallhinweis:</span>
                Außerhalb der Sprechzeiten wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst unter der Telefonnummer 
                <span className="font-bold text-white"> 116 117</span>. In lebensbedrohlichen Notfällen wählen Sie die <span className="font-bold text-white">112</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

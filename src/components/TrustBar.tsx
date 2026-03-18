import { ShieldCheck, UserCheck, Cpu, MapPin } from "lucide-react";

export const TrustBar = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#7FA38A]" />,
      text: "Für Klein- und Mittelunternehmen",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#7FA38A]" />,
      text: "Persönliche Begleitung",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#7FA38A]" />,
      text: "Moderne KI-Lösungen",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#7FA38A]" />,
      text: "Steiermark & Österreich",
    },
  ];

  return (
    <section className="bg-[#EEF2F7] py-10 md:py-12 border-y border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-8 gap-x-12">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group hover-lift transition-all duration-300">
                {point.icon}
              </div>
              <span className="text-base md:text-lg font-bold text-[#1F2A44] leading-tight max-w-[180px]">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

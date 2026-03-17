import { MessageSquare, Share2, Globe, Settings2 } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "KI-Marketing-Beratung",
      description: "Klare Strategien und konkrete Empfehlungen, damit Sie wissen, wo KI in Ihrem Marketing wirklich Sinn macht.",
      icon: <MessageSquare className="w-6 h-6 text-[#6D5EF5]" />,
    },
    {
      title: "Social Media mit KI",
      description: "Schneller zu besseren Inhalten, effizienteren Prozessen und einer professionellen Präsenz auf den richtigen Kanälen.",
      icon: <Share2 className="w-6 h-6 text-[#6D5EF5]" />,
    },
    {
      title: "Webseiten mit KI",
      description: "Moderne Webseiten, die Vertrauen aufbauen, Ihre Leistungen klar vermitteln und mehr Anfragen möglich machen.",
      icon: <Globe className="w-6 h-6 text-[#6D5EF5]" />,
    },
    {
      title: "Marketing-Automatisierung",
      description: "Weniger manuelle Aufgaben, bessere Abläufe und mehr Zeit für das Wesentliche in Ihrem Unternehmen.",
      icon: <Settings2 className="w-6 h-6 text-[#6D5EF5]" />,
    },
  ];

  return (
    <section id="leistungen" className="bg-[#F8F9FC] py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2A44] mb-8 leading-tight">
            KI-Marketing, das verständlich bleibt und Ergebnisse bringt.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            Ich unterstütze Unternehmen dabei, KI nicht nur zu verstehen, sondern gezielt im Marketing einzusetzen — mit persönlicher Begleitung, professioneller Umsetzung und einem klaren Fokus auf Nutzen statt Technik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#1F2A44]/5 hover:border-[#6D5EF5]/20 transition-all duration-500 flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6D5EF5]/5 flex items-center justify-center mb-8 group-hover:bg-[#6D5EF5]/10 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#1F2A44] mb-4 group-hover:text-[#6D5EF5] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="mt-auto pt-8">
                <div className="h-1 w-8 bg-[#6D5EF5]/20 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

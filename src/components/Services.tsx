import { Camera, Users, Building, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Porträtfotografie",
      description: "Einzel-, Paar- oder Familien-Porträts, die Ihre Persönlichkeit und Verbindung einfangen.",
      price: "Ab 149€",
      features: ["60 Min. Shooting", "10 bearbeitete Bilder", "Online-Galerie", "Individuelle Beratung"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Hochzeitsreportagen",
      description: "Die schönsten Momente Ihres großen Tages in emotionalen und zeitlosen Bildern festgehalten.",
      price: "Ab 899€",
      features: ["Ganztagesbegleitung", "Alle Bilder hochauflösend", "USB-Stick mit Box", "Verlobungsshooting inkl."],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business & Corporate",
      description: "Professionelle Mitarbeiterfotos und Imagebilder für Ihren modernen Unternehmensauftritt.",
      price: "Auf Anfrage",
      features: ["Vor-Ort Shooting möglich", "Retusche inklusive", "Nutzungsrechte für Print & Web", "Individuelle Pakete"],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Eventbegleitung",
      description: "Konzerte, Firmenfeiern oder private Jubiläen – wir halten die Atmosphäre Ihres Events fest.",
      price: "Ab 299€",
      features: ["Dokumentarischer Stil", "Schnelle Lieferung", "High-End Bearbeitung", "Alle Highlights"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm">Leistungen</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3436]">
            Exzellentes Handwerk für jeden Anlass.
          </h3>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-[#2D3436]/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="bg-[#C5A059]/10 text-[#C5A059] p-4 rounded-2xl w-fit mb-6 transition-colors group-hover:bg-[#2D3436] group-hover:text-white">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-[#2D3436] mb-2">{service.title}</h4>
              <p className="text-[#2D3436]/60 text-sm mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-[#2D3436]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#2D3436]/5 flex items-center justify-between">
                <span className="font-serif font-bold text-[#2D3436]">{service.price}</span>
                <Button variant="ghost" size="sm" className="text-[#C5A059] hover:text-[#2D3436] p-0 group-hover:translate-x-1 transition-transform">
                   Details <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-[#2D3436] p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -z-1" />
           <div className="relative z-10 space-y-6">
              <h4 className="text-2xl md:text-3xl font-serif font-bold">Nicht das Passende gefunden?</h4>
              <p className="text-white/70 max-w-xl mx-auto">
                Wir erstellen Ihnen gerne ein individuelles Angebot, das exakt auf Ihre Wünsche und Ihr Budget zugeschnitten ist.
              </p>
              <Button className="bg-[#C5A059] hover:bg-[#A68B5B] text-white rounded-full px-10 py-7 text-lg shadow-lg">
                 Individuelles Angebot anfordern
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

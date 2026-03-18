import { Camera, Users, Building, Calendar, ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Porträt-Power",
      description: "Einzel-, Paar- oder Familienfotos, die vor Lebensfreude nur so sprühen.",
      price: "Ab 149€",
      features: ["60 Min. Shooting", "20 Bilder digital", "Vibrante Farbbearbeitung", "Outdoor & Studio"],
      color: "bg-[#FF7E67]",
      bg: "bg-[#FF7E67]/5",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Hochzeits-Glück",
      description: "Keine gestellten Posen. Nur die echten, emotionalen Momente Ihres großen Tages.",
      price: "Ab 899€",
      features: ["Ganztagesbegleitung", "Alle Bilder inklusive", "Exklusives Fotobuch", "Engagement-Session"],
      color: "bg-[#45B7AF]",
      bg: "bg-[#45B7AF]/5",
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Business-Fresh",
      description: "Mitarbeiterfotos, die Ihr Team sympathisch und nahbar wirken lassen.",
      price: "Auf Anfrage",
      features: ["Vor-Ort im Unternehmen", "Natürliches Licht-Setup", "Nutzungsrechte inkl.", "Schnelle Lieferung"],
      color: "bg-[#FFD93D]",
      bg: "bg-[#FFD93D]/5",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Event-Vibe",
      description: "Wir fangen die Energie Ihrer Party ein, ohne die Stimmung zu stören.",
      price: "Ab 299€",
      features: ["Dokumentarischer Stil", "Next-Day Preview", "Gute Laune inklusive", "Keine versteckten Kosten"],
      color: "bg-[#2D3436]",
      bg: "bg-[#2D3436]/5",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FFFCF8] relative overflow-hidden">
      {/* Playful Floating Shapes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF7E67]/5 rounded-full blur-[80px] -z-1" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45B7AF]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Leistungen & Preise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">
            Angebote, die Sie <span className="text-[#45B7AF]">strahlen</span> lassen.
          </h3>
          <p className="text-lg text-[#2D3436]/60 font-medium max-w-xl mx-auto">
            Wir bieten transparente Pakete für jeden Anlass. Wählen Sie das Passende aus und lassen Sie uns gemeinsam kreativ werden!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group ${service.bg} p-10 rounded-[48px] border-2 border-transparent hover:border-white hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center`}
            >
              <div className={`${service.color} text-white p-5 rounded-[32px] mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-[#2D3436] mb-4">{service.title}</h4>
              <p className="text-[#2D3436]/60 text-sm mb-8 flex-grow font-medium leading-relaxed">{service.description}</p>
              
              <div className="space-y-4 mb-10 w-full">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center justify-center gap-2 text-sm text-[#2D3436]/80 font-bold">
                    <Star className={`w-3 h-3 fill-current ${service.color.replace('bg-', 'text-')}`} />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#2D3436]/5 w-full space-y-4">
                <span className="text-3xl font-black text-[#2D3436] block">{service.price}</span>
                <Button className={`${service.color} hover:opacity-90 text-white rounded-full w-full py-6 font-bold shadow-md shadow-${service.color.replace('bg-', '')}/20`}>
                   Paket anfragen
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-[#45B7AF] p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -z-1 group-hover:scale-125 transition-transform duration-1000" />
           <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FFD93D]/10 rounded-full blur-[100px] -z-1" />
           
           <div className="relative z-10 space-y-8">
              <div className="bg-white/20 p-4 rounded-3xl w-fit mx-auto animate-bounce">
                <Sparkles className="w-10 h-10 text-[#FFD93D]" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black">Individuell & Einzigartig?</h4>
              <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto">
                Sie haben eine ganz besondere Idee oder ein spezielles Projekt im Kopf? Erzählen Sie es uns – wir lieben Herausforderungen!
              </p>
              <Button className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-full px-12 py-8 text-xl font-black shadow-2xl border-none transition-all hover:scale-105 active:scale-95">
                 Lass uns schnacken!
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Julia & Marc",
      role: "Brautpaar",
      text: "Max hat unsere Hochzeit in so wundervollen Bildern festgehalten. Wir haben uns von Anfang an super wohl gefühlt. Die Fotos sind authentisch, emotional und einfach perfekt!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=juliarc"
    },
    {
      name: "Andreas K.",
      role: "CEO von InnovateX",
      text: "Die Business-Porträts für unsere Führungsebene sind hervorragend geworden. Professionalität und ein Auge für das Besondere zeichnen Max aus. Absolut empfehlenswert!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=andreask"
    },
    {
      name: "Sarah M.",
      role: "Familien-Shooting",
      text: "Ein tolles Erlebnis für die ganze Familie! Max hat so viel Geduld mit den Kindern gehabt und die Bilder sind so natürlich geworden. Wir kommen definitiv wieder.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarahmi"
    },
    {
      name: "Felix H.",
      role: "Event-Veranstalter",
      text: "Fantastische Aufnahmen von unserem Firmenjubiläum. Max hat die Stimmung perfekt eingefangen, ohne dass man ihn als störend wahrgenommen hat. Top Arbeit!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=felixh"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#2D3436] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#C5A059]/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm">Bewertungen</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Was Kunden über Max sagen.</h3>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col hover:bg-white/10 transition-colors group"
            >
              <div className="flex text-[#C5A059] mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-8">
                 <Quote className="absolute -top-4 -left-4 w-10 h-10 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors" />
                 <p className="text-white/80 text-sm leading-relaxed italic relative z-10">
                   "{t.text}"
                 </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#C5A059]/30"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 border-t border-white/10 pt-16">
           <div className="text-center md:text-left space-y-2">
              <p className="text-4xl font-serif font-bold text-white">4.9/5</p>
              <div className="flex text-[#C5A059] justify-center md:justify-start">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-current" />
                 ))}
              </div>
              <p className="text-white/40 text-sm uppercase font-bold tracking-widest">Google Bewertungen</p>
           </div>
           <div className="hidden md:block w-px h-16 bg-white/10" />
           <div className="text-center md:text-left space-y-2">
              <p className="text-4xl font-serif font-bold text-white">100%</p>
              <p className="text-[#C5A059] font-bold text-lg leading-none">Zufriedenheitsgarantie</p>
              <p className="text-white/40 text-sm uppercase font-bold tracking-widest">Kundenversprechen</p>
           </div>
        </div>
      </div>
    </section>
  );
};

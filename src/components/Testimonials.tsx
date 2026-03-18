import { Star, Quote, Smile, Heart, Sparkles, Utensils } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sabine & Thomas",
      role: "Stammgäste",
      text: "Das Schnitzel ist einfach Weltklasse! Aber was uns immer wieder herzieht, ist die herzliche Art von Max und seinem Team. Man fühlt sich wie bei Freunden.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=200&auto=format&fit=crop",
      color: "bg-[#FF7E67]/10 border-[#FF7E67]/20 text-[#FF7E67]",
    },
    {
      name: "Markus R.",
      role: "Gourmet-Blogger",
      text: "Eine echte Entdeckung in Musterhausen. Die Kombination aus traditioneller Küche und modernen Akzenten ist perfekt gelungen. Die Weinauswahl ist exzellent!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      color: "bg-[#45B7AF]/10 border-[#45B7AF]/20 text-[#45B7AF]",
    },
    {
      name: "Lena S.",
      role: "Veggie-Fan",
      text: "Endlich ein Restaurant, das auch vegetarische Gerichte mit viel Liebe und Kreativität zubereitet. Die hausgemachte Pasta mit Trüffel war ein Traum!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      color: "bg-[#FFD93D]/10 border-[#FFD93D]/20 text-[#FFD93D]",
    },
    {
      name: "Christian H.",
      role: "Unternehmer",
      text: "Wir haben unsere Firmenfeier hier ausgerichtet. Tolles Ambiente, super Service und das Essen kam für alle 30 Personen gleichzeitig und heiß auf den Tisch. Top!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      color: "bg-[#2D3436]/10 border-[#2D3436]/20 text-[#2D3436]",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#FFFCF8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#FF7E67]/10 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#45B7AF]/10 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Gästestimmen</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">Was unsere <span className="text-[#45B7AF]">Gäste</span> sagen.</h3>
          <p className="text-xl text-[#2D3436]/60 font-medium">
            Zufriedene Gäste sind unser größtes Lob – und das Echo ist einfach fantastisch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`bg-white p-10 rounded-[48px] border-2 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${t.color.split(' ')[1]}`}
            >
              <div className="flex text-[#FFD93D] mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-10 flex-grow">
                 <Quote className={`absolute -top-6 -left-6 w-12 h-12 opacity-10 transition-colors group-hover:opacity-30 ${t.color.split(' ')[2]}`} />
                 <p className="text-[#2D3436]/80 text-lg leading-relaxed font-bold italic relative z-10 group-hover:text-[#2D3436] transition-colors">
                   "{t.text}"
                 </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-[#2D3436]/5">
                <div className="relative">
                   <img 
                     src={t.image} 
                     alt={t.name} 
                     className="w-16 h-16 rounded-3xl border-4 border-white shadow-lg group-hover:rotate-6 transition-transform object-cover"
                     loading="lazy"
                   />
                   <div className={`absolute -bottom-2 -right-2 p-1.5 rounded-xl text-white shadow-xl ${t.color.split(' ')[2].replace('text-', 'bg-')}`}>
                      <Smile className="w-4 h-4" />
                   </div>
                </div>
                <div>
                  <h4 className="font-black text-[#2D3436] text-lg leading-tight">{t.name}</h4>
                  <p className="text-[#2D3436]/40 text-xs uppercase tracking-widest font-black mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-white p-12 rounded-[60px] shadow-xl flex flex-col md:flex-row items-center justify-around gap-12 border-2 border-[#FF7E67]/10">
           <div className="text-center space-y-3">
              <p className="text-5xl font-black text-[#FF7E67]">4.8/5</p>
              <div className="flex text-[#FFD93D] justify-center scale-110">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-6 h-6 fill-current" />
                 ))}
              </div>
              <p className="text-[#2D3436]/40 text-sm uppercase font-black tracking-widest pt-2">Google Reviews</p>
           </div>
           
           <div className="hidden md:block w-px h-24 bg-[#2D3436]/5" />
           
           <div className="text-center space-y-3 group cursor-default">
              <div className="bg-[#45B7AF]/10 p-4 rounded-3xl w-fit mx-auto group-hover:rotate-12 transition-transform">
                 <Heart className="w-8 h-8 text-[#45B7AF] fill-current" />
              </div>
              <p className="text-2xl font-black text-[#2D3436]">100% Liebe</p>
              <p className="text-[#2D3436]/40 text-sm uppercase font-black tracking-widest">In jedem Teller</p>
           </div>

           <div className="hidden md:block w-px h-24 bg-[#2D3436]/5" />

           <div className="text-center space-y-3 group cursor-default">
              <div className="bg-[#FFD93D]/10 p-4 rounded-3xl w-fit mx-auto group-hover:-rotate-12 transition-transform">
                 <Utensils className="w-8 h-8 text-[#FFD93D]" />
              </div>
              <p className="text-2xl font-black text-[#2D3436]">Frische Garantie</p>
              <p className="text-[#2D3436]/40 text-sm uppercase font-black tracking-widest">Regional & Saisonal</p>
           </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Coffee, Cake, Heart, Star, Utensils, Zap, Clock, Users } from "lucide-react";

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
      title: "Handgefilterter Kaffee",
      category: "Handwerk",
      icon: <Coffee className="w-5 h-5 text-[#C5A059]" />
    },
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
      title: "Warme Schokoladen-Brownies",
      category: "Genuss",
      icon: <Cake className="w-5 h-5 text-[#C5A059]" />
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      title: "Unser gemütlicher Innenraum",
      category: "Ambiente",
      icon: <Heart className="w-5 h-5 text-[#C5A059]" />
    },
    {
      src: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
      title: "Latte Art Perfektion",
      category: "Kunst",
      icon: <Star className="w-5 h-5 text-[#C5A059]" />
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
      title: "Frisch geröstete Bohnen",
      category: "Qualität",
      icon: <Zap className="w-5 h-5 text-[#C5A059]" />
    },
    {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
      title: "Draußen im Grünen",
      category: "Sommergarten",
      icon: <Clock className="w-5 h-5 text-[#C5A059]" />
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#0A1A17] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 text-[#C5A059] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
              <Users className="w-4 h-4" />
              <span>Momentaufnahmen</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#16332C] dark:text-[#FDF8F1]">
              Ein Blick in <br />
              <span className="text-[#C5A059]">unsere Welt.</span>
            </h2>
            <p className="text-lg text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium">
              Erleben Sie das Café Mustermann durch die Augen unserer Gäste. 
              Gemütlichkeit, Leidenschaft und ein Hauch von Luxus.
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="bg-[#16332C] dark:bg-[#C5A059] p-8 rounded-[32px] text-white dark:text-[#16332C] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 hidden lg:block">
                <p className="text-3xl font-black">#Musterhausen</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-70 mt-1">Teilen Sie Ihre Momente</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-2xl aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  hoveredIndex === index ? "scale-110 rotate-1" : "scale-100 rotate-0"
                }`}
                loading="lazy"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-[#16332C] via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-10 ${
                hoveredIndex === index ? "opacity-90" : "opacity-0"
              }`}>
                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                    {image.icon}
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {image.title}
                  </h3>
                  <div className="h-1 w-12 bg-[#C5A059] rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

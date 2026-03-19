import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
      title: "Atmosphäre",
      size: "col-span-2 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
      title: "Unsere Bar",
      size: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      title: "Deftige Burger",
      size: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc3b?q=80&w=800&auto=format&fit=crop",
      title: "Gemütliche Ecken",
      size: "col-span-1 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=800&auto=format&fit=crop",
      title: "Frisch Gezapft",
      size: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white dark:bg-[#0A0706] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
            <span className="text-[#D48806] font-black uppercase tracking-[0.4em] text-[10px]">Eindrücke</span>
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#2D241E] dark:text-white mb-6 uppercase italic-font-pub tracking-tight">Impressionen <br className="md:hidden" /> aus der <span className="text-[#D48806]">Braustube</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-[#2D241E]/5 dark:border-white/5 ${img.size}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-black uppercase tracking-widest text-xs border-b border-[#D48806] pb-2">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

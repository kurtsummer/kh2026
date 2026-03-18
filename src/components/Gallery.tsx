import { useState } from "react";
import { ZoomIn, Camera, ExternalLink, Sparkles, Heart, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filters = [
    { name: "Alle", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Porträts", icon: <Smile className="w-4 h-4" /> },
    { name: "Hochzeiten", icon: <Heart className="w-4 h-4" /> },
    { name: "Business", icon: <Users className="w-4 h-4" /> },
    { name: "Events", icon: <Camera className="w-4 h-4" /> },
  ];

  const items = [
    { id: 1, category: "Porträts", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop", title: "Lächeln am Strand", color: "bg-[#FF7E67]" },
    { id: 2, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop", title: "Farbenfrohe Hochzeit", color: "bg-[#45B7AF]" },
    { id: 3, category: "Business", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop", title: "Modernes Agenturleben", color: "bg-[#FFD93D]" },
    { id: 4, category: "Porträts", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop", title: "Natürliches Outdoor-Shooting", color: "bg-[#FF7E67]" },
    { id: 5, category: "Events", image: "https://images.unsplash.com/photo-1514525253361-bee8718a740b?q=80&w=2000&auto=format&fit=crop", title: "Festival der Farben", color: "bg-[#2D3436]" },
    { id: 6, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop", title: "Glücksmomente pur", color: "bg-[#45B7AF]" },
    { id: 7, category: "Business", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop", title: "Das Team lacht", color: "bg-[#FFD93D]" },
    { id: 8, category: "Events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop", title: "Professionelle Konferenz", color: "bg-[#2D3436]" },
  ];

  const filteredItems = activeFilter === "Alle" 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7E67]/5 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#45B7AF]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="space-y-6">
             <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Portfolio</h2>
             <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">Ein Meer aus <span className="text-[#45B7AF]">Farben</span>.</h3>
             <p className="text-xl text-[#2D3436]/60 font-medium max-w-xl">
               Hier ein kleiner Einblick in meine bisherigen Abenteuer. Jedes Foto erzählt eine eigene, fröhliche Geschichte.
             </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 gap-2 border-none shadow-md hover:shadow-xl ${
                  activeFilter === filter.name 
                    ? "bg-[#2D3436] text-white hover:scale-105" 
                    : "bg-[#FAF9F6] text-[#2D3436] hover:bg-white hover:scale-105"
                }`}
              >
                {filter.icon}
                {filter.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in duration-700">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl hover:shadow-[#FF7E67]/20 transition-all duration-500 hover:-translate-y-2 border-8 border-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                 <div className="space-y-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`${item.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit inline-block mb-2 shadow-lg`}>
                       {item.category}
                    </span>
                    <h4 className="text-white text-2xl font-black leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-4 pt-6">
                       <button className="bg-white/20 hover:bg-white text-[#2D3436] p-4 rounded-3xl backdrop-blur-md transition-all group-hover:rotate-6 shadow-xl" aria-label="Zoom Bild">
                          <ZoomIn className="w-6 h-6" />
                       </button>
                       <button className={`${item.color} hover:opacity-90 p-4 rounded-3xl text-white transition-all shadow-2xl group-hover:-rotate-6`} aria-label="Projekt Details">
                          <ExternalLink className="w-6 h-6" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Button variant="outline" className="border-4 border-[#FF7E67] text-[#FF7E67] rounded-full px-12 py-8 text-xl font-black group hover:bg-[#FF7E67] hover:text-white transition-all duration-500 shadow-xl shadow-[#FF7E67]/10">
              <Camera className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Lass mehr Farben rein!
           </Button>
        </div>
      </div>
    </section>
  );
};

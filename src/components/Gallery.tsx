import { useState } from "react";
import { ZoomIn, Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filters = ["Alle", "Porträts", "Hochzeiten", "Business", "Events"];

  const items = [
    { id: 1, category: "Porträts", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop", title: "Zeitloses Schwarz-Weiß Porträt" },
    { id: 2, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop", title: "Emotionales Ja-Wort am See" },
    { id: 3, category: "Business", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop", title: "Modernes Corporate Headshot" },
    { id: 4, category: "Porträts", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop", title: "Natürliches Outdoor-Shooting" },
    { id: 5, category: "Events", image: "https://images.unsplash.com/photo-1514525253361-bee8718a740b?q=80&w=2000&auto=format&fit=crop", title: "Stimmungsvolles Konzert" },
    { id: 6, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop", title: "Hochzeitsfeier in den Weinbergen" },
    { id: 7, category: "Business", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop", title: "Mitarbeiterfotos in der Agentur" },
    { id: 8, category: "Events", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop", title: "Professionelle Firmenkonferenz" },
  ];

  const filteredItems = activeFilter === "Alle" 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
             <h2 className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm">Portfolio</h2>
             <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3436]">Ein Einblick in meine Arbeit.</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-[#2D3436] hover:bg-[#3D4446] text-white" 
                    : "border-[#2D3436]/10 text-[#2D3436]/70 hover:bg-[#2D3436]/5"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/90 via-[#2D3436]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-white text-xl font-serif font-bold">{item.title}</h4>
                    <div className="flex items-center gap-4 pt-4">
                       <button className="bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-md transition-colors" aria-label="Zoom Bild">
                          <ZoomIn className="w-5 h-5" />
                       </button>
                       <button className="bg-[#C5A059] hover:bg-[#A68B5B] p-3 rounded-full text-white transition-colors shadow-lg" aria-label="Projekt Details">
                          <ExternalLink className="w-5 h-5" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button variant="outline" className="border-[#2D3436] text-[#2D3436] rounded-full px-10 py-7 text-lg group">
              <Camera className="mr-2 w-5 h-5" />
              Gesamtes Portfolio laden
           </Button>
        </div>
      </div>
    </section>
  );
};

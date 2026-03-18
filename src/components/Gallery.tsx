import { useState } from "react";
import { ZoomIn, Camera, ExternalLink, Sparkles, Heart, Smile, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
  color: string;
}

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = [
    { name: "Alle", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Porträts", icon: <Smile className="w-4 h-4" /> },
    { name: "Hochzeiten", icon: <Heart className="w-4 h-4" /> },
    { name: "Business", icon: <Users className="w-4 h-4" /> },
    { name: "Events", icon: <Camera className="w-4 h-4" /> },
  ];

  const items: GalleryItem[] = [
    { id: 1, category: "Porträts", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop", title: "Lächeln am Strand", color: "bg-[#FF7E67]" },
    { id: 2, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop", title: "Farbenfrohe Hochzeit", color: "bg-[#45B7AF]" },
    { id: 3, category: "Business", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop", title: "Modernes Agenturleben", color: "bg-[#FFD93D]" },
    { id: 4, category: "Porträts", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop", title: "Natürliches Outdoor-Shooting", color: "bg-[#FF7E67]" },
    { id: 5, category: "Events", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", title: "Festival der Farben", color: "bg-[#2D3436]" },
    { id: 6, category: "Hochzeiten", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop", title: "Glücksmomente pur", color: "bg-[#45B7AF]" },
    { id: 7, category: "Business", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop", title: "Das Team lacht", color: "bg-[#FFD93D]" },
    { id: 8, category: "Events", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop", title: "Professionelle Konferenz", color: "bg-[#2D3436]" },
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
            <div key={item.id} className="group relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl hover:shadow-[#FF7E67]/20 transition-all duration-500 hover:-translate-y-2 border-8 border-white bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                 <div className="space-y-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`${item.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit inline-block mb-2 shadow-lg`}>
                       {item.category}
                    </span>
                    <h4 className="text-white text-2xl font-black leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-4 pt-6">
                       <button 
                         onClick={() => setSelectedImage(item)}
                         className="bg-white/20 hover:bg-white text-[#2D3436] p-4 rounded-3xl backdrop-blur-md transition-all group-hover:rotate-6 shadow-xl" 
                         aria-label="Bild vergrößern"
                       >
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

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-white/95 backdrop-blur-lg border-none rounded-[60px] shadow-2xl animate-in zoom-in-95 duration-300">
          <DialogHeader className="absolute top-8 right-8 z-50">
            <DialogClose className="p-4 bg-[#FF7E67] text-white rounded-3xl hover:bg-[#E66B56] hover:rotate-90 transition-all shadow-2xl border-none">
               <X className="w-8 h-8" />
            </DialogClose>
          </DialogHeader>
          
          {selectedImage && (
            <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
              <div className="relative aspect-[4/5] bg-gray-100 shrink-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8">
                  <span className={`${selectedImage.color} text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl shadow-2xl`}>
                    {selectedImage.category}
                  </span>
                </div>
              </div>
              <div className="p-12 space-y-8 bg-white text-center">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-[#2D3436] leading-tight">
                    {selectedImage.title}
                  </h3>
                  <div className="w-20 h-2 bg-[#FF7E67] mx-auto rounded-full" />
                </div>
                <p className="text-[#2D3436]/60 font-medium leading-relaxed max-w-sm mx-auto">
                  Dieses Bild wurde mit viel Liebe zum Detail in unserem Studio in Musterhausen aufgenommen. Wir legen großen Wert auf lebendige Farben und echte Emotionen.
                </p>
                <div className="pt-8 border-t border-[#2D3436]/5">
                  <Button className="w-full bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-3xl py-10 font-black uppercase tracking-widest text-sm shadow-2xl shadow-[#FF7E67]/20 border-none transition-all hover:scale-105 active:scale-95">
                    Dieses Shooting anfragen!
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

import { useState } from "react";
import { ZoomIn, Utensils, Star, Heart, Wine, X, ChefHat, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
    { name: "Alle", icon: <Star className="w-4 h-4 fill-current" /> },
    { name: "Speisen", icon: <Utensils className="w-4 h-4" /> },
    { name: "Ambiente", icon: <Heart className="w-4 h-4" /> },
    { name: "Getränke", icon: <Wine className="w-4 h-4" /> },
    { name: "Küche", icon: <ChefHat className="w-4 h-4" /> },
  ];

  const items: GalleryItem[] = [
    { id: 1, category: "Speisen", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop", title: "Zartes Rindersteak", color: "bg-[#16332C]" },
    { id: 2, category: "Ambiente", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop", title: "Unser gemütlicher Gastraum", color: "bg-[#C5A059]" },
    { id: 3, category: "Getränke", image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=2000&auto=format&fit=crop", title: "Frische Cocktails", color: "bg-[#5C4033]" },
    { id: 4, category: "Speisen", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2000&auto=format&fit=crop", title: "Mediterrane Pasta", color: "bg-[#16332C]" },
    { id: 5, category: "Küche", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", title: "Frische Zutaten", color: "bg-[#C5A059]" },
    { id: 6, category: "Ambiente", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2000&auto=format&fit=crop", title: "Abendstimmung", color: "bg-[#5C4033]" },
    { id: 7, category: "Getränke", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop", title: "Ausgewählte Weine", color: "bg-[#16332C]" },
    { id: 8, category: "Speisen", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop", title: "Frische Holzofenpizza", color: "bg-[#C5A059]" },
  ];

  const filteredItems = activeFilter === "Alle" 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#16332C]/10 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16332C]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="space-y-6">
             <h2 className="text-[#C5A059] font-black tracking-widest uppercase text-sm">Galerie</h2>
             <h3 className="text-4xl md:text-6xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-tight">Ein Blick in <span className="text-[#C5A059]">unsere Welt</span>.</h3>
             <p className="text-xl text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium max-w-xl">
               Lassen Sie sich von unseren Impressionen inspirieren. Bei uns trifft kulinarischer Anspruch auf einladende Atmosphäre.
             </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 gap-2 border-none shadow-md hover:shadow-xl ${
                  activeFilter === filter.name 
                    ? "bg-[#16332C] dark:bg-[#C5A059] text-white dark:text-[#16332C] hover:scale-105" 
                    : "bg-[#FDF8F1] dark:bg-zinc-800 text-[#16332C] dark:text-[#FDF8F1] hover:bg-white dark:hover:bg-zinc-700 hover:scale-105"
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
            <div key={item.id} className="group relative rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl hover:shadow-[#C5A059]/20 transition-all duration-500 hover:-translate-y-2 border-8 border-white dark:border-zinc-800 bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16332C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                 <div className="space-y-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`${item.color} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit inline-block mb-2 shadow-lg`}>
                       {item.category}
                    </span>
                    <h4 className="text-white text-2xl font-black leading-tight">{item.title}</h4>
                    <div className="flex items-center gap-4 pt-6">
                       <button 
                         onClick={() => setSelectedImage(item)}
                         className="bg-white/20 hover:bg-white text-[#16332C] p-4 rounded-3xl backdrop-blur-md transition-all group-hover:rotate-6 shadow-xl" 
                         aria-label="Bild vergrößern"
                       >
                          <ZoomIn className="w-6 h-6" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Button asChild variant="outline" className="border-4 border-[#C5A059] text-[#C5A059] rounded-full px-12 py-8 text-xl font-black group hover:bg-[#C5A059] hover:text-white transition-all duration-500 shadow-xl shadow-[#C5A059]/10 bg-transparent">
              <a href="#reservation">
                <Coffee className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                Besuchen Sie uns live!
              </a>
           </Button>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-[#FDF8F1] dark:bg-zinc-900 rounded-[60px] shadow-2xl animate-in zoom-in-95 duration-300 border-none">
          <DialogHeader className="absolute top-8 right-8 z-50">
            <DialogClose className="p-4 bg-[#C5A059] text-white rounded-3xl hover:bg-[#D4B36D] hover:rotate-90 transition-all shadow-2xl border-none">
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
              <div className="p-12 space-y-8 bg-white dark:bg-zinc-900 text-center">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-tight">
                    {selectedImage.title}
                  </h3>
                  <div className="w-20 h-2 bg-[#C5A059] mx-auto rounded-full" />
                </div>
                <p className="text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium leading-relaxed max-w-sm mx-auto">
                  Erleben Sie die besondere Atmosphäre im Restaurant Max. Jedes Detail wurde sorgfältig ausgewählt, um Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten.
                </p>
                <div className="pt-8 border-t border-[#16332C]/5 dark:border-white/10">
                  <Button asChild className="w-full bg-[#16332C] dark:bg-[#C5A059] hover:bg-[#1E3A34] dark:hover:bg-[#D4B36D] text-white dark:text-[#16332C] rounded-3xl py-10 font-black uppercase tracking-widest text-sm shadow-2xl shadow-[#16332C]/20 border-none transition-all hover:scale-105 active:scale-95">
                    <a href="#reservation" onClick={() => setSelectedImage(null)}>Tisch reservieren</a>
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

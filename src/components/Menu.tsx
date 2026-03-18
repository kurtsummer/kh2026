import { useState } from "react";
import { Coffee, Cake, Utensils, Star, Heart, Croissant, Milk, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alle", icon: <Utensils className="w-5 h-5" /> },
    { id: "coffee", name: "Kaffee & Co.", icon: <Coffee className="w-5 h-5" /> },
    { id: "cakes", name: "Kuchen & Torten", icon: <Cake className="w-5 h-5" /> },
    { id: "breakfast", name: "Frühstück", icon: <Croissant className="w-5 h-5" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Max' Hausespresso",
      price: "2.80€",
      category: "coffee",
      description: "Hauseigene Röstung, 100% Arabica, kräftiges Aroma mit Schokoladennote.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
      badge: "Beliebt",
      icons: [<Coffee className="w-4 h-4" />]
    },
    {
      id: 2,
      name: "Omas Apfelkuchen",
      price: "4.50€",
      category: "cakes",
      description: "Nach traditionellem Familienrezept mit frischen Äpfeln aus Musterhausen.",
      image: "https://images.unsplash.com/photo-1568571780765-9276ac3b7592?q=80&w=800&auto=format&fit=crop",
      badge: "Hausgemacht",
      icons: [<Cake className="w-4 h-4" />]
    },
    {
      id: 3,
      name: "Musterhausener Frühstück",
      price: "14.90€",
      category: "breakfast",
      description: "Regionale Wurst & Käse, Bio-Eier, frische Brötchen und ein Glas O-Saft.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
      badge: "Regiona",
      icons: [<Croissant className="w-4 h-4" />]
    },
    {
      id: 4,
      name: "Cappuccino Italiano",
      price: "3.60€",
      category: "coffee",
      description: "Samtiger Milchschaum trifft auf unseren kräftigen Espresso.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
      icons: [<Milk className="w-4 h-4" />]
    },
    {
      id: 5,
      name: "Schokoladen-Traum",
      price: "4.80€",
      category: "cakes",
      description: "Zartbitterschokolade, Sahne und ein Hauch von Gold.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      badge: "Premium",
      icons: [<Cookie className="w-4 h-4" />]
    },
    {
      id: 6,
      name: "Avocado-Brot",
      price: "11.50€",
      category: "breakfast",
      description: "Vollkornbrot mit Avocado, pochiertem Ei und Chiliflocken.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
      icons: [<Utensils className="w-4 h-4" />]
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FDF8F1] dark:bg-[#16332C]/10 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16332C]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="inline-flex items-center gap-2 bg-[#16332C]/10 dark:bg-[#C5A059]/10 text-[#16332C] dark:text-[#C5A059] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
            <Star className="w-4 h-4" />
            <span>Unsere Karte</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#16332C] dark:text-[#FDF8F1] tracking-tight">
            Genuss für <span className="text-[#C5A059]">jeden Moment.</span>
          </h2>
          <p className="text-lg text-[#16332C]/60 dark:text-[#FDF8F1]/60 max-w-2xl mx-auto font-medium">
            Entdecken Sie unsere handverlesenen Spezialitäten. Frisch zubereitet und mit Liebe serviert.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl border-2 ${
                activeCategory === cat.id
                  ? "bg-[#16332C] text-white border-[#16332C] scale-105"
                  : "bg-white text-[#16332C] border-transparent hover:border-[#C5A059] hover:text-[#C5A059]"
              }`}
            >
              <div className={activeCategory === cat.id ? "text-[#C5A059]" : "text-gray-400"}>
                {cat.icon}
              </div>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-zinc-900 rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#16332C]/5 dark:border-white/5 animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                {item.badge && (
                   <span className="absolute top-6 left-6 bg-[#C5A059] text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {item.badge}
                  </span>
                )}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-[#16332C] shadow-lg flex items-center gap-2">
                   <Heart className="w-4 h-4 text-red-500 fill-current" />
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#16332C] dark:text-[#FDF8F1] group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      {item.icons.map((icon, idx) => (
                        <span key={idx} className="text-[#C5A059]/50">{icon}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xl font-black text-[#C5A059] bg-[#C5A059]/10 px-4 py-2 rounded-2xl">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-[#16332C]/60 dark:text-[#FDF8F1]/60 leading-relaxed font-medium">
                  {item.description}
                </p>

                <Button className="w-full bg-[#16332C]/5 dark:bg-white/5 hover:bg-[#C5A059] hover:text-white text-[#16332C] dark:text-[#FDF8F1] rounded-2xl py-6 font-black uppercase tracking-widest transition-all duration-300 border-none shadow-none">
                  Bestellen
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Button asChild variant="outline" className="border-4 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white rounded-full px-12 py-8 text-xl font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl">
              <a href="#reservation">Komplette Karte laden</a>
           </Button>
        </div>
      </div>
    </section>
  );
};

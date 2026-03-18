import { useState } from "react";
import { Coffee, Cake, Utensils, Star, Heart, Croissant, Milk, Cookie, Cherry } from "lucide-react";

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alles", icon: <Utensils className="w-5 h-5" /> },
    { id: "coffee", name: "Kaffeespezialitäten", icon: <Coffee className="w-5 h-5" /> },
    { id: "cakes", name: "Kuchen & Mehlspeisen", icon: <Cake className="w-5 h-5" /> },
    { id: "breakfast", name: "Frühstückskultur", icon: <Croissant className="w-5 h-5" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Original Wiener Melange",
      price: "4.20€",
      category: "coffee",
      description: "Gestreckter Espresso mit heißer Milch und einer Haube aus cremigem Milchschaum.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
      badge: "Klassiker",
      icons: [<Coffee className="w-4 h-4" />]
    },
    {
      id: 2,
      name: "Sachertorte nach Hausart",
      price: "5.50€",
      category: "cakes",
      description: "Zarte Schokoladentorte mit Marillenmarmelade, serviert mit einer Portion Obers.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      badge: "Traditionell",
      icons: [<Cherry className="w-4 h-4" />]
    },
    {
      id: 3,
      name: "Kaiserfrühstück",
      price: "18.90€",
      category: "breakfast",
      description: "Frische Handsemmeln, Beinschinken, Käse, Bio-Ei, hausgemachte Marmelade und O-Saft.",
      image: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?q=80&w=800&auto=format&fit=crop",
      badge: "Königlich",
      icons: [<Croissant className="w-4 h-4" />]
    },
    {
      id: 4,
      name: "Kleiner Brauner",
      price: "3.20€",
      category: "coffee",
      description: "Ein einfacher Espresso, separat mit einem Kännchen Obers serviert.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
      icons: [<Milk className="w-4 h-4" />]
    },
    {
      id: 5,
      name: "Apfelstrudel mit Vanillesauce",
      price: "5.20€",
      category: "cakes",
      description: "Hausgemachter Ziehteig mit fruchtiger Apfelfüllung und Rosinen.",
      image: "https://images.unsplash.com/photo-1568571780765-9276ac3b7592?q=80&w=800&auto=format&fit=crop",
      badge: "Handgemacht",
      icons: [<Cookie className="w-4 h-4" />]
    },
    {
      id: 6,
      name: "Eierspeis im Pfandl",
      price: "9.50€",
      category: "breakfast",
      description: "Drei Bio-Eier mit Schnittlauch und knusprigem Speck aus der Region.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
      icons: [<Utensils className="w-4 h-4" />]
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FDF5E6] dark:bg-[#1A0A0A]/20 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#800020]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="inline-flex items-center gap-2 bg-[#800020]/10 dark:bg-[#D4AF37]/10 text-[#800020] dark:text-[#D4AF37] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-[#800020]/20">
            <Star className="w-4 h-4" />
            <span>Kulinarische Karte</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] tracking-tight">
            Traditionelle <span className="text-[#800020]">Spezialitäten.</span>
          </h2>
          <p className="text-lg text-[#3D2B1F]/60 dark:text-[#FDF5E6]/60 max-w-2xl mx-auto font-medium font-serif italic">
            "Der Wiener geht nicht ins Kaffeehaus, um Kaffee zu trinken, sondern um das Leben zu beobachten."
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
                  ? "bg-[#800020] text-white border-[#800020] scale-105"
                  : "bg-white text-[#3D2B1F] border-transparent hover:border-[#D4AF37] hover:text-[#800020]"
              }`}
            >
              <div className={activeCategory === cat.id ? "text-[#D4AF37]" : "text-gray-400"}>
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
              className="group bg-white dark:bg-zinc-900 rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#800020]/5 dark:border-white/5 animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#800020]/10 group-hover:bg-[#800020]/0 transition-colors duration-500" />
                {item.badge && (
                   <span className="absolute top-6 left-6 bg-[#800020] text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-[#D4AF37]/40">
                    {item.badge}
                  </span>
                )}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-[#800020] shadow-lg flex items-center gap-2">
                   <Heart className="w-4 h-4 text-[#800020] fill-current" />
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] group-hover:text-[#800020] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      {item.icons.map((icon, idx) => (
                        <span key={idx} className="text-[#D4AF37]">{icon}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xl font-black text-[#800020] bg-[#800020]/10 px-4 py-2 rounded-2xl border border-[#D4AF37]/20 shadow-sm">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-[#3D2B1F]/60 dark:text-[#FDF5E6]/60 leading-relaxed font-medium">
                  {item.description}
                </p>

                <button className="w-full bg-[#800020]/5 dark:bg-white/5 hover:bg-[#800020] hover:text-white text-[#800020] dark:text-[#FDF5E6] rounded-2xl py-6 font-black uppercase tracking-widest transition-all duration-300 border border-[#800020]/20 shadow-none">
                  Bestellen
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button className="border-4 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-12 py-8 text-xl font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl bg-transparent">
              <a href="#reservation">Komplette Karte laden</a>
           </button>
        </div>
      </div>
    </section>
  );
};

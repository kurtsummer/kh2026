import { Utensils, Coffee, Wine, ChefHat, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Menu = () => {
  const categories = [
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Vorspeisen",
      description: "Ein feiner Start in Ihr Menü.",
      items: [
        { name: "Hausgebeizter Lachs", price: "14.50€", detail: "mit Senf-Dill-Sauce & Röstbrot" },
        { name: "Musterhausener Marktsalat", price: "9.80€", detail: "mit Honig-Senf-Dressing & Nüssen" },
      ],
      color: "bg-[#FF7E67]",
      bg: "bg-[#FF7E67]/5",
    },
    {
      icon: <ChefHat className="w-10 h-10" />,
      title: "Hauptspeisen",
      description: "Das Herzstück unserer Küche.",
      items: [
        { name: "Original Wiener Schnitzel", price: "24.50€", detail: "vom Kalb, mit Preiselbeeren & Kartoffelsalat" },
        { name: "Hausgemachte Pasta", price: "18.90€", detail: "mit Steinpilzen & Trüffelöl" },
      ],
      color: "bg-[#45B7AF]",
      bg: "bg-[#45B7AF]/5",
    },
    {
      icon: <Wine className="w-10 h-10" />,
      title: "Getränke",
      description: "Perfekte Begleiter für Ihr Mahl.",
      items: [
        { name: "Musterhausener Weißburgunder", price: "6.50€", detail: "0.2l - frisch & fruchtig" },
        { name: "Hausgemachte Limonade", price: "4.80€", detail: "0.4l - Zitrone-Ingwer oder Beere" },
      ],
      color: "bg-[#FFD93D]",
      bg: "bg-[#FFD93D]/5",
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Desserts",
      description: "Ein süßer Abschluss.",
      items: [
        { name: "Warmer Schokokuchen", price: "8.50€", detail: "mit flüssigem Kern & Vanilleeis" },
        { name: "Apfelstrudel", price: "7.20€", detail: "nach altem Familienrezept" },
      ],
      color: "bg-[#2D3436]",
      bg: "bg-[#2D3436]/5",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-[#FFFCF8] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF7E67]/5 rounded-full blur-[80px] -z-1" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45B7AF]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Unsere Speisekarte</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">
            Ehrliche Küche, <span className="text-[#45B7AF]">echter Geschmack</span>.
          </h3>
          <p className="text-lg text-[#2D3436]/60 font-medium max-w-xl mx-auto">
            Wir verwenden ausschließlich frische Produkte aus der Region Musterhausen. Entdecken Sie unsere saisonalen Spezialitäten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`group ${cat.bg} p-8 rounded-[48px] border-2 border-transparent hover:border-white hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col`}
            >
              <div className={`${cat.color} text-white p-5 rounded-[32px] mb-8 shadow-lg group-hover:rotate-6 transition-transform w-fit mx-auto`}>
                {cat.icon}
              </div>
              <h4 className="text-2xl font-black text-[#2D3436] mb-2 text-center">{cat.title}</h4>
              <p className="text-[#2D3436]/60 text-sm mb-8 font-medium leading-relaxed text-center">{cat.description}</p>
              
              <div className="space-y-6 flex-grow">
                {cat.items.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="font-black text-[#2D3436] leading-tight">{item.name}</span>
                      <span className="text-[#FF7E67] font-black">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#2D3436]/50 font-bold">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 mt-8 border-t border-[#2D3436]/5 w-full">
                <Button variant="ghost" className="text-[#2D3436] hover:bg-[#2D3436]/5 rounded-full w-full py-6 font-bold flex items-center gap-2">
                  <Star className={`w-4 h-4 fill-current ${cat.color.replace('bg-', 'text-')}`} />
                  Mehr Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-[#45B7AF] p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -z-1 group-hover:scale-125 transition-transform duration-1000" />
           <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FFD93D]/10 rounded-full blur-[100px] -z-1" />
           
           <div className="relative z-10 space-y-8">
              <div className="bg-white/20 p-4 rounded-3xl w-fit mx-auto animate-bounce">
                <Sparkles className="w-10 h-10 text-[#FFD93D]" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black">Besondere Wünsche?</h4>
              <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto">
                Ob vegan, glutenfrei oder spezielle Allergien – sprechen Sie uns einfach an. Wir kreieren gerne ein individuelles Gericht für Sie!
              </p>
              <Button asChild className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-full px-12 py-8 text-xl font-black shadow-2xl border-none transition-all hover:scale-105 active:scale-95">
                 <a href="#contact">Fragen stellen</a>
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

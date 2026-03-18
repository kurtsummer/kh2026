import { useState } from "react";
import { Utensils, Coffee, Wine, ChefHat, Star, Sparkles, X, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface MenuItem {
  name: string;
  price: string;
  detail: string;
  longDetail?: string;
  allergens?: string[];
}

interface MenuCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  items: MenuItem[];
  color: string;
  bg: string;
}

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);

  const categories: MenuCategory[] = [
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Vorspeisen",
      description: "Ein feiner Start in Ihr Menü.",
      longDescription: "Unsere Vorspeisen bereiten Ihren Gaumen auf das Haupterlebnis vor. Wir setzen auf leichte Texturen und frische Aromen.",
      items: [
        { 
          name: "Hausgebeizter Lachs", 
          price: "14.50€", 
          detail: "mit Senf-Dill-Sauce & Röstbrot",
          longDetail: "24 Stunden in einer speziellen Beize aus Meersalz, braunem Zucker und frischem Dill gereift. Serviert mit hausgemachtem Sauerteigbrot.",
          allergens: ["Fisch", "Gluten", "Senf"]
        },
        { 
          name: "Musterhausener Marktsalat", 
          price: "9.80€", 
          detail: "mit Honig-Senf-Dressing & Nüssen",
          longDetail: "Knackige Blattsalate direkt vom Bio-Hof nebenan, verfeinert mit gerösteten Walnüssen und einem Dressing aus regionalem Waldhonig.",
          allergens: ["Schalenfrüchte", "Senf"]
        },
        {
          name: "Rinder-Carpaccio",
          price: "16.90€",
          detail: "mit Trüffel-Mayonnaise & Grana Padano",
          longDetail: "Hauchdünne Scheiben vom Weiderind, garniert mit Wildkräutern und 24 Monate gereiftem Hartkäse.",
          allergens: ["Milch", "Ei"]
        }
      ],
      color: "bg-[#FF7E67]",
      bg: "bg-[#FF7E67]/5",
    },
    {
      icon: <ChefHat className="w-10 h-10" />,
      title: "Hauptspeisen",
      description: "Das Herzstück unserer Küche.",
      longDescription: "Hier zeigt Max seine ganze Kunst. Traditionelle Rezepte treffen auf modernes Handwerk und beste Fleischqualität.",
      items: [
        { 
          name: "Original Wiener Schnitzel", 
          price: "24.50€", 
          detail: "vom Kalb, mit Preiselbeeren & Kartoffelsalat",
          longDetail: "In der Pfanne in Butterschmalz goldgelb ausgebacken. Wir verwenden ausschließlich Fleisch vom regionalen Kalb.",
          allergens: ["Gluten", "Ei", "Milch"]
        },
        { 
          name: "Hausgemachte Pasta", 
          price: "18.90€", 
          detail: "mit Steinpilzen & Trüffelöl",
          longDetail: "Täglich frisch produzierte Tagliatelle in einer cremigen Weißweinsauce mit aromatischen Waldpilzen.",
          allergens: ["Gluten", "Ei", "Milch"]
        },
        {
          name: "Zanderfilet kross gebraten",
          price: "22.50€",
          detail: "auf Rahmwirsing & Salzkartoffeln",
          longDetail: "Frisch gefangener Zander mit knuspriger Haut, serviert auf einem Bett aus feinem Sahnigem Kohlgemüse.",
          allergens: ["Fisch", "Milch"]
        }
      ],
      color: "bg-[#45B7AF]",
      bg: "bg-[#45B7AF]/5",
    },
    {
      icon: <Wine className="w-10 h-10" />,
      title: "Getränke",
      description: "Perfekte Begleiter für Ihr Mahl.",
      longDescription: "Unsere Weinkarte wird monatlich kuratiert, um die perfekte Harmonie zu unseren saisonalen Gerichten zu bieten.",
      items: [
        { 
          name: "Musterhausener Weißburgunder", 
          price: "6.50€", 
          detail: "0.2l - frisch & fruchtig",
          longDetail: "Vom Weingut Müller aus der Region. Noten von grünem Apfel und Birne, sehr mineralisch im Abgang.",
          allergens: ["Sulfite"]
        },
        { 
          name: "Hausgemachte Limonade", 
          price: "4.80€", 
          detail: "0.4l - Zitrone-Ingwer oder Beere",
          longDetail: "Mit frischen Früchten und wenig Rohrzucker täglich frisch angesetzt. Ohne künstliche Zusätze.",
        },
        {
          name: "Craft Bier 'Max Spezial'",
          price: "5.20€",
          detail: "0.33l - Unfiltriertes Pale Ale",
          longDetail: "Gebraut in der Musterhausener Braumanufaktur exklusiv für unser Haus. Hopfig und charakterstark.",
          allergens: ["Gluten"]
        }
      ],
      color: "bg-[#FFD93D]",
      bg: "bg-[#FFD93D]/5",
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Desserts",
      description: "Ein süßer Abschluss.",
      longDescription: "Denn für ein Dessert gibt es immer einen extra Platz im Magen. Unsere Nachspeisen sind hausgemacht und sündhaft gut.",
      items: [
        { 
          name: "Warmer Schokokuchen", 
          price: "8.50€", 
          detail: "mit flüssigem Kern & Vanilleeis",
          longDetail: "Hergestellt aus 70%iger Valrhona Schokolade. 12 Minuten Backzeit für den perfekten flüssigen Kern.",
          allergens: ["Gluten", "Ei", "Milch"]
        },
        { 
          name: "Apfelstrudel", 
          price: "7.20€", 
          detail: "nach altem Familienrezept",
          longDetail: "Hauchdünner gezogener Teig mit Äpfeln aus dem Alten Land, Rosinen und einer Prise Zimt. Serviert mit Vanillesauce.",
          allergens: ["Gluten", "Milch", "Schalenfrüchte"]
        },
        {
          name: "Beeren-Tiramisu",
          price: "7.90€",
          detail: "fruchtige Variante des Klassikers",
          longDetail: "Mit Mascarpone-Creme, Löffelbiskuit und einer Auswahl an Waldbeeren statt Kaffee.",
          allergens: ["Gluten", "Ei", "Milch"]
        }
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
                {cat.items.slice(0, 2).map((item) => (
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
                <Button 
                  onClick={() => setSelectedCategory(cat)}
                  variant="ghost" 
                  className="text-[#2D3436] hover:bg-[#2D3436]/5 rounded-full w-full py-6 font-bold flex items-center gap-2 group/btn"
                >
                  <Info className={`w-4 h-4 transition-transform group-hover/btn:scale-125 ${cat.color.replace('bg-', 'text-')}`} />
                  Mehr Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Detail Dialog */}
        <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
          <DialogContent className="max-w-3xl w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-white rounded-[48px] border-none shadow-2xl">
            <DialogHeader className="p-10 pb-0 relative">
              <div className="flex items-center gap-6 mb-4">
                <div className={`${selectedCategory?.color} text-white p-4 rounded-3xl shadow-lg`}>
                  {selectedCategory?.icon}
                </div>
                <div>
                  <DialogTitle className="text-3xl font-black text-[#2D3436]">{selectedCategory?.title}</DialogTitle>
                  <DialogDescription className="text-lg text-[#2D3436]/60 font-medium">
                    {selectedCategory?.longDescription}
                  </DialogDescription>
                </div>
              </div>
              <DialogClose className="absolute top-10 right-10 p-3 bg-[#FAF9F6] text-[#2D3436] rounded-2xl hover:bg-[#FF7E67] hover:text-white transition-all">
                <X className="w-6 h-6" />
              </DialogClose>
            </DialogHeader>

            <div className="p-10 pt-6 overflow-y-auto">
              <div className="grid gap-8">
                {selectedCategory?.items.map((item, idx) => (
                  <div key={idx} className="bg-[#FAF9F6] p-8 rounded-[32px] group hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FF7E67]/10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="text-xl font-black text-[#2D3436] group-hover:text-[#FF7E67] transition-colors">{item.name}</h5>
                        <p className="text-sm font-black text-[#45B7AF] uppercase tracking-wider mt-1">{item.detail}</p>
                      </div>
                      <span className="text-2xl font-black text-[#2D3436]">{item.price}</span>
                    </div>
                    <p className="text-[#2D3436]/70 leading-relaxed font-medium mb-4">
                      {item.longDetail}
                    </p>
                    {item.allergens && (
                      <div className="flex items-center gap-2 pt-4 border-t border-[#2D3436]/5">
                        <span className="text-[10px] font-black text-[#2D3436]/40 uppercase tracking-widest">Allergene:</span>
                        <div className="flex gap-2">
                          {item.allergens.map((a) => (
                            <span key={a} className="text-[10px] font-black bg-[#2D3436]/5 text-[#2D3436]/60 px-2 py-0.5 rounded-md">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center bg-[#FF7E67]/5 p-8 rounded-[40px] border-2 border-dashed border-[#FF7E67]/20">
                <p className="text-[#2D3436] font-bold flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-[#FF7E67] fill-current" />
                  Guten Appetit wünscht Max & sein Team!
                </p>
                <Button 
                   asChild
                   className="mt-6 bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-full px-10 py-6 font-black border-none shadow-lg"
                >
                   <a href="#reservation" onClick={() => setSelectedCategory(null)}>Diesen Tisch reservieren</a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

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

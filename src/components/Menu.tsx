import React, { useState } from 'react';
import { Utensils, GlassWater, Leaf, Sparkles } from 'lucide-react';

const menuCategories = [
  { id: 'drinks', name: 'Bar & Braukunst', icon: <GlassWater size={18} /> },
  { id: 'food', name: 'Deftige Küche', icon: <Utensils size={18} /> },
  { id: 'snacks', name: 'Kleinigkeiten', icon: <Leaf size={18} /> },
];

const menuItems = {
  drinks: [
    { name: 'Muster-Helles (Hausbräu)', price: '4,50 €', desc: 'Süffig & frisch, direkt aus dem Kupferkessel (0,5l)', popular: true },
    { name: 'Bernstein IPA', price: '5,80 €', desc: 'Kräftig gehopft mit feinen Zitrusnoten (0,4l)' },
    { name: 'Musterhäuser Dunkel', price: '4,60 €', desc: 'Röstmalz-Noten mit einer Note von Karamell (0,5l)' },
    { name: 'Whisky Sour (Signature)', price: '9,50 €', desc: 'Hausmischung mit lokalem Obstbrand-Finish' },
    { name: 'Naturtrüber Apfelsaft', price: '4,20 €', desc: 'Von Streuobstwiesen aus der Nachbarschaft (0,4l)' },
  ],
  food: [
    { name: 'Der "Braumeister" Burger', price: '17,90 €', desc: 'Saftiges Beef, Malzbier-Zwiebeln, Bergkäse & Speck', popular: true, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
    { name: 'Original Wiener Schnitzel', price: '22,50 €', desc: 'Vom Kalb, dazu lauwarmem Kartoffel-Gurkensalat', img: "https://images.unsplash.com/photo-1599923266141-6156a5247385?q=80&w=400&auto=format&fit=crop" },
    { name: 'Kässpätzle "Musterhausen"', price: '14,80 €', desc: 'Mit drei Sorten Bergkäse und echten Röstzwiebeln' },
    { name: 'Rindergulasch in Dunkelbiersauce', price: '19,20 €', desc: 'Zart geschmort mit handgedrehten Semmelknödeln' },
  ],
  snacks: [
    { name: 'Muster-Brotzeit', price: '13,50 €', desc: 'Schinken, Bergkäse, Obatzda & krustiges Bauernbrot', img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=400&auto=format&fit=crop" },
    { name: 'Ofenwarme Riesenbrezn', price: '2,80 €', desc: 'Täglich frisch gebacken, mit grobem Meersalz' },
    { name: 'Würzige Stout-Nüsse', price: '4,50 €', desc: 'In Schwarzbier und Honig geröstete Nussmischung' },
  ],
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('drinks');

  return (
    <section id="menu" className="py-32 px-6 bg-white dark:bg-[#0F0A08] relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
            <span className="text-[#D48806] font-black uppercase tracking-[0.4em] text-[10px]">Genuss erleben</span>
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#2D241E] dark:text-white mb-6 uppercase italic-font-pub tracking-tight">Die <span className="text-[#D48806]">Speisekarte</span></h2>
          <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 text-xl font-serif max-w-2xl mx-auto italic">Regionale Zutaten, mit handwerklicher Liebe veredelt.</p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-[#D48806] text-[#1A0F0A] border-[#D48806] shadow-xl' 
                  : 'bg-[#2D241E]/5 dark:bg-white/5 text-[#2D241E]/60 dark:text-[#F5E6D3]/60 border-[#2D241E]/5 dark:border-white/10 hover:bg-[#2D241E]/10 dark:hover:bg-white/10'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid - With Food Images for "Friendly" look */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 animate-in fade-in duration-700">
          {menuItems[activeCategory as keyof typeof menuItems].map((item: any, i) => (
            <div 
              key={i} 
              className="group flex gap-6 items-start pb-8 border-b border-[#2D241E]/5 dark:border-[#D48806]/10"
            >
              {item.img && (
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-[#D48806]/20 shadow-lg hidden sm:block">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              )}
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-black text-[#2D241E] dark:text-[#F5E6D3] group-hover:text-[#D48806] transition-colors uppercase tracking-tight">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="bg-[#D48806]/10 text-[#D48806] text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-[0.2em] border border-[#D48806]/20">
                        Top
                      </span>
                    )}
                  </div>
                  <span className="text-lg font-black text-[#D48806] tabular-nums ml-4">{item.price}</span>
                </div>
                <p className="text-[#2D241E]/50 dark:text-[#F5E6D3]/50 font-serif italic text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-3xl border border-[#2D241E]/5 dark:border-[#D48806]/20 bg-[#FAF6F0] dark:bg-[#1A0F0A]/50 text-center relative overflow-hidden transition-colors duration-500 shadow-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D48806]" />
          <Sparkles className="text-[#D48806]/10 w-24 h-24 absolute -bottom-6 -right-6 rotate-12" />
          
          <h4 className="text-2xl font-black text-[#2D241E] dark:text-white mb-4 uppercase tracking-tighter">Besondere Wünsche?</h4>
          <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif mb-8 text-lg">Unser Team bereitet auf Anfrage gerne vegetarische oder glutenfreie Varianten zu. Sprich uns einfach an!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <div className="flex items-center gap-2 text-[#D48806] font-black text-[10px] uppercase tracking-[0.3em]">
               <div className="w-2 h-2 rounded-full bg-[#D48806] animate-pulse" />
               Küche täglich bis 22:30 Uhr geöffnet
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

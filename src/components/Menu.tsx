import React, { useState } from 'react';
import { Utensils, GlassWater, Leaf, Sparkles } from 'lucide-react';

const menuCategories = [
  { id: 'drinks', name: 'Vom Fass & Bar', icon: <GlassWater size={18} /> },
  { id: 'food', name: 'Deftige Küche', icon: <Utensils size={18} /> },
  { id: 'snacks', name: 'Für Zwischendurch', icon: <Leaf size={18} /> },
];

const menuItems = {
  drinks: [
    { name: 'Muster-Helles (Hausbräu)', price: '4,50 €', desc: 'Mild-würzig, direkt aus dem Kupferkessel (0,5l)', popular: true },
    { name: 'Bernstein IPA', price: '5,80 €', desc: 'Kräftig gehopft, Aromen von Pinie & Grapefruit (0,4l)' },
    { name: 'Musterhäuser Dunkel', price: '4,60 €', desc: 'Röstmalz-Noten mit feiner Karamellsüße (0,5l)' },
    { name: 'Whisky Sour (Signature)', price: '9,50 €', desc: 'Hausmischung mit lokalem Obstbrand-Finish' },
    { name: 'Naturtrüber Apfelsaft', price: '4,20 €', desc: 'Von Streuobstwiesen der Region (0,4l)' },
  ],
  food: [
    { name: 'Der "Braumeister" Burger', price: '17,90 €', desc: 'Beef-Patty, Malzbier-Zwiebeln, würziger Käse & Speck', popular: true },
    { name: 'Original Wiener Schnitzel', price: '22,50 €', desc: 'Vom Kalb, in Butterschmalz gebacken, mit lauwarmem Kartoffelsalat' },
    { name: 'Kässpätzle "Allgäu Style"', price: '14,80 €', desc: 'Mit drei Sorten Bergkäse und handgemachten Röstzwiebeln' },
    { name: 'Rindergulasch in Dunkelbiersauce', price: '19,20 €', desc: 'Zart geschmort mit Semmelknödeln und Rotkohl' },
  ],
  snacks: [
    { name: 'Brotzeit-Platte', price: '13,50 €', desc: 'Schinken, Bergkäse, Obatzda, Radieschen & Bauernbrot' },
    { name: 'Frische Brezn', price: '2,80 €', desc: 'Noch warm aus dem Ofen, mit grobem Meersalz' },
    { name: 'Würzige Stout-Nüsse', price: '4,50 €', desc: 'In Schwarzbier und Honig geröstete Nussmischung' },
  ],
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('drinks');

  return (
    <section id="menu" className="py-32 px-6 bg-[#0F0A08] relative">
      {/* Chalkboard Background for Menu */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
            <span className="text-[#D48806] font-black uppercase tracking-[0.4em] text-xs">Genuss pur</span>
            <div className="h-[1px] w-8 bg-[#D48806]/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic-font-pub tracking-tight">Die <span className="text-[#D48806]">Speisekarte</span></h2>
          <p className="text-[#F5E6D3]/60 text-xl font-serif max-w-2xl mx-auto italic">Ehrliche Zutaten aus der Region, mit Liebe veredelt.</p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-[#D48806] text-[#1A0F0A] border-[#D48806] shadow-[0_0_20px_rgba(212,136,6,0.3)]' 
                  : 'bg-white/5 text-[#F5E6D3]/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid - Chalkboard Style */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 animate-in fade-in duration-700">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col pb-6 border-b border-[#D48806]/10"
            >
              <div className="flex justify-between items-baseline mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-[#F5E6D3] group-hover:text-[#D48806] transition-colors uppercase tracking-tight">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="bg-[#D48806]/10 text-[#D48806] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-[#D48806]/20">
                      Favorit
                    </span>
                  )}
                </div>
                <div className="flex-grow border-b border-dotted border-[#D48806]/20 mx-4" />
                <span className="text-xl font-black text-[#D48806] tabular-nums">{item.price}</span>
              </div>
              <p className="text-[#F5E6D3]/50 font-serif italic text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-3xl border border-[#D48806]/20 bg-[#1A0F0A]/50 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D48806]" />
          <Sparkles className="text-[#D48806]/20 w-24 h-24 absolute -bottom-6 -right-6 rotate-12" />
          
          <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Besondere Wünsche?</h4>
          <p className="text-[#F5E6D3]/60 font-serif mb-8 text-lg">Unser Küchenchef bereitet auf Anfrage auch gerne vegane Alternativen oder glutenfreie Varianten zu. Sprich uns einfach an!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <div className="flex items-center gap-2 text-[#D48806] font-black text-sm uppercase tracking-widest">
               <div className="w-2 h-2 rounded-full bg-[#D48806]" />
               Küche geöffnet bis 22:30 Uhr
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

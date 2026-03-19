import React, { useState } from 'react';
import { Utensils, GlassWater, Leaf } from 'lucide-react';

const menuCategories = [
  { id: 'drinks', name: 'Getränke', icon: <GlassWater size={20} /> },
  { id: 'food', name: 'Speisen', icon: <Utensils size={20} /> },
  { id: 'snacks', name: 'Happen', icon: <Leaf size={20} /> },
];

const menuItems = {
  drinks: [
    { name: 'Muster-Helles', price: '4,20 €', desc: 'Hausbrauerei, süffig & mild (0,5l)' },
    { name: 'Mustermanns IPA', price: '5,50 €', desc: 'Hopfig mit Zitrusnoten, 6,2% Vol.' },
    { name: 'Alkoholfreies Weizen', price: '4,50 €', desc: 'Regionale Brauart' },
    { name: 'Hausgemachte Limonade', price: '4,80 €', desc: 'Zitrone-Minze oder Waldbeere' },
  ],
  food: [
    { name: 'Brauhaus Burger', price: '16,50 €', desc: '100% Weiderind, Cheddar, hausgemachte Sauce & Pommes' },
    { name: 'Musterhäuser Schnitzel', price: '18,90 €', desc: 'Vom Kalb, dazu Bratkartoffeln und Preiselbeeren' },
    { name: 'Ofenkartoffel "Max"', price: '12,50 €', desc: 'Mit Kräuterquark und frischem Saisongemüse' },
    { name: 'Veggie-Curry', price: '14,20 €', desc: 'Scharf & würzig mit Kichererbsen und Kokosmilch' },
  ],
  snacks: [
    { name: 'Brez‘n mit Obatzda', price: '6,90 €', desc: 'Frisch gebacken, perfekt zum Bier' },
    { name: 'Hausgemachte Oliven', price: '4,50 €', desc: 'In Knoblauch-Kräuter-Öl mariniert' },
    { name: 'Portion Pommes', price: '5,20 €', desc: 'Mit Mayo oder Ketchup' },
  ],
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('drinks');

  return (
    <section id="menu" className="py-24 px-6 bg-[#2D241E] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Unsere <span className="text-[#E6B325]">Karte</span></h2>
          <p className="text-white/60 text-lg">Frisch, regional und mit Sorgfalt zubereitet.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 bg-white/5 p-2 rounded-3xl w-fit mx-auto border border-white/10">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-[#E6B325] text-white shadow-lg' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-[#E6B325] transition-colors">{item.name}</h3>
                <span className="text-[#E6B325] font-black text-lg">{item.price}</span>
              </div>
              <p className="text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6">Alle Preise inkl. MwSt. Allergene können bei unserem Personal erfragt werden.</p>
          <button className="bg-transparent border-2 border-[#E6B325] text-[#E6B325] px-8 py-3 rounded-2xl font-bold hover:bg-[#E6B325] hover:text-white transition-all">
            Vollständige Karte als PDF (bald verfügbar)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

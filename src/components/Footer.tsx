import React from 'react';
import { Beer, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0A0706] pt-32 pb-12 px-6 border-t border-[#2D241E]/5 dark:border-[#D48806]/10 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#2D241E] dark:bg-[#D48806] p-2 rounded-lg">
                <Beer className="text-white dark:text-[#1A0F0A] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-[#2D241E] dark:text-white leading-none uppercase">Mustermann's</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#D48806] leading-none mt-1 uppercase">Braustube</span>
              </div>
            </div>
            <p className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 max-w-sm mb-10 leading-relaxed text-lg font-serif italic">
              "Wo Fremde zu Freunden werden und die Nacht niemals zu Ende geht."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#2D241E]/10 dark:border-[#D48806]/20 text-[#2D241E]/40 dark:text-[#D48806] hover:bg-[#D48806] hover:text-[#1A0F0A] hover:border-[#D48806] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#2D241E] dark:text-white mb-8 uppercase tracking-[0.4em] text-[9px]">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">Die Braustube</a></li>
              <li><a href="#menu" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">Speisen & Getränke</a></li>
              <li><a href="#events" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">Termine</a></li>
              <li><a href="#contact" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-[0.2em] text-[10px]">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#2D241E] dark:text-white mb-8 uppercase tracking-[0.4em] text-[9px]">Rechtliches</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
              <li><a href="/impressum" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="text-[#2D241E]/40 dark:text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Hausordnung</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2D241E]/5 dark:border-[#D48806]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#2D241E]/20 dark:text-[#F5E6D3]/20 text-[9px] font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Mustermann's Braustube — Musterhausen
          </p>
          <div className="flex items-center gap-2 text-[#2D241E]/20 dark:text-[#F5E6D3]/20 text-[9px] font-black uppercase tracking-[0.5em]">
            In Handarbeit erstellt <Heart size={10} className="text-[#D48806] fill-[#D48806]" /> für die Community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

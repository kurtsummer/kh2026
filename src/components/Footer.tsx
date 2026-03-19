import React from 'react';
import { Beer, Instagram, Facebook, Twitter, Heart, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0706] pt-32 pb-12 px-6 border-t border-[#D48806]/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#D48806] p-2 rounded-lg">
                <Beer className="text-[#1A0F0A] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">Mustermann's</span>
                <span className="text-xs font-bold tracking-[0.3em] text-[#D48806] leading-none mt-1 uppercase">Braustube</span>
              </div>
            </div>
            <p className="text-[#F5E6D3]/40 max-w-sm mb-10 leading-relaxed text-lg font-serif italic">
              "Wo Fremde zu Freunden werden und die Nacht niemals zu Ende geht."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#D48806]/20 text-[#D48806] hover:bg-[#D48806] hover:text-[#1A0F0A] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-widest text-[11px]">Die Braustube</a></li>
              <li><a href="#menu" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-widest text-[11px]">Speisen & Getränke</a></li>
              <li><a href="#events" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-widest text-[11px]">Termine</a></li>
              <li><a href="#contact" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors font-bold uppercase tracking-widest text-[11px]">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Informationen</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="/impressum" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="text-[#F5E6D3]/40 hover:text-[#D48806] transition-colors">Hausordnung & AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#D48806]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#F5E6D3]/20 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Mustermann's Braustube — Musterhausen
          </p>
          <div className="flex items-center gap-2 text-[#F5E6D3]/20 text-[10px] font-black uppercase tracking-[0.4em]">
            Made with <Heart size={10} className="text-[#D48806] fill-[#D48806]" /> for the Community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

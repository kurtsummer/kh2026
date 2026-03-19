import React from 'react';
import { Beer, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FFFDF5] pt-24 pb-12 px-6 border-t border-[#2D241E]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#E6B325] p-2 rounded-xl">
                <Beer className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#2D241E]">
                Mustermann's <span className="text-[#E6B325]">Braustube</span>
              </span>
            </div>
            <p className="text-[#2D241E]/60 max-w-sm mb-8 leading-relaxed text-lg">
              Dein zweites Wohnzimmer in Musterhausen. Seit 1995 stehen wir für Qualität, Gemütlichkeit und echtes Brauhandwerk.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#2D241E] text-white p-3 rounded-full hover:bg-[#E6B325] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#2D241E] text-white p-3 rounded-full hover:bg-[#E6B325] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#2D241E] text-white p-3 rounded-full hover:bg-[#E6B325] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#2D241E] mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Über uns</a></li>
              <li><a href="#menu" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Speisekarte</a></li>
              <li><a href="#events" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Events</a></li>
              <li><a href="#contact" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#2D241E] mb-6 uppercase tracking-wider text-sm">Rechtliches</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Impressum</a></li>
              <li><a href="#" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">Datenschutz</a></li>
              <li><a href="#" className="text-[#2D241E]/60 hover:text-[#E6B325] transition-colors font-medium">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2D241E]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#2D241E]/40 text-sm font-medium">
            © {new Date().getFullYear()} Mustermann's Braustube. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-1.5 text-[#2D241E]/40 text-sm font-medium">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> in Musterhausen
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

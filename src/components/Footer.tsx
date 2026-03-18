import { Instagram, Facebook, Linkedin, Camera, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3436] text-white pt-24 pb-12 border-t border-white/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[150px] -z-1" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 col-span-1 lg:col-span-1">
             <Link to="/" className="inline-block group">
                <div className="flex items-center gap-3">
                   <div className="bg-[#C5A059] p-3 rounded-2xl shadow-lg transition-transform group-hover:rotate-12">
                      <Camera className="w-8 h-8 text-white" />
                   </div>
                   <div>
                      <h4 className="text-xl font-serif font-bold tracking-tight">Max Mustermann</h4>
                      <p className="text-[10px] uppercase font-bold text-[#C5A059] tracking-widest leading-none">Fotografie</p>
                   </div>
                </div>
             </Link>
             <p className="text-white/60 leading-relaxed text-sm italic">
                "Ein Foto ist die Rückfahrkarte zu einem Moment, der sonst für immer verloren wäre."
             </p>
             <div className="flex gap-4">
                {[<Instagram key="i"/>, <Facebook key="f"/>, <Linkedin key="l"/>].map((icon, i) => (
                  <button key={i} className="bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-all hover:scale-110 text-white/70 hover:text-[#C5A059] shadow-sm" aria-label={`Social Media ${i}`}>
                     {icon}
                  </button>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-6 border-b border-[#C5A059]/20 pb-4 inline-block">Navigation</h5>
             <ul className="space-y-4">
                {["Über mich", "Services", "Portfolio", "Bewertungen", "Kontakt"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace("ü", "u").replace(" ", "-")}`} 
                      className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-6 border-b border-[#C5A059]/20 pb-4 inline-block">Kontakt</h5>
             <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                   <div className="bg-white/5 p-2 rounded-lg text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                      <Mail className="w-4 h-4" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1 leading-none">E-Mail</p>
                      <a href="mailto:hello@mustermann-fotografie.de" className="text-sm font-medium hover:text-[#C5A059] transition-colors">hello@mustermann-fotografie.de</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-white/5 p-2 rounded-lg text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                      <Phone className="w-4 h-4" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1 leading-none">Telefon</p>
                      <a href="tel:+49123456789" className="text-sm font-medium hover:text-[#C5A059] transition-colors">+49 (0) 123 456 789</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-white/5 p-2 rounded-lg text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                      <MapPin className="w-4 h-4" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1 leading-none">Studio</p>
                      <p className="text-sm font-medium">Fotogasse 12, 12345 Musterhausen</p>
                   </div>
                </li>
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-6 border-b border-[#C5A059]/20 pb-4 inline-block">Öffnungszeiten</h5>
             <ul className="space-y-4">
                <li className="flex justify-between text-sm text-white/60">
                   <span>Mo - Fr:</span>
                   <span className="text-white font-medium">09:00 - 18:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-white/60">
                   <span>Sa:</span>
                   <span className="text-white font-medium">10:00 - 14:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-white/60 border-t border-white/5 pt-4">
                   <span>Shooting-Termine nach Vereinbarung auch außerhalb der Zeiten.</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} MAX MUSTERMANN FOTOGRAFIE. ALLE RECHTE VORBEHALTEN.
           </p>
           <div className="flex gap-8">
              <Link to="/impressum" className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Datenschutz</Link>
              <Link to="/agb" className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">AGB</Link>
           </div>
           <div className="flex items-center gap-2 text-white/20 text-xs font-bold">
              MADE WITH <Heart className="w-3 h-3 text-red-900 fill-current animate-pulse" /> IN MUSTERHAUSEN
           </div>
        </div>
      </div>
    </footer>
  );
};

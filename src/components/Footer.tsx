import { Instagram, Facebook, Utensils, Heart, Mail, Phone, MapPin, Sparkles, Star, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-[#2D3436] pt-24 pb-12 border-t border-[#FF7E67]/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7E67]/5 rounded-full blur-[150px] -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#45B7AF]/5 rounded-full blur-[150px] -z-1" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 col-span-1 lg:col-span-1">
             <Link to="/" className="inline-block group">
                <div className="flex items-center gap-4">
                   <div className="bg-[#FF7E67] p-4 rounded-[28px] shadow-xl transition-all group-hover:rotate-12 group-hover:scale-110">
                      <Utensils className="w-8 h-8 text-white" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black tracking-tighter leading-none">Restaurant Max</h4>
                      <p className="text-[10px] uppercase font-black text-[#45B7AF] tracking-[0.4em] leading-none mt-1">Kulinarik in Musterhausen</p>
                   </div>
                </div>
             </Link>
             <p className="text-[#2D3436]/60 leading-relaxed text-lg font-medium italic">
                "Genuss ist die einzige Beschäftigung, die niemals ermüdet."
             </p>
             <div className="flex gap-4">
                {[
                  { icon: <Instagram />, color: "hover:bg-[#E1306C] hover:text-white" },
                  { icon: <Facebook />, color: "hover:bg-[#4267B2] hover:text-white" }
                ].map((social, i) => (
                  <button key={i} className={`bg-white hover:shadow-xl p-4 rounded-2xl transition-all hover:scale-110 text-[#2D3436]/70 shadow-sm border border-gray-100 ${social.color}`} aria-label={`Social Media ${i}`}>
                     {social.icon}
                  </button>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#FF7E67] uppercase tracking-widest mb-6 border-b-4 border-[#FF7E67]/10 pb-4 inline-block">Navigation</h5>
             <ul className="space-y-5">
                {["Speisekarte", "Über uns", "Galerie", "Reservierung", "Kontakt"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace("ü", "u").replace(" ", "-")}`}
                      className="text-[#2D3436]/60 hover:text-[#FF7E67] transition-all text-sm font-black flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#45B7AF] scale-0 group-hover:scale-100 transition-transform" />
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    download="Speisekarte_Restaurant_Max.pdf"
                    className="text-[#FF7E67] hover:text-[#E66B56] transition-all text-sm font-black flex items-center gap-3 group mt-4 pt-4 border-t border-[#2D3436]/5"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    PDF Download
                  </a>
                </li>
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#45B7AF] uppercase tracking-widest mb-6 border-b-4 border-[#45B7AF]/10 pb-4 inline-block">Kontakt</h5>
             <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#FF7E67]/10 p-3 rounded-2xl text-[#FF7E67] group-hover:bg-[#FF7E67] group-hover:text-white transition-all group-hover:rotate-6">
                      <Mail className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#2D3436]/30 uppercase tracking-widest mb-1 leading-none">E-Mail</p>
                      <a href="mailto:hallo@restaurant-max.de" className="text-sm font-black hover:text-[#FF7E67] transition-colors">hallo@restaurant-max.de</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#45B7AF]/10 p-3 rounded-2xl text-[#45B7AF] group-hover:bg-[#45B7AF] group-hover:text-white transition-all group-hover:-rotate-6">
                      <Phone className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#2D3436]/30 uppercase tracking-widest mb-1 leading-none">Telefon</p>
                      <a href="tel:+49123456789" className="text-sm font-black hover:text-[#45B7AF] transition-colors">+49 (0) 123 456 789</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#FFD93D]/10 p-3 rounded-2xl text-[#FFD93D] group-hover:bg-[#FFD93D] group-hover:text-white transition-all group-hover:rotate-12">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#2D3436]/30 uppercase tracking-widest mb-1 leading-none">Adresse</p>
                      <p className="text-sm font-black">Hauptstraße 42, 12345 Musterhausen</p>
                   </div>
                </li>
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#FFD93D] uppercase tracking-widest mb-6 border-b-4 border-[#FFD93D]/10 pb-4 inline-block">Öffnungszeiten</h5>
             <ul className="space-y-5">
                <li className="flex justify-between text-sm text-[#2D3436]/60">
                   <span className="font-bold">Di - Sa:</span>
                   <span className="text-[#2D3436] font-black">11:30 - 22:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-[#2D3436]/60">
                   <span className="font-bold">So:</span>
                   <span className="text-[#2D3436] font-black">11:00 - 21:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-[#2D3436]/60">
                   <span className="font-bold">Mo:</span>
                   <span className="text-[#FF7E67] font-black uppercase">Ruhetag</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2D3436]/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[#2D3436]/40 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {currentYear} RESTAURANT MAX. GUTEN APPETIT!
           </p>
           <div className="flex gap-10">
              <Link to="/impressum" className="text-[#2D3436]/40 hover:text-[#FF7E67] text-[10px] font-black uppercase tracking-widest transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-[#2D3436]/40 hover:text-[#45B7AF] text-[10px] font-black uppercase tracking-widest transition-colors">Datenschutz</Link>
           </div>
           <div className="flex items-center gap-3 text-[#2D3436]/20 text-[10px] font-black uppercase tracking-widest group cursor-default">
              MADE WITH <Heart className="w-4 h-4 text-[#FF7E67] fill-current group-hover:scale-125 transition-transform" /> AND <Sparkles className="w-4 h-4 text-[#45B7AF] fill-current group-hover:rotate-45 transition-transform" />
           </div>
        </div>
      </div>
    </footer>
  );
};

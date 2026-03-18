import { Instagram, Facebook, Utensils, Heart, Mail, Phone, MapPin, Star, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDF8F1] text-[#16332C] pt-24 pb-12 border-t border-[#16332C]/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[150px] -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16332C]/5 rounded-full blur-[150px] -z-1" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 col-span-1 lg:col-span-1">
             <Link to="/" className="inline-block group">
                <div className="flex items-center gap-4">
                   <div className="bg-[#16332C] p-4 rounded-[28px] shadow-xl transition-all group-hover:rotate-12 group-hover:scale-110">
                      <Utensils className="w-8 h-8 text-white" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black tracking-tighter leading-none">Restaurant Max</h4>
                      <p className="text-[10px] uppercase font-black text-[#C5A059] tracking-[0.4em] mt-1">Kulinarik & Gemütlichkeit</p>
                   </div>
                </div>
             </Link>
             <p className="text-[#16332C]/60 leading-relaxed text-lg font-medium italic">
                "Genuss ist eine Kunst, die wir täglich mit Leidenschaft für Sie verfeinern."
             </p>
             <div className="flex gap-4">
                {[
                  { icon: <Instagram />, color: "hover:bg-[#E1306C] hover:text-white" },
                  { icon: <Facebook />, color: "hover:bg-[#4267B2] hover:text-white" }
                ].map((social, i) => (
                  <button key={i} className={`bg-white hover:shadow-xl p-4 rounded-2xl transition-all hover:scale-110 text-[#16332C]/70 shadow-sm border border-[#16332C]/5 ${social.color}`} aria-label={`Social Media ${i}`}>
                     {social.icon}
                  </button>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#C5A059] uppercase tracking-widest mb-6 border-b-4 border-[#C5A059]/10 pb-4 inline-block">Navigation</h5>
             <ul className="space-y-5">
                {["Speisekarte", "Über uns", "Galerie", "Reservierung", "Kontakt"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace("ü", "u").replace(" ", "-")}`} 
                      className="text-[#16332C]/60 hover:text-[#C5A059] transition-all text-sm font-black flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C5A059] scale-0 group-hover:scale-100 transition-transform" />
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#" 
                    download="Speisekarte_Restaurant_Max.pdf"
                    className="text-[#C5A059] hover:text-[#B49352] transition-all text-sm font-black flex items-center gap-3 group mt-4 pt-4 border-t border-[#16332C]/5"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Speisekarte PDF
                  </a>
                </li>
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#16332C] uppercase tracking-widest mb-6 border-b-4 border-[#16332C]/10 pb-4 inline-block">Kontakt</h5>
             <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#C5A059]/10 p-3 rounded-2xl text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all group-hover:rotate-6">
                      <Mail className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#16332C]/30 uppercase tracking-widest mb-1 leading-none">E-Mail</p>
                      <a href="mailto:hallo@restaurant-max.de" className="text-sm font-black hover:text-[#C5A059] transition-colors">hallo@restaurant-max.de</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#16332C]/10 p-3 rounded-2xl text-[#16332C] group-hover:bg-[#16332C] group-hover:text-white transition-all group-hover:-rotate-6">
                      <Phone className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#16332C]/30 uppercase tracking-widest mb-1 leading-none">Telefon</p>
                      <a href="tel:+49123456789" className="text-sm font-black hover:text-[#16332C] transition-colors font-bold">+49 (0) 123 456 789</a>
                   </div>
                </li>
                <li className="flex gap-4 items-start group">
                   <div className="bg-[#5C4033]/10 p-3 rounded-2xl text-[#5C4033] group-hover:bg-[#5C4033] group-hover:text-white transition-all group-hover:rotate-12">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-[#16332C]/30 uppercase tracking-widest mb-1 leading-none">Adresse</p>
                      <p className="text-sm font-black">Hauptstraße 42, 12345 Musterhausen</p>
                   </div>
                </li>
             </ul>
          </div>

          <div className="space-y-8">
             <h5 className="text-xs font-black text-[#C5A059] uppercase tracking-widest mb-6 border-b-4 border-[#C5A059]/10 pb-4 inline-block">Öffnungszeiten</h5>
             <ul className="space-y-5">
                <li className="flex justify-between text-sm text-[#16332C]/60">
                   <span className="font-bold">Di - Sa:</span>
                   <span className="text-[#16332C] font-black">11:30 - 22:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-[#16332C]/60">
                   <span className="font-bold">So:</span>
                   <span className="text-[#16332C] font-black">11:00 - 21:00 Uhr</span>
                </li>
                <li className="flex justify-between text-sm text-[#16332C]/60">
                   <span className="font-bold">Mo:</span>
                   <span className="text-[#C5A059] font-black uppercase">Ruhetag</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#16332C]/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[#16332C]/40 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; {currentYear} RESTAURANT MAX. GENUSS PUR.
           </p>
           <div className="flex gap-10">
              <Link to="/impressum" className="text-[#16332C]/40 hover:text-[#C5A059] text-[10px] font-black uppercase tracking-widest transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-[#16332C]/40 hover:text-[#C5A059] text-[10px] font-black uppercase tracking-widest transition-colors">Datenschutz</Link>
           </div>
           <div className="flex items-center gap-3 text-[#16332C]/20 text-[10px] font-black uppercase tracking-widest group cursor-default">
              MIT <Heart className="w-4 h-4 text-[#C5A059] fill-current group-hover:scale-125 transition-transform" /> & LEIDENSCHAFT GEKOCHT
           </div>
        </div>
      </div>
    </footer>
  );
};

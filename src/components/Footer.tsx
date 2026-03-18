import { Coffee, Instagram, Facebook, Mail, MapPin, Phone, Heart, Star, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16332C] text-white py-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="space-y-8 col-span-1 lg:col-span-1">
             <Link to="/" className="flex items-center group gap-4">
              <div className="p-3 bg-[#C5A059] rounded-2xl transition-all duration-500 shadow-xl group-hover:rotate-12 group-hover:scale-110">
                 <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter leading-none">Café Mustermann</h2>
                <p className="text-[10px] uppercase font-black text-[#C5A059] tracking-[0.4em] leading-none mt-1">Seit 2009 in Musterhausen</p>
              </div>
            </Link>
            <p className="text-white/60 font-medium leading-relaxed max-w-sm">
              Wir bringen den besten Kaffee und die leckersten hausgemachten Kuchen direkt zu Ihnen nach Musterhausen. Genießen Sie die Auszeit.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#C5A059] hover:border-[#C5A059] transition-all duration-300"
                  aria-label={`Social Icon ${i + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#C5A059]">Quick Links</h3>
            <nav className="flex flex-col gap-4">
              {["Menü", "Über uns", "Galerie", "Reservierung", "Jobs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white/70 hover:text-[#C5A059] transition-colors font-bold flex items-center gap-2 group"
                >
                  <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity fill-current text-[#C5A059]" />
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#C5A059]">Kontakt & Lage</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C5A059] shrink-0" />
                <p className="text-white/70 font-bold">Musterstraße 123<br />12345 Musterhausen</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#C5A059] shrink-0" />
                <p className="text-white/70 font-bold">+49 123 456789</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#C5A059] shrink-0" />
                <p className="text-white/70 font-bold">hallo@cafe-mustermann.de</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#C5A059]">Newsletter</h3>
            <p className="text-white/70 font-medium leading-relaxed">
              Erhalten Sie Gutscheine und Neuigkeiten direkt in Ihr Postfach.
            </p>
            <div className="relative group">
               <input 
                type="email" 
                placeholder="Ihre Email Adresse" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all"
               />
               <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white/40 font-bold text-sm">
            <span>&copy; {currentYear} Café Mustermann</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Alle Rechte vorbehalten</span>
          </div>
          
          <div className="flex gap-8">
            <Link to="/impressum" className="text-sm font-bold text-white/40 hover:text-[#C5A059] transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-sm font-bold text-white/40 hover:text-[#C5A059] transition-colors">Datenschutz</Link>
            <Link to="/agb" className="text-sm font-bold text-white/40 hover:text-[#C5A059] transition-colors">AGB</Link>
          </div>

          <div className="flex items-center gap-2 text-white/40 font-bold text-sm">
            Mit <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> gemacht von Tech Buddy
          </div>
        </div>
      </div>
    </footer>
  );
};

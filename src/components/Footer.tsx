import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-cyan-600/5 rounded-full blur-[10rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 mb-20 pb-20 border-b border-white/10">
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-xl shadow-cyan-900/40">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter leading-none">
                  Podologie & <br /> Fußpflege
                </h3>
              </div>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed max-w-xs">
              Ihre Füße sind bei uns in den besten Händen. Staatlich geprüfte Kompetenz trifft auf echte Leidenschaft für Ihr Wohlbefinden.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-black uppercase tracking-[0.2em] text-cyan-500">Schnellzugriff</h4>
            <ul className="space-y-4">
              {[
                { name: "Startseite", href: "/" },
                { name: "Leistungen", href: "#leistungen" },
                { name: "Über mich", href: "#ueber-mich" },
                { name: "Preise", href: "#preise" },
                { name: "Öffnungszeiten", href: "#oeffnungszeiten" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 font-bold hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-black uppercase tracking-[0.2em] text-cyan-500">Kontakt</h4>
            <ul className="space-y-6">
              {[
                { icon: Phone, text: "01234 56789", sub: "Rufen Sie uns an", href: "tel:+49123456789" },
                { icon: Mail, text: "kontakt@fusspflege-mustermann.de", sub: "Schreiben Sie uns", href: "mailto:kontakt@fusspflege-mustermann.de" },
                { icon: MapPin, text: "Musterstraße 12, Musterhausen", sub: "Besuchen Sie uns", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="group flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-500 transition-all group-hover:bg-cyan-600 group-hover:text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-500 uppercase tracking-widest leading-none mb-1">{item.sub}</p>
                      <p className="text-slate-300 font-bold group-hover:text-white transition-colors">{item.text}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-black uppercase tracking-[0.2em] text-cyan-500">Newsletter</h4>
            <p className="text-slate-400 font-medium">Bleiben Sie informiert über Aktionen und Tipps zur Fußgesundheit.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="E-Mail Adresse" 
                className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-6 font-medium text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="absolute right-2 top-2 h-10 px-6 rounded-xl bg-cyan-600 text-white font-black text-xs uppercase tracking-widest hover:bg-cyan-700 transition-colors">
                Senden
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between gap-8 text-slate-500 font-bold text-sm uppercase tracking-widest">
          <p>© {currentYear} Podologie Max Mustermann. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <Link to="/impressum" className="hover:text-cyan-500 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-cyan-500 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

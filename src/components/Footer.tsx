import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUpRight, Home, ShieldCheck } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-32 pb-16 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-amber-500/20 rotate-3">
                <Home className="w-8 h-8 -rotate-3" />
              </div>
              <div>
                <h1 className="font-black text-2xl leading-none tracking-tight">
                  Max Mustermann
                </h1>
                <p className="text-[10px] text-amber-500 font-black uppercase tracking-[0.3em] mt-1.5">Immobilienagentur</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Ihr exklusiver Partner für hochwertige Immobilien in Musterhausen. Wir verbinden Tradition mit modernster Vermarktung.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-500 group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-amber-500 mb-10">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: 'Startseite', href: '#' },
                { name: 'Immobilien', href: '#immobilien' },
                { name: 'Leistungen', href: '#leistungen' },
                { name: 'Über mich', href: '#ueber-mich' },
                { name: 'Kontakt', href: '#kontakt' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-lg font-bold flex items-center group transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-amber-500 mb-10">Rechtliches</h4>
            <ul className="space-y-6">
              <li><Link to="/impressum" className="text-slate-400 hover:text-white text-lg font-bold transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-slate-400 hover:text-white text-lg font-bold transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-slate-400 hover:text-white text-lg font-bold transition-colors">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-amber-500 mb-10">Zertifizierungen</h4>
            <div className="space-y-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] group hover:border-amber-500/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <ShieldCheck className="w-8 h-8 text-amber-500" />
                  <p className="text-lg font-black text-white">Geprüfter Makler</p>
                </div>
                <p className="text-sm text-slate-500 font-bold leading-snug">Mitglied im Immobilienverband Deutschland (IVD).</p>
              </div>
              <div className="flex items-center gap-2 p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <p className="text-xs font-black text-amber-500 uppercase tracking-widest">Marktwert-Experte 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">
            © {currentYear} Max Mustermann Immobilien. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-slate-600">
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">EXZELLENZ IN IMMOBILIEN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

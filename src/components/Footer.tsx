import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <span className="font-black text-2xl">+</span>
              </div>
              <div>
                <h1 className="font-black text-xl leading-none uppercase tracking-tighter">
                  Praxis Mustermann
                </h1>
                <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.3em] mt-1">Medizin mit Herz</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Ihre akademische Lehrpraxis in Musterhausen. Seit über 15 Jahren Ihr Partner für Prävention, Diagnostik und Therapie.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-indigo-400 mb-8">Navigation</h4>
            <ul className="space-y-5">
              {['Startseite', 'Leistungen', 'Über uns', 'Sprechzeiten', 'Kontakt'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm font-bold flex items-center group">
                    {link}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-indigo-400 mb-8">Rechtliches</h4>
            <ul className="space-y-5">
              <li><Link to="/impressum" className="text-slate-400 hover:text-white text-sm font-bold">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-slate-400 hover:text-white text-sm font-bold">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-slate-400 hover:text-white text-sm font-bold">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-indigo-400 mb-8">Notfallservice</h4>
            <div className="space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-rose-500/50 transition-colors">
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">Ärztlicher Notdienst</p>
                <p className="text-rose-500 font-black text-2xl tracking-tighter">116 117</p>
              </div>
              <div className="p-6 bg-rose-600 rounded-3xl group shadow-lg shadow-rose-900/20">
                <p className="text-[10px] text-rose-100 uppercase font-black mb-2 tracking-widest">Rettungsdienst</p>
                <p className="text-white font-black text-2xl tracking-tighter">112</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {currentYear} Dr. med. Max Mustermann.
          </p>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
            EXZELLENZ IN DER HAUSARZTPRÄSENZ
          </p>
        </div>
      </div>
    </footer>
  );
};

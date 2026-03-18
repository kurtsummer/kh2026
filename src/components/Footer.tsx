import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUpRight, Plane, ShieldCheck, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-950 text-white pt-32 pb-16 overflow-hidden relative border-t-8 border-amber-400">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-sky-600 shadow-2xl rotate-6 group hover:rotate-12 transition-transform duration-500 border-4 border-sky-100">
                <Plane className="w-10 h-10 -rotate-6" />
              </div>
              <div>
                <h1 className="font-black text-3xl leading-none tracking-tighter italic">
                  Max Mustermann
                </h1>
                <p className="text-[10px] text-amber-400 font-black uppercase tracking-[0.4em] mt-1.5">Reisebüro Musterhausen</p>
              </div>
            </div>
            <p className="text-sky-200 text-lg leading-relaxed font-bold tracking-tight">
              Ihr kompetenter Partner für weltweite Reisen. Wir machen Ihre Träume zu unvergesslichen Erlebnissen. Seit über 15 Jahren in Musterhausen.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-sky-200 hover:text-white hover:border-amber-400 hover:bg-amber-400/20 transition-all duration-500 group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-amber-400 mb-10">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: 'Startseite', href: '#' },
                { name: 'Reiseziele', href: '#reiseziele' },
                { name: 'Leistungen', href: '#leistungen' },
                { name: 'Über uns', href: '#ueber-uns' },
                { name: 'Kontakt', href: '#kontakt' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sky-100 hover:text-amber-400 text-lg font-black flex items-center group transition-colors italic tracking-tighter">
                    {link.name}
                    <ArrowUpRight className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0 text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-amber-400 mb-10">Rechtliches</h4>
            <ul className="space-y-6">
              <li><Link to="/impressum" className="text-sky-100 hover:text-amber-400 text-lg font-black transition-colors italic tracking-tighter">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-sky-100 hover:text-amber-400 text-lg font-black transition-colors italic tracking-tighter">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-sky-100 hover:text-amber-400 text-lg font-black transition-colors italic tracking-tighter">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-amber-400 mb-10">Sicherheit</h4>
            <div className="space-y-6">
              <div className="p-8 bg-white/5 border-4 border-white/5 rounded-[2.5rem] group hover:border-amber-400/50 transition-all duration-500 shadow-inner">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-10 h-10 text-amber-400" />
                  <p className="text-xl font-black text-white italic tracking-tighter">Sicherungsschein</p>
                </div>
                <p className="text-sm text-sky-200 font-bold leading-relaxed">Ihre Reise ist bei uns zu 100% insolvenzversichert.</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-amber-400/10 rounded-[1.5rem] border-2 border-amber-400/20">
                <Globe className="w-6 h-6 text-amber-400" />
                <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.3em] leading-tight">Zertifizierter Travel-Expert 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sky-300 text-xs font-black uppercase tracking-[0.3em]">
            © {currentYear} Max Mustermann Reisebüro. Fernweh garantiert.
          </p>
          <div className="flex items-center gap-6 text-sky-400">
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">DISCOVER THE WORLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

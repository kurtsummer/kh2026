import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1F2A44] text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="bg-white/10 p-2 rounded-xl group-hover:bg-[#6D5EF5]/20 transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-[#6D5EF5]" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-extrabold text-xl tracking-tight text-white">AI Marketing</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6D5EF5]">Professional</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              KI-Marketing für KMU — verständlich, persönlich und professionell umgesetzt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Leistungen</h4>
            <ul className="space-y-4">
              {["KI-Beratung", "Social Media", "Webseiten", "Automatisierung"].map((item) => (
                <li key={item}>
                  <a href="#leistungen" className="text-slate-400 hover:text-[#6D5EF5] text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Mail className="w-4 h-4 text-[#6D5EF5]" />
                <a href="mailto:hallo@ai-marketing-pmu.at" className="hover:text-white transition-colors">
                  hallo@ai-marketing-pmu.at
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#6D5EF5]" />
                <span>Steiermark, Österreich</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                <Globe className="w-4 h-4 text-[#6D5EF5]" />
                <span>www.ai-marketing-pmu.at</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Rechtliches</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <Link to="/impressum" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#6D5EF5]/20 transition-all text-slate-300 hover:text-[#6D5EF5]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} AI Marketing Professional. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Verfügbar für Projekte 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

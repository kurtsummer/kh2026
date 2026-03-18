import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                <span className="font-bold text-xl">+</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-teal-900 leading-none">
                  Praxis Mustermann
                </h1>
                <p className="text-xs text-teal-700 font-medium">Hausarztpraxis</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ihre Praxis für Allgemeinmedizin in Musterhausen. Wir begleiten Sie und Ihre Familie 
              mit Kompetenz und Herz durch alle Lebensphasen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-teal-950 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-teal-600 text-sm">Startseite</a></li>
              <li><a href="#leistungen" className="text-slate-500 hover:text-teal-600 text-sm">Leistungen</a></li>
              <li><a href="#ueber-uns" className="text-slate-500 hover:text-teal-600 text-sm">Über uns</a></li>
              <li><a href="#sprechzeiten" className="text-slate-500 hover:text-teal-600 text-sm">Sprechzeiten</a></li>
              <li><a href="#kontakt" className="text-slate-500 hover:text-teal-600 text-sm">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-teal-950 mb-6">Rechtliches</h4>
            <ul className="space-y-4">
              <li><Link to="/impressum" className="text-slate-500 hover:text-teal-600 text-sm">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-slate-500 hover:text-teal-600 text-sm">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-slate-500 hover:text-teal-600 text-sm">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-teal-950 mb-6">Notfall</h4>
            <p className="text-slate-500 text-sm mb-4">
              Bei akuten Notfällen außerhalb unserer Öffnungszeiten:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white border border-rose-100 rounded-xl">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Bereitschaftsdienst</p>
                <p className="text-rose-600 font-bold">116 117</p>
              </div>
              <div className="p-3 bg-white border border-rose-100 rounded-xl">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Notruf</p>
                <p className="text-rose-600 font-bold">112</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Hausarztpraxis Max Mustermann. Alle Rechte vorbehalten.
          </p>
          <p className="text-slate-400 text-xs">
            Design & Umsetzung durch Tech Buddy
          </p>
        </div>
      </div>
    </footer>
  );
};

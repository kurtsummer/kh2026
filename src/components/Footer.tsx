import { Link } from "react-router-dom";
import { Music2, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-card text-white pt-20 pb-10">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Karl-Heinz Logo" className="h-10 w-auto" />
              <span className="font-serif text-2xl font-bold text-primary">Karl-Heinz</span>
            </Link>

            <p className="text-white/60 leading-relaxed max-w-xs">
              Sympathische Live-Musik für Ihre besonderen Momente. Hits, Evergreens und deutsche Klassiker mit Herz und Charme.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quicklinks</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-primary transition-colors">Über Karl-Heinz</a></li>
              <li><a href="#occasions" className="hover:text-primary transition-colors">Anlässe</a></li>
              <li><a href="#repertoire" className="hover:text-primary transition-colors">Songliste</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt & Buchung</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>Großraum Süddeutschland</li>
              <li>hallo@karl-heinz-musik.de</li>
              <li>+49 (0) 123 456 789</li>
              <li>Mo - So: 09:00 - 20:00 Uhr</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Musik-Service</h4>
            <p className="text-white/60 mb-6">
              Abonnieren Sie unseren Newsletter für Tipps zur Hochzeitsplanung und Musik-Trends.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-Mail"
                className="bg-white/5 border-white/10 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary dark:bg-background/20"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">

                <Music2 size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {currentYear} Karl-Heinz Live-Musik. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-white/40 text-sm">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

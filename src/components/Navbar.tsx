import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", href: "/" },
    { name: "Leistungen", href: isHome ? "#leistungen" : "/#leistungen" },
    { name: "Über mich", href: isHome ? "#ueber-mich" : "/#ueber-mich" },
    { name: "Preise", href: isHome ? "#preise" : "/#preise" },
    { name: "Kontakt", href: isHome ? "#kontakt" : "/#kontakt" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#") && isHome) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4",
        isScrolled || !isHome
          ? "bg-white/90 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className={cn(
            "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
            isScrolled || !isHome ? "bg-cyan-600 text-white shadow-lg shadow-cyan-100" : "bg-white text-cyan-600 shadow-xl"
          )}>
            <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </div>
          <div>
            <h1 className={cn(
              "font-bold text-lg md:text-xl tracking-tight leading-none transition-colors",
              isScrolled || !isHome ? "text-slate-900" : "text-white"
            )}>
              Podologie Mustermann
            </h1>
            <p className={cn(
              "text-[10px] font-semibold uppercase tracking-widest transition-colors mt-0.5",
              isScrolled || !isHome ? "text-cyan-600" : "text-cyan-100"
            )}>
              Max Mustermann • Musterhausen
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("#") && isHome ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-all hover:text-cyan-600",
                  isScrolled || !isHome ? "text-slate-600" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-cyan-600",
                  isScrolled || !isHome ? "text-slate-600" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            className={cn(
              "rounded-full px-6 h-11 font-semibold transition-all shadow-md active:scale-95",
              isScrolled || !isHome
                ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-100"
                : "bg-white hover:bg-slate-50 text-cyan-600 shadow-white/10"
            )}
            onClick={() => {
              const element = document.getElementById('kontakt');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = "/#kontakt";
              }
            }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Termin vereinbaren
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-all active:scale-95",
            isScrolled || !isHome ? "text-slate-900 bg-slate-100" : "text-white bg-white/20 backdrop-blur-md"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-50 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 rounded-b-3xl">
          {navLinks.map((link) => (
            link.href.startsWith("#") && isHome ? (
              <button
                key={link.name}
                className="text-lg font-semibold text-slate-800 hover:text-cyan-600 transition-colors py-2 border-b border-slate-50 text-left"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-semibold text-slate-800 hover:text-cyan-600 transition-colors py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl w-full py-6 text-lg font-semibold gap-3 shadow-lg shadow-cyan-100 transition-all mt-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('kontakt');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = "/#kontakt";
              }
            }}
          >
            <Calendar className="w-5 h-5" />
            Termin buchen
          </Button>
          <a href="tel:+49123456789" className="flex items-center justify-center gap-2 text-cyan-600 font-bold py-2">
            <Phone className="w-4 h-4" />
            01234 56789
          </a>
        </div>
      )}
    </nav>
  );
};

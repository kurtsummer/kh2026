import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", href: "#" },
    { name: "Immobilien", href: "#immobilien" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über mich", href: "#ueber-mich" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            isScrolled ? "bg-slate-900 text-white" : "bg-white text-slate-900 shadow-lg"
          )}>
            <Home className="w-6 h-6" />
          </div>
          <div>
            <h1 className={cn(
              "font-bold text-xl leading-none transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              Max Mustermann
            </h1>
            <p className={cn(
              "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
              isScrolled ? "text-amber-600" : "text-amber-400"
            )}>
              Immobilienagentur
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-amber-500",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            className={cn(
              "rounded-full px-6 gap-2 transition-all shadow-lg",
              isScrolled 
                ? "bg-slate-900 hover:bg-slate-800 text-white" 
                : "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20"
            )}
            onClick={() => {
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Phone className="w-4 h-4" />
            Beratung anfordern
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10 backdrop-blur-sm"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-50 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-slate-900 hover:text-amber-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full w-full py-6 text-lg gap-2 shadow-xl shadow-amber-500/20"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Phone className="w-5 h-5" />
            Beratung anfordern
          </Button>
        </div>
      )}
    </nav>
  );
};

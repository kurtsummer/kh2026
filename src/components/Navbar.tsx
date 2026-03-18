import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    { name: "Über mich", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Bewertungen", href: "#testimonials" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-xl border-b border-[#2D3436]/5"
          : "bg-transparent py-8"
      }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group gap-3" aria-label="Max Mustermann Fotografie Homepage">
          <div className={`p-2.5 rounded-2xl transition-all duration-300 shadow-sm ${isScrolled ? "bg-[#2D3436]" : "bg-white/20 backdrop-blur-sm shadow-inner group-hover:bg-[#2D3436]"}`}>
             <Camera className={`w-7 h-7 transition-colors duration-300 ${isScrolled ? "text-white" : "text-[#2D3436] group-hover:text-white"}`} />
          </div>
          <div>
            <h1 className={`text-xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-[#2D3436]" : "text-[#2D3436]"}`}>Max Mustermann</h1>
            <p className="text-[9px] uppercase font-bold text-[#C5A059] tracking-[0.3em] leading-none mt-0.5">Fotografie</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 pr-10 border-r border-[#2D3436]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/${link.href}`}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-[#C5A059] relative group ${
                  isScrolled ? "text-[#2D3436]" : "text-[#2D3436]"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <Button className="bg-[#2D3436] hover:bg-[#3D4446] text-white rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all">
            Shooting anfragen
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#2D3436] p-2 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#2D3436]/5 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/${link.href}`}
              className="text-lg font-bold text-[#2D3436] uppercase tracking-widest border-b border-gray-100 pb-4 last:border-0 hover:text-[#C5A059] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#2D3436] hover:bg-[#3D4446] text-white rounded-2xl w-full py-8 text-lg font-bold uppercase tracking-widest shadow-xl">
            Shooting anfragen
          </Button>
        </div>
      )}
    </nav>
  );
};

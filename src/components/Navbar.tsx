import { useState, useEffect } from "react";
import { Menu, X, Camera, Sparkles, Smile } from "lucide-react";
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
        <Link to="/" className="flex items-center group gap-4" aria-label="Max Macht Fotos Homepage">
          <div className={`p-3 rounded-2xl transition-all duration-500 shadow-xl group-hover:rotate-12 group-hover:scale-110 ${isScrolled ? "bg-[#FF7E67]" : "bg-white shadow-inner group-hover:bg-[#FF7E67]"}`}>
             <Camera className={`w-7 h-7 transition-colors duration-500 ${isScrolled ? "text-white" : "text-[#FF7E67] group-hover:text-white"}`} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter leading-none text-[#2D3436]">Max Macht Fotos</h1>
            <p className="text-[10px] uppercase font-black text-[#45B7AF] tracking-[0.4em] leading-none mt-1">Gute Laune Studio</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/${link.href}`}
                className="text-xs font-black uppercase tracking-widest text-[#2D3436] hover:text-[#FF7E67] transition-all relative group flex items-center gap-1.5"
              >
                {link.name}
                <Sparkles className="w-3 h-3 text-[#FFD93D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          <Button className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-full px-10 py-7 text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#FF7E67]/20 border-none transition-all hover:scale-105 active:scale-95">
            Lass uns lachen!
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#2D3436] p-3 bg-white/50 rounded-2xl backdrop-blur-sm shadow-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#2D3436]/5 p-10 flex flex-col gap-8 shadow-2xl animate-in slide-in-from-top-6 duration-500 rounded-b-[48px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/${link.href}`}
              className="text-2xl font-black text-[#2D3436] uppercase tracking-widest border-b-4 border-[#FAF9F6] pb-6 last:border-0 hover:text-[#FF7E67] transition-all flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <Smile className="text-[#FFD93D] w-8 h-8" />
            </a>
          ))}
          <Button className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-[32px] w-full py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#FF7E67]/30 border-none mt-4">
            Lass uns lachen!
          </Button>
        </div>
      )}
    </nav>
  );
};

import { useState, useEffect } from "react";
import { Menu, X, Coffee, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

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
    { name: "Karte", href: "#menu" },
    { name: "Über uns", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Reservierung", href: "#reservation" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDF8F1]/95 dark:bg-[#16332C]/95 backdrop-blur-md py-4 shadow-xl border-b border-[#16332C]/5 dark:border-white/10"
          : "bg-transparent py-8"
      }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group gap-4" aria-label="Café Mustermann Homepage">
          <div className={`p-3 rounded-2xl transition-all duration-500 shadow-xl group-hover:rotate-12 group-hover:scale-110 ${isScrolled ? "bg-[#C5A059]" : "bg-white dark:bg-zinc-800 shadow-inner group-hover:bg-[#C5A059]"}`}>
             <Coffee className={`w-7 h-7 transition-colors duration-500 ${isScrolled ? "text-white" : "text-[#C5A059] group-hover:text-white"}`} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter leading-none text-[#16332C] dark:text-[#FDF8F1]">Café Mustermann</h1>
            <p className="text-[10px] uppercase font-black text-[#C5A059] tracking-[0.4em] leading-none mt-1">Kaffee & Kuchen in Musterhausen</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-[#16332C] dark:text-[#FDF8F1]/80 dark:hover:text-[#C5A059] hover:text-[#C5A059] transition-all relative group flex items-center gap-1.5"
              >
                {link.name}
                <Star className="w-3 h-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="bg-[#16332C] dark:bg-[#C5A059] hover:bg-[#1E3A34] dark:hover:bg-[#D4B36D] text-white dark:text-[#16332C] rounded-full px-10 py-7 text-sm font-black uppercase tracking-widest shadow-2xl shadow-[#16332C]/20 border-none transition-all hover:scale-105 active:scale-95">
              <a href="#reservation">Tisch reservieren</a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-[#16332C] dark:text-[#FDF8F1] p-3 bg-white/50 dark:bg-zinc-800/50 rounded-2xl backdrop-blur-sm shadow-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FDF8F1] dark:bg-[#16332C] border-b border-[#16332C]/5 dark:border-white/10 p-10 flex flex-col gap-8 shadow-2xl animate-in slide-in-from-top-6 duration-500 rounded-b-[48px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black text-[#16332C] dark:text-[#FDF8F1] uppercase tracking-widest border-b-4 border-[#FAF9F6] dark:border-white/5 pb-6 last:border-0 hover:text-[#C5A059] transition-all flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <Heart className="text-[#C5A059] w-8 h-8 fill-current" />
            </a>
          ))}
          <Button asChild className="bg-[#16332C] dark:bg-[#C5A059] hover:bg-[#1E3A34] dark:hover:bg-[#D4B36D] text-white dark:text-[#16332C] rounded-[32px] w-full py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#16332C]/30 border-none mt-4">
            <a href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>Tisch reservieren</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

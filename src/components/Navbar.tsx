import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
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
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Sprechzeiten", href: "#sprechzeiten" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center text-white">
            <span className="font-bold text-xl">+</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-slate-900 leading-none">
              Praxis Mustermann
            </h1>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Hausarztpraxis</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 gap-2 shadow-lg shadow-indigo-200"
            onClick={() => {
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Calendar className="w-4 h-4" />
            Termin buchen
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-50 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-full gap-2 shadow-lg"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Calendar className="w-4 h-4" />
            Termin buchen
          </Button>
        </div>
      )}
    </nav>
  );
};

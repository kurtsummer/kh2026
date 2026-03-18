import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Search, Phone, Palmtree } from "lucide-react";
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
    { name: "Reiseziele", href: "#reiseziele" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12",
            isScrolled ? "bg-sky-600 text-white shadow-lg shadow-sky-200" : "bg-white text-sky-600 shadow-xl"
          )}>
            <Plane className="w-6 h-6" />
          </div>
          <div>
            <h1 className={cn(
              "font-black text-2xl tracking-tighter leading-none transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              Max Mustermann
            </h1>
            <p className={cn(
              "text-[10px] font-black uppercase tracking-[0.3em] transition-colors",
              isScrolled ? "text-sky-600" : "text-sky-300"
            )}>
              Reisebüro Musterhausen
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95",
                isScrolled ? "text-slate-600 hover:text-sky-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            className={cn(
              "rounded-full px-8 h-12 font-bold transition-all shadow-xl hover:shadow-2xl active:scale-95",
              isScrolled
                ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200"
                : "bg-white hover:bg-slate-50 text-sky-600 shadow-white/20"
            )}
            onClick={() => {
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Urlaub planen
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-3 rounded-2xl transition-all active:scale-95",
            isScrolled ? "text-slate-900 bg-slate-100 shadow-inner" : "text-white bg-white/10 backdrop-blur-md"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-slate-50 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-500 rounded-b-[3rem]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black text-slate-900 hover:text-sky-600 transition-colors flex items-center justify-between group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <Palmtree className="w-6 h-6 text-sky-200 group-hover:text-sky-500 transition-colors" />
            </a>
          ))}
          <Button
            className="bg-sky-600 hover:bg-sky-700 text-white rounded-[2rem] w-full py-8 text-xl font-black gap-3 shadow-2xl shadow-sky-200 transition-all active:scale-95"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Phone className="w-6 h-6" />
            Urlaub planen
          </Button>
        </div>
      )}
    </nav>
  );
};

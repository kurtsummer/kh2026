import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Phone, Palmtree } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

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
    { name: "Reiseziele", href: isHome ? "#reiseziele" : "/reiseziele" },
    { name: "Leistungen", href: isHome ? "#leistungen" : "/#leistungen" },
    { name: "Über uns", href: isHome ? "#ueber-uns" : "/#ueber-uns" },
    { name: "Kontakt", href: isHome ? "#kontakt" : "/#kontakt" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled || !isHome
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 shadow-xl",
            isScrolled || !isHome 
              ? "bg-sky-600 text-white shadow-sky-200 dark:shadow-sky-900/20" 
              : "bg-white text-sky-600"
          )}>
            <Plane className="w-6 h-6" />
          </div>
          <div>
            <h1 className={cn(
              "font-black text-2xl tracking-tighter leading-none transition-colors",
              isScrolled || !isHome ? "text-slate-900 dark:text-white" : "text-white"
            )}>
              Max Mustermann
            </h1>
            <p className={cn(
              "text-[10px] font-black uppercase tracking-[0.3em] transition-colors",
              isScrolled || !isHome ? "text-sky-600 dark:text-sky-400" : "text-sky-300"
            )}>
              Reisebüro Musterhausen
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95",
                  isScrolled || !isHome ? "text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95",
                  isScrolled || !isHome ? "text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <ThemeToggle />

          <Button
            className={cn(
              "rounded-full px-8 h-12 font-bold transition-all shadow-xl hover:shadow-2xl active:scale-95",
              isScrolled || !isHome 
                ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200 dark:shadow-sky-900/40" 
                : "bg-white hover:bg-slate-50 text-sky-600 shadow-white/20"
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
            <Phone className="w-4 h-4 mr-2" />
            Urlaub planen
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className={cn(
              "p-3 rounded-2xl transition-all active:scale-95",
              isScrolled || !isHome 
                ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 shadow-inner" 
                : "text-white bg-white/10 backdrop-blur-md"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-t border-slate-50 dark:border-slate-800 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-500 rounded-b-[3rem]">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <button
                key={link.name}
                className="text-2xl font-black text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-between group text-left"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
                <Palmtree className="w-6 h-6 text-sky-200 group-hover:text-sky-500 transition-colors" />
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-black text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <Palmtree className="w-6 h-6 text-sky-200 group-hover:text-sky-500 transition-colors" />
              </Link>
            )
          ))}
          <Button
            className="bg-sky-600 hover:bg-sky-700 text-white rounded-[2rem] w-full py-8 text-xl font-black gap-3 shadow-2xl shadow-sky-200 dark:shadow-sky-900/40 transition-all active:scale-95"
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
            <Phone className="w-6 h-6" />
            Urlaub planen
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

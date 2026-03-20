import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", href: "/" },
    { name: "Über uns", href: "#about" },
    { name: "Anlässe", href: "#occasions" },
    { name: "Repertoire", href: "#repertoire" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 dark:bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Karl-Heinz Logo" className="h-12 w-auto" />
              <span className="font-serif text-2xl font-bold text-secondary dark:text-primary hidden sm:block">Karl-Heinz</span>
            </Link>

          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text dark:text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <a href="#contact">Jetzt anfragen</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text dark:text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background dark:bg-card border-b border-primary/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-text dark:text-foreground hover:text-primary hover:bg-primary/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="px-3 py-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact" onClick={() => setIsOpen(false)}>Jetzt anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Beer, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über uns', href: '#about' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-[#FFFDF5]/90 backdrop-blur-md shadow-sm border-b border-[#2D241E]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#E6B325] p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Beer className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2D241E]">
            Mustermann's <span className="text-[#E6B325]">Braustube</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#2D241E] font-medium hover:text-[#E6B325] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#2D241E] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E6B325] transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Tisch reservieren
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#2D241E]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFFDF5] border-b border-[#2D241E]/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-[#2D241E]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#E6B325] text-white text-center px-6 py-3 rounded-xl font-bold"
          >
            Tisch reservieren
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

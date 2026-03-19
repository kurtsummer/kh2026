import React, { useState, useEffect } from 'react';
import { Beer, Menu as MenuIcon, X } from 'lucide-react';

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
    { name: 'Unsere Story', href: '#about' },
    { name: 'Speisen & Getränke', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'bg-[#1A0F0A]/95 backdrop-blur-md shadow-2xl border-b border-[#D48806]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-[#D48806] p-2.5 rounded-lg group-hover:rotate-12 transition-all shadow-[0_0_20px_rgba(212,136,6,0.3)]">
            <Beer className="text-[#1A0F0A] w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">
              MUSTERMANN'S
            </span>
            <span className="text-sm font-bold tracking-[0.2em] text-[#D48806] leading-none mt-1">
              BRAUSTUBE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[#F5E6D3]/80 font-bold text-sm uppercase tracking-widest hover:text-[#D48806] transition-colors relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D48806] transition-all group-hover/link:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#D48806] text-[#1A0F0A] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#F5E6D3] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Reservieren
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#F5E6D3]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1A0F0A] border-b border-[#D48806]/20 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-[#F5E6D3] uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#D48806] text-[#1A0F0A] text-center px-6 py-4 rounded-sm font-black uppercase tracking-widest"
          >
            Tisch reservieren
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

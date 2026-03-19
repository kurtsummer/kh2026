import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Menu } from '../components/Menu';
import Gallery from '../components/Gallery';
import { Events } from '../components/Events';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] dark:bg-[#0F0A08] text-[#2D241E] dark:text-[#F5E6D3] font-serif transition-colors duration-500 selection:bg-[#D48806] selection:text-white">
      {/* Texture Overlay for the whole site */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

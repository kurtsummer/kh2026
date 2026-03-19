import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Menu } from '../components/Menu';
import { Events } from '../components/Events';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#2D241E] font-sans selection:bg-[#E6B325] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

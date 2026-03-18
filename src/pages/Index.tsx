import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F1] dark:bg-[#0A1A17] text-[#16332C] dark:text-[#FDF8F1] font-sans selection:bg-[#C5A059] selection:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DestinationsSection } from "@/components/DestinationsSection";
import { Services } from "@/components/ServicesSection";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { OpeningHours } from "@/components/OpeningHours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />

        <DestinationsSection />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

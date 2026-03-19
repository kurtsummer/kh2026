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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-100 dark:selection:bg-sky-900/50 selection:text-sky-900 dark:selection:text-sky-100 transition-colors duration-500 overflow-x-hidden">
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

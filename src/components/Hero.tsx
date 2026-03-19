import { Button } from "./ui/button";
import { Music, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-ivory z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="/logo.png"
            alt="Karl-Heinz Logo"
            className="w-64 md:w-80 lg:w-[450px] h-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-secondary leading-tight">

            Karl-Heinz – Hits & Evergreens <br className="hidden md:block" />

            <span className="text-primary italic">für Hochzeiten und Feiern</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Live-Musik mit Charme und Herz für kleine Hochzeiten, Geburtstage und besondere Momente. 
            Wir bringen die Evergreens, die jeder liebt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Termin anfragen
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/5 transition-all duration-300">
              <a href="#repertoire">
                <Music className="mr-2 h-5 w-5" />
                Songliste ansehen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;

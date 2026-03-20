import { Button } from "./ui/button";
import { Music, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Karl-Heinz Duo live" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Theme-aware overlay */}
        <div className="absolute inset-0 bg-secondary/60 dark:bg-black/80 backdrop-blur-[1px] transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 dark:from-background dark:via-transparent dark:to-black/40 transition-colors duration-500" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img 
            src="/logo.png" 
            alt="Karl-Heinz Logo" 
            className="w-64 md:w-80 lg:w-[450px] h-auto mb-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white dark:text-primary leading-tight drop-shadow-lg">
            Karl-Heinz – Hits & Evergreens <br className="hidden md:block" />
            <span className="text-primary italic dark:text-white">für Hochzeiten und Feiern</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 dark:text-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-sm">
            Live-Musik mit Charme und Herz für kleine Hochzeiten, Geburtstage und besondere Momente. 
            Wir bringen die Evergreens, die jeder liebt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_rgba(201,161,59,0.4)] hover:scale-105 transition-all duration-300">
              <a href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Termin anfragen
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-primary/50 text-white dark:text-primary-foreground hover:bg-white/10 hover:border-primary backdrop-blur-sm transition-all duration-300">
              <a href="#repertoire">
                <Music className="mr-2 h-5 w-5" />
                Songliste ansehen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
        <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;

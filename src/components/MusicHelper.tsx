import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles, X } from "lucide-react";
import { REPERTOIRE } from "@/data/repertoire";

const MusicHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { id: "romantic", label: "Romantisch & Gefühlvoll", icon: "❤️" },
    { id: "party", label: "Ausgelassen & Tanzbar", icon: "💃" },
    { id: "classic", label: "Gediegen & Klassisch", icon: "🍷" },
    { id: "singalong", label: "Zum Mitsingen", icon: "🎤" },
  ];

  const getSuggestions = (selectedMood: string) => {
    switch (selectedMood) {
      case "romantic":
        return REPERTOIRE.filter(s => s.category === "Romantik").slice(0, 3);
      case "party":
        return REPERTOIRE.filter(s => s.category === "Stimmung & Party").slice(0, 3);
      case "classic":
        return REPERTOIRE.filter(s => s.category === "Internationale Klassiker").slice(0, 3);
      case "singalong":
        return REPERTOIRE.filter(s => s.category === "Evergreens").slice(0, 3);
      default:
        return [];
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white dark:bg-card rounded-3xl shadow-2xl p-6 w-[320px] mb-4 border border-primary/20"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-serif font-bold text-secondary dark:text-primary flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Musik-Helfer
              </h4>

              <button onClick={() => setIsOpen(false)} className="text-text/40 hover:text-text">
                <X size={20} />
              </button>
            </div>

            {!mood ? (
              <div className="space-y-3">
                <p className="text-sm text-text/70 mb-4">Welche Stimmung wünschen Sie sich für Ihre Feier?</p>
                {moods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMood(m.id)}
                    className="w-full text-left p-3 rounded-xl border border-primary/10 hover:border-primary hover:bg-primary/5 transition-all text-sm flex items-center gap-3"
                  >
                    <span>{m.icon}</span>
                    {m.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-text/70">Hier sind passende Empfehlungen von Karl-Heinz:</p>
                <div className="space-y-2">
                  {getSuggestions(mood).map((song) => (
                    <div key={song.title} className="p-2 rounded-lg bg-ivory text-xs border border-primary/5">
                      <span className="font-bold text-secondary">{song.title}</span>
                      <span className="block text-text/60 italic">{song.artist}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-full text-primary hover:text-primary/80 text-xs"
                  onClick={() => setMood(null)}
                >
                  Zurück zur Auswahl
                </Button>
                <Button 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.hash = "contact";
                  }}
                >
                  Termin anfragen
                </Button>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
      >
        <Sparkles size={28} />
      </motion.button>
    </div>
  );
};

export default MusicHelper;

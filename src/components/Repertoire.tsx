import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REPERTOIRE, Song } from "@/data/repertoire";
import { Button } from "./ui/button";
import { Search, Music2 } from "lucide-react";
import { Input } from "./ui/input";

const categories = ["Alle", "Evergreens", "Internationale Klassiker", "Romantik", "Stimmung & Party"];

const Repertoire = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = REPERTOIRE.filter(song => {
    const matchesCategory = activeCategory === "Alle" || song.category === activeCategory;
    const matchesSearch =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="repertoire" className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-secondary font-serif">Unser Repertoire</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto mb-10">
            Ein Auszug aus unseren beliebtesten Songs. Wir erweitern unser Repertoire ständig und gehen gerne auf Ihre individuellen Wünsche ein.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40 h-5 w-5" />
            <Input
              type="text"
              placeholder="Titel oder Interpret suchen..."
              className="pl-10 h-12 border-primary/20 focus-visible:ring-primary rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSongs.map((song, index) => (
              <motion.div
                key={`${song.title}-${song.artist}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-ivory/50 transition-all duration-300 shadow-sm flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <Music2 size={20} />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-secondary truncate">{song.title}</h4>
                  <p className="text-sm text-text/60 truncate">{song.artist}</p>
                  <span className="text-[10px] uppercase tracking-wider text-primary/70 font-bold mt-1 block">
                    {song.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSongs.length === 0 && (
          <div className="text-center py-20 bg-ivory/30 rounded-3xl border-2 border-dashed border-primary/10">
            <p className="text-text/50 italic">Keine passenden Songs gefunden. Fragen Sie uns einfach nach Ihrem Wunschtitel!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Repertoire;

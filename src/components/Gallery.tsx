import { motion } from "framer-motion";

const images = [
  {
    url: "/hero-bg.png",
    title: "Live Atmosphäre"
  },
  {
    url: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=800&q=80",
    title: "Gitarre & Gesang"
  },

  {
    url: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&w=800&q=80",
    title: "Stimmungsvolles Licht"
  },
  {
    url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    title: "Kleine Hochzeiten"
  }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Galerie</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-secondary dark:text-primary mb-6">Eindrücke unserer Auftritte</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-primary/5 shadow-lg bg-primary/5"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold tracking-wide">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

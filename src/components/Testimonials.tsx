import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sabine & Thomas",
    event: "Hochzeit",
    text: "Karl-Heinz hat unsere kleine Gartenhochzeit musikalisch perfekt begleitet. Die Evergreens kamen bei allen Generationen super an!",
    rating: 5
  },
  {
    name: "Familie Müller",
    event: "70. Geburtstag",
    text: "Unglaublich sympathisch und bodenständig. Genau die richtige Mischung aus Unterhaltung und musikalischer Qualität.",
    rating: 5
  },
  {
    name: "Erich K.",
    event: "Firmenjubiläum",
    text: "Hervorragendes Repertoire! Es war für jeden etwas dabei und die Stimmung war den ganzen Abend über fantastisch.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Referenzen</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-secondary dark:text-primary mb-6">Was unsere Kunden sagen</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-primary/10 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-12 h-12" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-text dark:text-foreground/80 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>

              <div>
                <span className="block font-bold text-secondary dark:text-primary">{t.name}</span>
                <span className="text-sm text-text/50 dark:text-foreground/50">{t.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { Heart, Gift, PartyPopper, Users, Star } from "lucide-react";

const occasions = [
  {
    title: "Kleine Hochzeiten",
    description: "Stilvolle musikalische Untermalung für Ihre Trauung, den Sektempfang oder die anschließende Feier im engsten Kreis.",
    icon: Heart,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Geburtstagsfeiern",
    description: "Von gemütlich bis ausgelassen: Wir spielen die Hits, die das Geburtstagskind und seine Gäste glücklich machen.",
    icon: PartyPopper,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Jubiläen",
    description: "Ehrentage verdienen einen besonderen Rahmen. Wir sorgen für die passende Nostalgie und festliche Stimmung.",
    icon: Star,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Familienfeiern",
    description: "Musik verbindet Generationen. Unser Repertoire bietet für Jung und Alt die passenden Klassiker.",
    icon: Users,
    color: "bg-green-100 text-green-800",
  },
];

const Occasions = () => {
  return (
    <section id="occasions" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-secondary dark:text-primary">Für jeden Anlass die richtige Note</h2>
          <p className="text-lg text-text/80 dark:text-foreground/80">

            Egal ob im kleinen Wohnzimmer oder im festlichen Saal – wir bringen die Atmosphäre, die Sie sich wünschen. 
            Besonders spezialisiert sind wir auf private Feiern mit persönlichem Charakter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/5 flex flex-col items-center text-center"
            >

              <div className={`p-4 rounded-full mb-6 ${item.color}`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary dark:text-primary">{item.title}</h3>
              <p className="text-text/70 dark:text-foreground/70 leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Occasions;

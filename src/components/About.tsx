import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Über Karl-Heinz</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-secondary">
              Musik, die verbindet <br className="hidden sm:block" /> und Erinnerungen schafft
            </h3>
            <div className="space-y-6 text-text text-lg leading-relaxed">
              <p>
                Hinter Karl-Heinz verbirgt sich ein eingespieltes Musikduo, das Ihre Feier mit Herzblut und Leidenschaft begleitet. 
                Uns geht es nicht um die große Show-Bühne, sondern um die echten Momente – dort, wo gelacht, getanzt und gemeinsam gesungen wird.
              </p>
              <p>
                Mit Gitarre, Keyboard und zweistimmigem Gesang interpretieren wir die großen Evergreens und Hits der letzten Jahrzehnte. 
                Ob stilvolle Hintergrundmusik zum Dinner oder stimmungsvolle Unterhaltung zum Tanzen: Wir passen uns Ihrem Anlass an.
              </p>
              <p>
                Bodenständigkeit, Zuverlässigkeit und eine Prise Charme – das ist es, was Karl-Heinz ausmacht. Wir freuen uns darauf, 
                Teil Ihrer Geschichte zu werden.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="p-6 bg-card rounded-2xl border-l-4 border-primary shadow-sm">
                <span className="block text-3xl font-serif font-bold text-secondary dark:text-primary">10+</span>
                <span className="text-sm text-text/70 dark:text-foreground/70 uppercase tracking-wider font-semibold">Jahre Erfahrung</span>
              </div>
              <div className="p-6 bg-card rounded-2xl border-l-4 border-primary shadow-sm">
                <span className="block text-3xl font-serif font-bold text-secondary dark:text-primary">100+</span>
                <span className="text-sm text-text/70 dark:text-foreground/70 uppercase tracking-wider font-semibold">Lieder im Repertoire</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

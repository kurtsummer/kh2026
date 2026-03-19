import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Live Musik Atmosphäre" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-ivory rounded-xl border-l-4 border-primary">
                <span className="block text-2xl font-serif font-bold text-secondary">10+</span>
                <span className="text-sm text-text/70">Jahre Erfahrung</span>
              </div>
              <div className="p-4 bg-ivory rounded-xl border-l-4 border-primary">
                <span className="block text-2xl font-serif font-bold text-secondary">100+</span>
                <span className="text-sm text-text/70">Lieder im Repertoire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

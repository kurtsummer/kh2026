import { Award, Globe, Heart, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="ueber-uns" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-[16px] border-white dark:border-slate-800 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                  alt="Team im Reisebüro"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-sky-600 dark:bg-sky-500 p-12 rounded-[3rem] shadow-2xl max-w-[320px] hidden md:block z-20 group hover:bg-amber-500 transition-colors duration-500 border-8 border-white dark:border-slate-800">
                <p className="text-white font-black text-6xl mb-3 italic group-hover:scale-110 transition-transform">15+</p>
                <p className="text-white/80 group-hover:text-white text-sm font-black uppercase tracking-[0.2em] leading-relaxed transition-colors">Jahre Reise-Leidenschaft in Musterhausen</p>
              </div>
              {/* Decorative Blur */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] -z-10" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                Willkommen bei Max Mustermann
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                Ihre Träume <br />
                <span className="text-sky-600 dark:text-sky-400 italic">unser Ziel</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xl font-bold leading-relaxed">
                Seit über 15 Jahren verwandelt Max Mustermann Urlaubswünsche in unvergessliche Erlebnisse. Als inhabergeführtes Reisebüro in Musterhausen legen wir Wert auf persönlichen Service und echte Geheimtipps.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-sky-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 group-hover:bg-sky-600 dark:group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xl mb-2">Weltweite Expertise</h4>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-bold leading-relaxed">Wir kennen die schönsten Ecken der Welt aus eigener Erfahrung.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-sky-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xl mb-2">Persönliche Beratung</h4>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-bold leading-relaxed">Wir nehmen uns Zeit für Sie – bei uns sind Sie keine Buchungsnummer.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-sky-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 group-hover:bg-sky-600 dark:group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xl mb-2">Bestpreis-Garantie</h4>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-bold leading-relaxed">Durch Zugriff auf alle großen Veranstalter finden wir den besten Preis.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border-2 border-slate-100 dark:border-slate-800 hover:border-sky-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xl mb-2">After-Sales Support</h4>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-bold leading-relaxed">Wir sind auch während und nach Ihrer Reise für Sie da.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

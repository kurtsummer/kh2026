import { Heart, Star, Award, ChefHat, Utensils, Wine } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0A1A17] relative overflow-hidden transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#16332C]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-700">
             <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl aspect-square border-[12px] border-[#FDF8F1] dark:border-zinc-800 -rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-100 dark:bg-zinc-800">
               <img 
                 src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" 
                 alt="Küchenchef Max bei der Arbeit" 
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Elegant Floating Badge */}
             <div className="absolute -bottom-10 -right-10 bg-[#C5A059] p-10 rounded-[48px] shadow-2xl z-20 max-w-[240px] rotate-6 group hover:rotate-0 transition-transform">
                <div className="bg-white/30 p-4 rounded-3xl w-fit mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-black text-white leading-tight italic">"Gute Küche ist das Fundament allen Glücks."</p>
                <p className="text-sm font-bold text-white/60 mt-2 uppercase tracking-widest">– Max Mustermann</p>
             </div>

             <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#16332C] rounded-full -z-10 mix-blend-multiply opacity-10 blur-3xl animate-pulse" />
          </div>

          <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#16332C]/10 dark:bg-[#C5A059]/10 text-[#16332C] dark:text-[#C5A059] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                <ChefHat className="w-4 h-4 fill-current text-[#C5A059]" />
                <span>Unsere Philosophie</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-tight">
                Handwerk trifft <span className="text-[#C5A059]">Herzlichkeit</span>.
              </h2>
              <p className="text-xl text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium leading-relaxed">
                Seit über 15 Jahren steht das Restaurant Max für Qualität, Tradition und eine Prise moderner Kreativität im Herzen von Musterhausen.
              </p>
              <p className="text-lg text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium leading-relaxed">
                Wir glauben an die Kraft regionaler Zutaten. Jedes Gericht wird mit Liebe zum Detail und Respekt vor dem Produkt zubereitet. Bei uns sind Sie nicht nur Gast, sondern Teil der Familie.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#16332C]/10 dark:border-white/10">
              <div className="space-y-4 group">
                <div className="bg-[#C5A059]/10 p-4 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                  <Heart className="text-[#C5A059] w-8 h-8 fill-current" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#16332C] dark:text-[#FDF8F1]">Mit Seele</h4>
                  <p className="text-[#16332C]/40 dark:text-[#FDF8F1]/40 font-bold uppercase text-xs tracking-widest mt-1">Echte Gastfreundschaft</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="bg-[#16332C]/10 p-4 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                  <Utensils className="text-[#16332C] dark:text-[#C5A059] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#16332C] dark:text-[#FDF8F1]">Lokal</h4>
                  <p className="text-[#16332C]/40 dark:text-[#FDF8F1]/40 font-bold uppercase text-xs tracking-widest mt-1">Zutaten aus der Heimat</p>
                </div>
              </div>
            </div>

            <div className="bg-[#16332C] dark:bg-[#C5A059] p-8 rounded-[40px] text-white dark:text-[#16332C] flex items-center gap-6 shadow-2xl relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 dark:bg-black/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
               <div className="bg-white/10 dark:bg-black/10 p-4 rounded-2xl">
                 <Wine className="text-[#C5A059] dark:text-[#16332C] w-10 h-10" />
               </div>
               <div>
                 <p className="text-sm font-bold text-white/50 dark:text-black/50 uppercase tracking-[0.2em] mb-1">Musterhausener Gastro-Preis</p>
                 <p className="text-xl font-black">Bestes Restaurant 2023</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

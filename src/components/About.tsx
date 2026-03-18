import { Heart, Star, Sparkles, Utensils, Award, ChefHat } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFD93D]/10 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#45B7AF]/10 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-700">
             <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl aspect-square border-[12px] border-[#FFFCF8] -rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" 
                 alt="Max Mustermann in der Küche" 
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -right-10 bg-[#FFD93D] p-10 rounded-[48px] shadow-2xl z-20 max-w-[240px] rotate-6 group hover:rotate-0 transition-transform">
                <div className="bg-white/30 p-4 rounded-3xl w-fit mb-4">
                  <Award className="w-10 h-10 text-[#2D3436]" />
                </div>
                <p className="text-xl font-black text-[#2D3436] leading-tight italic">"Kochen ist Leidenschaft."</p>
                <p className="text-sm font-bold text-[#2D3436]/60 mt-2 uppercase tracking-widest">– Max Mustermann</p>
             </div>

             <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#45B7AF] rounded-full -z-10 mix-blend-multiply opacity-20 blur-3xl animate-pulse" />
          </div>

          <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FF7E67]/10 text-[#FF7E67] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                <ChefHat className="w-4 h-4 fill-current" />
                <span>Unsere Geschichte</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">
                Die Seele von <span className="text-[#45B7AF]">Musterhausen</span>.
              </h2>
              <p className="text-xl text-[#2D3436]/60 font-medium leading-relaxed">
                Seit über 15 Jahren steht das Restaurant Max für Qualität, Tradition und eine Prise moderner Kreativität. Max Mustermann, unser Chef de Cuisine, bringt seine Liebe zum Handwerk in jeden Teller ein.
              </p>
              <p className="text-lg text-[#2D3436]/60 font-medium leading-relaxed">
                Was als kleiner Familienbetrieb begann, hat sich zu einem Treffpunkt für alle entwickelt, die ehrliches Essen in entspannter Atmosphäre schätzen. Wir kennen unsere Lieferanten persönlich und wissen genau, woher unsere Zutaten kommen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#2D3436]/10">
              <div className="space-y-4 group">
                <div className="bg-[#45B7AF]/10 p-4 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                  <Heart className="text-[#45B7AF] w-8 h-8 fill-current" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#2D3436]">Mit Herz</h4>
                  <p className="text-[#2D3436]/60 font-bold uppercase text-xs tracking-widest mt-1">Gastfreundschaft pur</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="bg-[#FF7E67]/10 p-4 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                  <Utensils className="text-[#FF7E67] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#2D3436]">Lokal</h4>
                  <p className="text-[#2D3436]/60 font-bold uppercase text-xs tracking-widest mt-1">Zutaten aus der Region</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2D3436] p-8 rounded-[40px] text-white flex items-center gap-6 shadow-2xl relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
               <div className="bg-white/10 p-4 rounded-2xl">
                 <Sparkles className="text-[#FFD93D] w-10 h-10" />
               </div>
               <div>
                 <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Musterhausener Gastro-Preis</p>
                 <p className="text-xl font-black">Bestes Restaurant 2023</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

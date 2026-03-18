import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Coffee, Heart, Croissant, Clock } from "lucide-react";

export const Hero = () => {
  const avatarImages = [
    "https://images.unsplash.com/photo-1550966841-3ee2964680d8?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDF5E6] dark:bg-[#1A0A0A] transition-colors duration-500">
      {/* Elegant Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#800020]/5 dark:bg-[#D4AF37]/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#3E2723]/5 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-[#800020]/10 dark:bg-[#D4AF37]/10 text-[#800020] dark:text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-[#800020]/20">
            <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
            <span>Klassische Wiener Kaffeehauskultur</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] text-[#3D2B1F] dark:text-[#FDF5E6]">
            Tradition,<br />
            <span className="text-[#800020]">die man schmeckt.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#3D2B1F]/70 dark:text-[#FDF5E6]/70 max-w-lg leading-relaxed font-medium">
            Entfliehen Sie dem Alltag in die Welt von Max Mustermann. Erleben Sie den Charme Wiens mitten in Musterhausen mit feinsten Melangen und echtem Sachertorten-Genuss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#800020] hover:bg-[#4A0E0E] text-white rounded-full px-8 py-7 text-lg font-bold group shadow-lg shadow-[#800020]/20 border-none transition-all duration-300">
              <a href="#menu" className="flex items-center">
                Zur Karte
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
            <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-8 py-7 text-lg font-bold transition-all duration-300 bg-transparent">
              <a href="#reservation">Platz reservieren</a>
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-[#3D2B1F]/10 dark:border-white/10">
            <div className="flex -space-x-3">
              {avatarImages.map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FDF5E6] dark:border-[#1A0A0A] bg-gray-100 dark:bg-zinc-800 overflow-hidden shadow-md">
                  <img 
                    src={src} 
                    alt={`Zufriedener Gast ${i + 1}`} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-[#3D2B1F] dark:text-[#FDF5E6]">Über 3.000+ Kenner & Genießer</p>
              <div className="flex text-[#D4AF37]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white dark:border-zinc-800 rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-100 dark:bg-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
              alt="Traditionelles altes Wiener Kaffeehaus-Ambiente"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          
          {/* Subtle Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D4AF37] rounded-full -z-10 mix-blend-multiply opacity-20 dark:opacity-40 blur-2xl animate-pulse" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#800020] rounded-full -z-10 mix-blend-multiply opacity-10 blur-3xl" />
          
          {/* Floating Card */}
          <div className="absolute bottom-12 -left-12 bg-white dark:bg-zinc-900 p-6 rounded-[24px] shadow-2xl z-20 hidden md:block border border-[#D4AF37]/20 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="bg-[#D4AF37]/10 p-3 rounded-2xl text-[#D4AF37]">
                <Croissant className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 uppercase tracking-wider font-black">Empfehlung</p>
                <p className="text-lg font-serif font-black text-[#3D2B1F] dark:text-[#FDF8F1]">Original Sachertorte</p>
              </div>
            </div>
          </div>

          <div className="absolute top-20 -right-4 bg-[#800020] p-4 rounded-2xl shadow-xl z-20 hidden lg:flex items-center gap-3 border border-white/20 -rotate-6">
             <div className="bg-white/20 p-2 rounded-xl text-white">
                <Clock className="w-5 h-5" aria-hidden="true" />
             </div>
             <p className="text-sm font-bold text-white">Täglich ab 08:00 Uhr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

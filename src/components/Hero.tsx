import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Camera, Heart, Sparkles } from "lucide-react";

export const Hero = () => {
  const avatarImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FFFCF8]">
      {/* Vibrant Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#45B7AF]/10 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF7E67]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD93D]/10 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-[#FF7E67]/10 text-[#FF7E67] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Musterhausens fröhlichstes Fotostudio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black leading-[1.1] text-[#2D3436]">
            Lachen,<br />
            <span className="text-[#FF7E67]">das ansteckt.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#2D3436]/70 max-w-lg leading-relaxed">
            Wir halten Ihre glücklichsten Momente in lebendigen, farbenfrohen Bildern fest. Authentisch, voller Energie und einfach Max Mustermann.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-full px-8 py-7 text-lg font-bold group shadow-lg shadow-[#FF7E67]/20 border-none">
              Jetzt Termin sichern
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-[#45B7AF] text-[#45B7AF] hover:bg-[#45B7AF]/5 rounded-full px-8 py-7 text-lg font-bold">
              Bildergalerie entdecken
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-[#2D3436]/10">
            <div className="flex -space-x-3">
              {avatarImages.map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                  <img 
                    src={src} 
                    alt={`Glücklicher Kunde ${i + 1}`} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-[#2D3436]">Über 300+ strahlende Kunden</p>
              <div className="flex text-[#FFD93D]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
              alt="Fröhliche Fotografie Atmosphäre im Studio"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          
          {/* Playful elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFD93D] rounded-full -z-10 mix-blend-multiply opacity-30 blur-2xl animate-pulse" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#45B7AF] rounded-full -z-10 mix-blend-multiply opacity-20 blur-3xl" />
          
          {/* Floating Card */}
          <div className="absolute bottom-12 -left-12 bg-white p-6 rounded-[24px] shadow-2xl z-20 hidden md:block border border-[#FF7E67]/10 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="bg-[#FF7E67]/10 p-3 rounded-2xl">
                <Heart className="text-[#FF7E67] w-6 h-6 fill-current" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#2D3436]/50 uppercase tracking-wider font-black">Nächster freier Spot</p>
                <p className="text-lg font-black text-[#2D3436]">Morgen, 10:00 Uhr</p>
              </div>
            </div>
          </div>

          <div className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:flex items-center gap-3 border border-[#45B7AF]/10 -rotate-6">
             <div className="bg-[#45B7AF]/10 p-2 rounded-xl">
                <Camera className="text-[#45B7AF] w-5 h-5" aria-hidden="true" />
             </div>
             <p className="text-sm font-bold text-[#2D3436]">5.0 Sterne Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

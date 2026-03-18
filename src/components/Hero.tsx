import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Camera, Image as ImageIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A059]/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2D3436]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 text-[#C5A059] px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>Musterhausens Premium Fotostudio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-[#2D3436]">
            Momente,<br />
            <span className="text-[#C5A059]">die bleiben.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#2D3436]/70 max-w-lg leading-relaxed">
            Authentische Porträts, emotionale Hochzeitsreportagen und professionelle Businessfotografie. Max Mustermann fängt Ihre Geschichte in zeitlosen Bildern ein.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#2D3436] hover:bg-[#3D4446] text-white rounded-full px-8 py-7 text-lg group">
              Shooting anfragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-[#2D3436] text-[#2D3436] hover:bg-[#2D3436]/5 rounded-full px-8 py-7 text-lg">
              Portfolio ansehen
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-[#2D3436]/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FAF9F6] bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Zufriedener Kunde" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-[#2D3436]">Über 300+ glückliche Kunden</p>
              <div className="flex text-[#C5A059]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
              alt="Max Mustermann Fotografie Studio Setup"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C5A059] rounded-full -z-10 mix-blend-multiply opacity-20 blur-2xl" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2D3436] rounded-full -z-10 mix-blend-multiply opacity-10 blur-3xl" />
          
          {/* Floating Card */}
          <div className="absolute bottom-12 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20 animate-bounce-slow" role="complementary" aria-label="Verfügbarkeit">
            <div className="flex items-center gap-4">
              <div className="bg-[#C5A059]/20 p-3 rounded-xl">
                <Camera className="text-[#C5A059] w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#2D3436]/50 uppercase tracking-wider font-bold">Nächster Termin frei</p>
                <p className="text-lg font-bold text-[#2D3436]">Dienstag, 09:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Secondary Floating Element */}
          <div className="absolute top-12 -right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20 hidden lg:flex items-center gap-3 border border-white/20">
             <div className="bg-[#2D3436]/10 p-2 rounded-lg">
                <ImageIcon className="text-[#2D3436] w-5 h-5" aria-hidden="true" />
             </div>
             <p className="text-sm font-semibold text-[#2D3436]">500+ Shootings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

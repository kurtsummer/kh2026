import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, ArrowRight, ShieldCheck, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Luxury Home"
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md text-amber-400 px-5 py-2.5 rounded-full text-sm font-bold border border-amber-500/20">
            <Star className="w-4 h-4 fill-amber-400" />
            Ihr vertrauensvoller Partner in Musterhausen
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tight">
            Finden Sie Ihr <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Traumzuhause.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Exklusive Immobilien und erstklassiger Service in Musterhausen und Umgebung. Max Mustermann begleitet Sie von der ersten Besichtigung bis zum Notartermin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl px-12 h-20 text-xl font-black shadow-2xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 group">
              Immobilien entdecken
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-2xl px-12 h-20 text-xl font-bold gap-3 transition-all border-2">
              <Home className="w-6 h-6 text-amber-400" />
              Immobilie bewerten
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-10 pt-4">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">500+</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Objekte vermittelt</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">15+</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Jahre Erfahrung</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">4.9/5</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Kundenbewertung</span>
            </div>
          </div>
        </div>

        {/* Floating Search Card */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="bg-white/95 backdrop-blur-xl p-10 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/20 space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-900">Schnellsuche</h3>
              <p className="text-slate-500 font-medium">Finden Sie passende Objekte in Sekunden.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Was suchen Sie?</label>
                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select className="w-full h-14 pl-12 pr-6 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-amber-500 transition-all">
                    <option>Wohnung kaufen</option>
                    <option>Haus kaufen</option>
                    <option>Mieten</option>
                    <option>Gewerbe</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Standort</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Stadt oder PLZ" 
                    className="w-full h-14 pl-12 pr-6 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Zimmer</label>
                  <select className="w-full h-14 px-6 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-amber-500 transition-all">
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Budget</label>
                  <select className="w-full h-14 px-6 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-amber-500 transition-all">
                    <option>bis 500k €</option>
                    <option>bis 1M €</option>
                    <option>über 1M €</option>
                  </select>
                </div>
              </div>

              <Button className="w-full h-16 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-lg font-black gap-3 shadow-xl transition-all group">
                <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Ergebnisse anzeigen
              </Button>
            </div>
          </div>

          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-black leading-none mb-1">Top-Makler</p>
              <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Region Musterhausen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

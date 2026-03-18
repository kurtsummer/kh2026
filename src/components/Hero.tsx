import { Button } from "@/components/ui/button";
import { Search, MapPin, Plane, ArrowRight, Palmtree, Star, Compass, Ship } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-sky-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
          alt="Tropical Beach"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-transparent to-sky-900/90" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-black border border-white/20 shadow-2xl animate-in fade-in slide-in-from-left duration-700">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Ihr Reiseexperte in Musterhausen seit über 15 Jahren
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000">
            Zeit für <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 drop-shadow-sm">Abenteuer.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sky-50 max-w-2xl leading-relaxed font-bold drop-shadow-md animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Von einsamen Stränden bis zu pulsierenden Metropolen – Max Mustermann findet für Sie die perfekte Reise. Persönlich, kompetent und direkt vor Ort in Musterhausen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-[2rem] px-12 h-20 text-xl font-black shadow-[0_20px_50px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95 group">
              Angebote entdecken
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md rounded-[2rem] px-12 h-20 text-xl font-black gap-3 transition-all border-4 shadow-2xl">
              <Compass className="w-6 h-6 text-amber-400" />
              Reiseberatung
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-12 pt-6">
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white leading-none">2.5k+</span>
              <span className="text-xs font-black text-sky-200 uppercase tracking-[0.3em] mt-2">Zufriedene Urlauber</span>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white leading-none">120+</span>
              <span className="text-xs font-black text-sky-200 uppercase tracking-[0.3em] mt-2">Reiseziele weltweit</span>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white leading-none">100%</span>
              <span className="text-xs font-black text-sky-200 uppercase tracking-[0.3em] mt-2">Persönlicher Service</span>
            </div>
          </div>
        </div>

        {/* Floating Quick Search Card */}
        <div className="lg:col-span-5 relative hidden lg:block perspective-1000">
          <div className="bg-white/95 backdrop-blur-2xl p-12 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-4 border-white/50 space-y-10 animate-in zoom-in duration-1000 delay-300">
            <div className="space-y-3">
              <div className="w-16 h-2 bg-sky-500 rounded-full" />
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">Traumurlaub finden</h3>
              <p className="text-slate-500 font-bold">Wohin soll die Reise gehen?</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Reiseart</label>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-sky-100 rounded-xl text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                    <Palmtree className="w-5 h-5" />
                  </div>
                  <select className="w-full h-16 pl-16 pr-8 bg-slate-50 border-none rounded-[1.5rem] text-slate-900 font-black text-lg appearance-none cursor-pointer focus:ring-4 focus:ring-sky-500/20 transition-all">
                    <option>Pauschalreise</option>
                    <option>Städtereise</option>
                    <option>Kreuzfahrt</option>
                    <option>Flug + Hotel</option>
                    <option>Last Minute</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Destination</label>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-orange-100 rounded-xl text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Land oder Stadt" 
                    className="w-full h-16 pl-16 pr-8 bg-slate-50 border-none rounded-[1.5rem] text-slate-900 font-black text-lg placeholder:text-slate-300 focus:ring-4 focus:ring-sky-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Dauer</label>
                  <select className="w-full h-16 px-8 bg-slate-50 border-none rounded-[1.5rem] text-slate-900 font-black text-lg appearance-none cursor-pointer focus:ring-4 focus:ring-sky-500/20 transition-all">
                    <option>1 Woche</option>
                    <option>2 Wochen</option>
                    <option>Kurztrip</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Budget</label>
                  <select className="w-full h-16 px-8 bg-slate-50 border-none rounded-[1.5rem] text-slate-900 font-black text-lg appearance-none cursor-pointer focus:ring-4 focus:ring-sky-500/20 transition-all">
                    <option>Beliebig</option>
                    <option>bis 1000€</option>
                    <option>bis 2500€</option>
                    <option>Luxus</option>
                  </select>
                </div>
              </div>

              <Button className="w-full h-20 bg-slate-900 hover:bg-slate-800 text-white rounded-[2rem] text-xl font-black gap-4 shadow-2xl transition-all group active:scale-95">
                <Search className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Urlaub finden
              </Button>
            </div>
          </div>

          {/* Decorative Floating Icon */}
          <div className="absolute -bottom-10 -right-10 bg-amber-400 text-white p-8 rounded-[3rem] shadow-[0_30px_60px_rgba(245,158,11,0.4)] z-20 flex items-center gap-5 animate-bounce-slow border-8 border-white">
            <div className="w-16 h-16 bg-white/20 rounded-[1.5rem] flex items-center justify-center">
              <Ship className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xl font-black leading-none mb-1 italic">Top Deal</p>
              <p className="text-xs font-black opacity-80 uppercase tracking-[0.2em]">Karibik Kreuzfahrt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

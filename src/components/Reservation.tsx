import { Calendar, Users, Clock, Coffee, Heart, Star, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-white dark:bg-[#0A1A17] transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#800020]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-[64px] shadow-3xl overflow-hidden border border-[#D4AF37]/10 grid lg:grid-cols-2 group">
          
          {/* Reservation Info */}
          <div className="p-12 md:p-20 space-y-12 bg-[#800020] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-45 transition-transform duration-700">
               <Coffee size={240} className="text-white" />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-white/20">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Exklusivität</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter">
                Einen Platz <br />
                <span className="text-[#D4AF37]">sichern.</span>
              </h2>
              <p className="text-xl text-white/70 font-medium max-w-sm leading-relaxed font-serif italic">
                Reservieren Sie Ihren Lieblingstisch für ein ausgiebiges Kaffeekränzchen oder ein entspanntes Frühstück.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-[28px] border border-white/10">
                  <Heart className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                   <p className="text-lg font-black font-serif">Klassischer Service</p>
                   <p className="text-sm font-medium text-white/50">Wir legen Wert auf Etikette und Zuvorkommenheit, ganz nach alter Schule.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-[28px] border border-white/10">
                  <Star className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                   <p className="text-lg font-black font-serif">Besondere Anlässe</p>
                   <p className="text-sm font-medium text-white/50">Für größere Gruppen oder Feierlichkeiten bereiten wir gerne eine Tafel vor.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 relative z-10">
               <div className="inline-block p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 shadow-2xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-2">Max Mustermanns Motto</p>
                  <p className="text-xl font-serif font-black italic">"Kaffee ist Kultur, und Kultur braucht Raum."</p>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="p-12 md:p-20 space-y-10 bg-[#FDF5E6] dark:bg-zinc-900">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Datum</label>
                  <div className="relative">
                     <Input 
                      type="date" 
                      className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-[#D4AF37] w-6 h-6 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Gäste</label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] h-auto text-[#3D2B1F]">
                      <SelectValue placeholder="Anzahl" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border-[#D4AF37]/20 rounded-2xl shadow-2xl">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="py-4 text-lg font-bold">
                          {num} {num === 1 ? "Gast" : "Gäste"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Uhrzeit</label>
                   <div className="relative">
                      <Input 
                        type="time" 
                        className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                      />
                      <Clock className="absolute right-6 top-1/2 -translate-y-1/2 text-[#D4AF37] w-6 h-6 pointer-events-none" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Name</label>
                   <Input 
                    placeholder="Ihr Name" 
                    className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                  />
                </div>
              </div>

              <Button className="w-full bg-[#800020] hover:bg-[#4A0E0E] text-white rounded-[32px] py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#800020]/20 border-none group transition-all duration-500 mt-4">
                Platz anfragen
                <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 pt-4">
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Stornierung kostenfrei möglich</p>
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

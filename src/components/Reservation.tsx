import { Calendar, Users, Clock, Coffee, Heart, Star, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-[#FDF8F1] dark:bg-[#16332C]/10 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#16332C]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-[64px] shadow-3xl overflow-hidden border border-[#C5A059]/10 grid lg:grid-cols-2 group">
          
          {/* Reservation Info */}
          <div className="p-12 md:p-20 space-y-12 bg-[#16332C] dark:bg-[#C5A059]/10 text-white relative">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-45 transition-transform duration-700">
               <Coffee size={240} className="text-white" />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em]">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Exklusiv</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Tisch <br />
                <span className="text-[#C5A059]">sichern.</span>
              </h2>
              <p className="text-xl text-white/70 font-medium max-w-sm leading-relaxed">
                Planen Sie Ihr nächstes Frühstück oder Kaffeekränzchen bei uns. Wir reservieren Ihnen gerne Ihren Lieblingsplatz.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-[28px]">
                  <Heart className="w-8 h-8 text-[#C5A059]" />
                </div>
                <div>
                   <p className="text-lg font-black">Besondere Wünsche?</p>
                   <p className="text-sm font-medium text-white/50">Ob Geburtstag, Jubiläum oder Firmenevent – wir machen es unvergesslich.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-[28px]">
                  <Star className="w-8 h-8 text-[#C5A059]" />
                </div>
                <div>
                   <p className="text-lg font-black">Gruppenanfragen</p>
                   <p className="text-sm font-medium text-white/50">Für Gruppen ab 8 Personen bitten wir um telefonische Rücksprache.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 relative z-10">
               <div className="inline-block p-6 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Max' Versprechen</p>
                  <p className="text-xl font-black italic">"Jeder Gast ist wie ein Freund des Hauses."</p>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="p-12 md:p-20 space-y-10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#16332C]/50 dark:text-[#FDF8F1]/50 ml-2">Datum</label>
                  <div className="relative">
                     <Input 
                      type="date" 
                      className="bg-[#FDF8F1] dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#C5A059]"
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C5A059] w-6 h-6 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#16332C]/50 dark:text-[#FDF8F1]/50 ml-2">Anzahl Personen</label>
                  <Select>
                    <SelectTrigger className="bg-[#FDF8F1] dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#C5A059] h-auto">
                      <SelectValue placeholder="Personen" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border-[#C5A059]/20 rounded-2xl shadow-2xl">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="py-4 text-lg font-bold">
                          {num} {num === 1 ? "Person" : "Personen"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#16332C]/50 dark:text-[#FDF8F1]/50 ml-2">Uhrzeit</label>
                   <div className="relative">
                      <Input 
                        type="time" 
                        className="bg-[#FDF8F1] dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#C5A059]"
                      />
                      <Clock className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C5A059] w-6 h-6 pointer-events-none" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#16332C]/50 dark:text-[#FDF8F1]/50 ml-2">Name</label>
                   <Input 
                    placeholder="Ihr Name" 
                    className="bg-[#FDF8F1] dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                 <label className="text-xs font-black uppercase tracking-widest text-[#16332C]/50 dark:text-[#FDF8F1]/50 ml-2">Email oder Telefon</label>
                 <Input 
                  placeholder="Ihre Kontaktdaten" 
                  className="bg-[#FDF8F1] dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>

              <Button className="w-full bg-[#16332C] dark:bg-[#C5A059] hover:bg-[#1E3A34] dark:hover:bg-[#D4B36D] text-white dark:text-[#16332C] rounded-[32px] py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#16332C]/20 border-none group transition-all duration-500 mt-4">
                Tisch anfragen
                <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 pt-4">
                 <div className="h-[2px] w-8 bg-[#C5A059]/30 rounded-full" />
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Kostenfreie Stornierung</p>
                 <div className="h-[2px] w-8 bg-[#C5A059]/30 rounded-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

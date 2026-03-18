import { Calendar, Users, Clock, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-[#FDF8F1] dark:bg-[#0A1A17] relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-[#16332C]/10 dark:bg-[#C5A059]/10 text-[#16332C] dark:text-[#C5A059] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
              <Calendar className="w-4 h-4 fill-current text-[#C5A059]" />
              <span>Planen Sie Ihren Besuch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-tight">
              Einen Tisch <span className="text-[#C5A059]">reservieren</span>.
            </h2>
            
            <p className="text-lg text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium max-w-lg leading-relaxed">
              Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen. Ob für einen besonderen Anlass oder ein entspanntes Dinner – bei uns finden Sie den perfekten Platz.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="bg-[#C5A059]/10 p-5 rounded-3xl group-hover:bg-[#C5A059]/20 transition-colors">
                  <Clock className="text-[#C5A059] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#16332C] dark:text-[#FDF8F1]">Öffnungszeiten</h4>
                  <p className="text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium">Di - Sa: 11:30 - 22:00 Uhr</p>
                  <p className="text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium">So: 11:00 - 21:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="bg-[#16332C]/10 p-5 rounded-3xl group-hover:bg-[#16332C]/20 transition-colors">
                  <Users className="text-[#16332C] dark:text-[#C5A059] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#16332C] dark:text-[#FDF8F1]">Große Gruppen</h4>
                  <p className="text-[#16332C]/60 dark:text-[#FDF8F1]/60 font-medium">Ab 10 Personen bitte telefonisch anfragen.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-10 rounded-[60px] shadow-2xl border-8 border-[#16332C]/5 dark:border-white/5 relative">
            <div className="absolute -top-6 -right-6 bg-[#C5A059] p-5 rounded-full shadow-lg rotate-12">
               <Star className="w-8 h-8 text-white fill-current" />
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-black text-[#16332C] dark:text-[#FDF8F1]/80 uppercase tracking-wider ml-1">Ihr Name</Label>
                  <Input id="name" placeholder="Max Mustermann" className="rounded-2xl border-[#16332C]/10 dark:border-white/10 focus:ring-[#C5A059] h-12 bg-[#FDF8F1]/30 dark:bg-zinc-900/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-black text-[#16332C] dark:text-[#FDF8F1]/80 uppercase tracking-wider ml-1">E-Mail</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.de" className="rounded-2xl border-[#16332C]/10 dark:border-white/10 focus:ring-[#C5A059] h-12 bg-[#FDF8F1]/30 dark:bg-zinc-900/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-black text-[#16332C] dark:text-[#FDF8F1]/80 uppercase tracking-wider ml-1">Datum</Label>
                  <Input id="date" type="date" className="rounded-2xl border-[#16332C]/10 dark:border-white/10 focus:ring-[#C5A059] h-12 bg-[#FDF8F1]/30 dark:bg-zinc-900/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-sm font-black text-[#16332C] dark:text-[#FDF8F1]/80 uppercase tracking-wider ml-1">Personen</Label>
                  <Input id="guests" type="number" min="1" max="10" placeholder="2" className="rounded-2xl border-[#16332C]/10 dark:border-white/10 focus:ring-[#C5A059] h-12 bg-[#FDF8F1]/30 dark:bg-zinc-900/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-black text-[#16332C] dark:text-[#FDF8F1]/80 uppercase tracking-wider ml-1">Anmerkungen (z.B. Allergien)</Label>
                <Textarea id="notes" placeholder="Lassen Sie uns wissen, was Ihnen wichtig ist..." className="rounded-3xl border-[#16332C]/10 dark:border-white/10 focus:ring-[#C5A059] min-h-[120px] bg-[#FDF8F1]/30 dark:bg-zinc-900/50" />
              </div>

              <Button className="bg-[#16332C] dark:bg-[#C5A059] hover:bg-[#1E3A34] dark:hover:bg-[#D4B36D] text-white dark:text-[#16332C] rounded-[24px] w-full py-8 text-xl font-black shadow-xl shadow-[#16332C]/20 border-none transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4">
                Jetzt reservieren
                <Send className="w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Calendar, Users, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-[#FFFCF8] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-[#45B7AF]/10 text-[#45B7AF] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
              <Calendar className="w-4 h-4 fill-current" />
              <span>Sichern Sie sich Ihren Platz</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">
              Einen Tisch <span className="text-[#FF7E67]">reservieren</span>.
            </h2>
            
            <p className="text-lg text-[#2D3436]/60 font-medium max-w-lg leading-relaxed">
              Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen. Ob romantisches Dinner oder Familienfeier – bei uns finden Sie den perfekten Platz.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="bg-[#FF7E67]/10 p-5 rounded-3xl group-hover:bg-[#FF7E67]/20 transition-colors">
                  <Clock className="text-[#FF7E67] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#2D3436]">Öffnungszeiten</h4>
                  <p className="text-[#2D3436]/60 font-medium">Di - Sa: 11:30 - 22:00 Uhr</p>
                  <p className="text-[#2D3436]/60 font-medium">So: 11:00 - 21:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="bg-[#45B7AF]/10 p-5 rounded-3xl group-hover:bg-[#45B7AF]/20 transition-colors">
                  <Users className="text-[#45B7AF] w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#2D3436]">Große Gruppen</h4>
                  <p className="text-[#2D3436]/60 font-medium">Ab 10 Personen bitte telefonisch anfragen.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[60px] shadow-2xl border-8 border-[#2D3436]/5 relative">
            <div className="absolute -top-6 -right-6 bg-[#FFD93D] p-5 rounded-full shadow-lg rotate-12">
               <Sparkles className="w-8 h-8 text-[#2D3436]" />
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-black text-[#2D3436] uppercase tracking-wider ml-1">Ihr Name</Label>
                  <Input id="name" placeholder="Max Mustermann" className="rounded-2xl border-[#2D3436]/10 focus:ring-[#FF7E67] h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-black text-[#2D3436] uppercase tracking-wider ml-1">E-Mail</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.de" className="rounded-2xl border-[#2D3436]/10 focus:ring-[#FF7E67] h-12" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-black text-[#2D3436] uppercase tracking-wider ml-1">Datum</Label>
                  <Input id="date" type="date" className="rounded-2xl border-[#2D3436]/10 focus:ring-[#FF7E67] h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-sm font-black text-[#2D3436] uppercase tracking-wider ml-1">Personen</Label>
                  <Input id="guests" type="number" min="1" max="10" placeholder="2" className="rounded-2xl border-[#2D3436]/10 focus:ring-[#FF7E67] h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-black text-[#2D3436] uppercase tracking-wider ml-1">Anmerkungen (z.B. Allergien)</Label>
                <Textarea id="notes" placeholder="Erzählen Sie uns mehr..." className="rounded-3xl border-[#2D3436]/10 focus:ring-[#FF7E67] min-h-[120px]" />
              </div>

              <Button className="bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-[24px] w-full py-8 text-xl font-black shadow-xl shadow-[#FF7E67]/20 border-none transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-4">
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

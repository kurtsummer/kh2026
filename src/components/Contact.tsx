import { Mail, Phone, MapPin, Send, MessageCircle, Palmtree, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-sky-100">
                Kontakt
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Bereit für <br />
                <span className="text-sky-600 italic">die nächste Reise?</span>
              </h2>
              <p className="text-slate-500 text-xl font-bold leading-relaxed max-w-xl">
                Egal ob Sie schon genaue Vorstellungen haben oder erst einmal Inspiration suchen – wir freuen uns auf Ihre Nachricht oder Ihren Besuch in Musterhausen.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-8 group cursor-pointer">
                <div className="w-24 h-24 rounded-[2.5rem] bg-slate-50 border-4 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:border-transparent">
                  <MapPin className="text-slate-400 w-10 h-10 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tighter">Besuchen Sie uns</h4>
                  <p className="text-slate-500 font-bold text-xl leading-snug tracking-tight">Hauptstraße 42, 12345 Musterhausen</p>
                  <p className="text-sky-600 text-[10px] font-black uppercase tracking-[0.3em] mt-3 hover:text-sky-700 transition-colors inline-flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500">
                    Route bei Google Maps
                    <div className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group cursor-pointer">
                <div className="w-24 h-24 rounded-[2.5rem] bg-slate-50 border-4 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:-rotate-12 transition-all duration-500 shadow-xl group-hover:border-transparent">
                  <Phone className="text-slate-400 w-10 h-10 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tighter text-sky-600">Rufen Sie an</h4>
                  <p className="text-slate-500 font-black text-3xl tracking-tighter italic">01234 / 567 890</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2 flex items-center gap-3">
                    Mo - Fr: 09:00 - 18:00 Uhr
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group cursor-pointer">
                <div className="w-24 h-24 rounded-[2.5rem] bg-slate-50 border-4 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:border-transparent">
                  <Mail className="text-slate-400 w-10 h-10 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tighter">Schreiben Sie uns</h4>
                  <p className="text-slate-500 font-bold text-xl tracking-tight">info@mustermann-reisen.de</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Rückmeldung garantiert am selben Tag</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-900 p-12 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(12,74,110,0.4)] relative overflow-hidden group border-8 border-white">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/20 transition-all duration-1000" />
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-[2.5rem] flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-[24deg] transition-all duration-700 border-8 border-white">
              <Compass className="w-16 h-16 text-sky-950 -rotate-12 group-hover:-rotate-[24deg] transition-all duration-700 animate-spin-slow" />
            </div>
            
            <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <h3 className="text-4xl font-black text-white tracking-tighter">Anfrage senden</h3>
                <p className="text-sky-200 font-bold tracking-tight">Wir planen Ihre Traumreise gemeinsam.</p>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">Name</label>
                    <Input placeholder="Ihr Name" className="rounded-2xl border-white/20 focus:border-amber-400 h-16 font-bold px-8 bg-white/5 text-white placeholder:text-sky-300 focus:ring-amber-400/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">E-Mail</label>
                    <Input type="email" placeholder="beispiel@mail.de" className="rounded-2xl border-white/20 focus:border-amber-400 h-16 font-bold px-8 bg-white/5 text-white placeholder:text-sky-300 focus:ring-amber-400/20" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">Reiseart</label>
                  <select className="w-full h-16 rounded-2xl border-white/20 focus:border-amber-400 px-8 bg-sky-950 text-white font-bold appearance-none cursor-pointer focus:ring-amber-400/20 shadow-inner">
                    <option className="bg-sky-950">Pauschalreise</option>
                    <option className="bg-sky-950">Kreuzfahrt</option>
                    <option className="bg-sky-950">Städtereise</option>
                    <option className="bg-sky-950">Flug & Hotel</option>
                    <option className="bg-sky-950">Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">Wünsche</label>
                  <Textarea placeholder="Wohin soll es gehen? Wann möchten Sie verreisen?" className="min-h-[160px] rounded-[2.5rem] border-white/20 focus:border-amber-400 font-bold p-8 bg-white/5 text-white placeholder:text-sky-300 resize-none focus:ring-amber-400/20" />
                </div>

                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-sky-950 rounded-[2rem] h-24 text-2xl font-black gap-4 shadow-2xl transition-all hover:scale-[1.05] active:scale-95 group">
                  Urlaubsanfrage senden
                  <Send className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

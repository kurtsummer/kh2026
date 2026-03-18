import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
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
              <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                Kontakt
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Lassen Sie uns über <br />
                <span className="text-amber-500">Ihre Zukunft</span> sprechen
              </h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                Ob Hauskauf, Wohnungsverkauf oder eine unverbindliche Beratung – ich bin persönlich für Sie da. Besuchen Sie mich in meinem Büro in der Altstadt von Musterhausen.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <MapPin className="text-slate-400 w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tight">Besuchen Sie uns</h4>
                  <p className="text-slate-500 font-bold text-lg leading-snug">Hauptstraße 42, 12345 Musterhausen</p>
                  <p className="text-amber-600 text-xs font-black uppercase tracking-widest mt-3 cursor-pointer hover:text-amber-700 transition-colors inline-flex items-center gap-2">
                    Anfahrt bei Google Maps
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:-rotate-6 transition-all duration-500 shadow-sm">
                  <Phone className="text-slate-400 w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tight">Rufen Sie an</h4>
                  <p className="text-slate-500 font-black text-2xl tracking-tighter">01234 / 567 890</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                    Mo - Fr: 09:00 - 18:00 Uhr
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <Mail className="text-slate-400 w-8 h-8 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-slate-900 text-2xl mb-1 tracking-tight">Schreiben Sie uns</h4>
                  <p className="text-slate-500 font-bold text-lg">info@mustermann-immobilien.de</p>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-3">Rückmeldung innerhalb von 2 Stunden</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/20 transition-all duration-1000" />
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-[24deg] transition-all duration-700">
              <Calendar className="w-12 h-12 text-white -rotate-12 group-hover:-rotate-[24deg] transition-all duration-700" />
            </div>
            
            <form className="space-y-10 relative z-10">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white">Anfrage senden</h3>
                <p className="text-slate-400 font-medium">Ich melde mich umgehend bei Ihnen zurück.</p>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Name</label>
                    <Input placeholder="Vor- und Nachname" className="rounded-2xl border-white/10 focus:border-amber-500 h-16 font-bold px-8 bg-white/5 text-white placeholder:text-slate-600 focus:ring-amber-500/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">E-Mail</label>
                    <Input type="email" placeholder="beispiel@mail.de" className="rounded-2xl border-white/10 focus:border-amber-500 h-16 font-bold px-8 bg-white/5 text-white placeholder:text-slate-600 focus:ring-amber-500/20" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Interesse an...</label>
                  <select className="w-full h-16 rounded-2xl border-white/10 focus:border-amber-500 px-8 bg-white/5 text-white font-bold appearance-none cursor-pointer focus:ring-amber-500/20">
                    <option className="bg-slate-900">Kaufinteresse</option>
                    <option className="bg-slate-900">Immobilie verkaufen</option>
                    <option className="bg-slate-900">Wertermittlung</option>
                    <option className="bg-slate-900">Mietanfrage</option>
                    <option className="bg-slate-900">Sonstiges</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Nachricht</label>
                  <Textarea placeholder="Beschreiben Sie kurz Ihr Anliegen..." className="min-h-[160px] rounded-[2.5rem] border-white/10 focus:border-amber-500 font-bold p-8 bg-white/5 text-white placeholder:text-slate-600 resize-none focus:ring-amber-500/20" />
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-2xl h-20 text-xl font-black gap-4 shadow-2xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 group">
                  Jetzt absenden
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

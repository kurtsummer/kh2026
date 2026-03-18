import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-indigo-600 font-extrabold tracking-[0.2em] uppercase text-sm mb-4">Kontakt</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Wir freuen uns auf <br />
              <span className="text-indigo-600">Ihren Besuch</span>
            </p>
            <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
              Vereinbaren Sie Ihren Termin bequem online, per Telefon oder schreiben Sie uns eine Nachricht für Rezeptbestellungen.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-all duration-300">
                  <MapPin className="text-indigo-600 w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-1">Unsere Adresse</h4>
                  <p className="text-slate-500 font-medium">Musterstraße 123, 12345 Musterhausen</p>
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mt-2 cursor-pointer hover:underline">Anfahrt planen</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-all duration-300">
                  <Phone className="text-indigo-600 w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-1">Telefonischer Kontakt</h4>
                  <p className="text-slate-500 font-medium font-mono text-xl tracking-tighter">01234 / 56789</p>
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mt-2">Erreichbar ab 08:00 Uhr</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-all duration-300">
                  <Mail className="text-indigo-600 w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-1">E-Mail Service</h4>
                  <p className="text-slate-500 font-medium">info@praxis-mustermann.de</p>
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mt-2">Wir antworten i.d.R. binnen 24h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-indigo-500/5 border border-slate-100 relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-xl rotate-12">
              <MessageCircle className="w-10 h-10 text-white -rotate-12" />
            </div>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Vollständiger Name</label>
                  <Input placeholder="Max Mustermann" className="rounded-2xl border-slate-200 focus:border-indigo-600 h-14 font-medium px-6 bg-white" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">E-Mail Adresse</label>
                  <Input type="email" placeholder="max@beispiel.de" className="rounded-2xl border-slate-200 focus:border-indigo-600 h-14 font-medium px-6 bg-white" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Ihr Anliegen</label>
                <Input placeholder="Terminwunsch / Rezept / Sonstiges" className="rounded-2xl border-slate-200 focus:border-indigo-600 h-14 font-medium px-6 bg-white" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nachricht</label>
                <Textarea placeholder="Wie können wir Ihnen weiterhelfen?" className="min-h-[150px] rounded-[2rem] border-slate-200 focus:border-indigo-600 font-medium p-6 bg-white resize-none" />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl h-16 text-lg font-black gap-3 shadow-xl shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-95">
                Nachricht absenden
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

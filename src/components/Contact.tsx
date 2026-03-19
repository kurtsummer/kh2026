import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-cyan-50/20 rounded-l-[10rem] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-cyan-600 font-black uppercase tracking-widest text-sm bg-cyan-50 px-4 py-2 rounded-full inline-block">
                Kontakt aufnehmen
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Ihr Weg zu uns in die <br />
                <span className="text-cyan-600">Praxis Mustermann.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Wir freuen uns darauf, von Ihnen zu hören! Ob Terminwunsch oder Frage zu unseren Leistungen – wir sind für Sie da.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Telefon", desc: "01234 56789", sub: "Mo-Fr, 08:30 - 18:00 Uhr", link: "tel:+49123456789" },
                { icon: <Mail className="w-6 h-6" />, title: "E-Mail", desc: "kontakt@fusspflege-mustermann.de", sub: "Wir antworten i.d.R. innerhalb 24h", link: "mailto:kontakt@fusspflege-mustermann.de" },
                { icon: <MapPin className="w-6 h-6" />, title: "Standort", desc: "Musterstraße 12, 12345 Musterhausen", sub: "Parkplätze direkt vor der Tür", link: "#" },
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="group flex gap-8 items-start p-8 rounded-[2.5rem] bg-[#f8fafc] border border-slate-50 transition-all hover:bg-white hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-cyan-600 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="text-xl font-black text-slate-900 leading-none">{item.title}</h3>
                    <p className="text-lg font-bold text-slate-700">{item.desc}</p>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-6">
              <span className="text-slate-900 font-black uppercase tracking-widest text-sm">Folgen Sie uns:</span>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-slate-600 hover:bg-cyan-600 hover:text-white transition-all hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-slate-600 hover:bg-cyan-600 hover:text-white transition-all hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Online-Anfrage</h3>
              </div>

              <form className="space-y-6 flex-grow" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-4">Name</label>
                    <Input className="h-14 rounded-2xl border-2 border-slate-50 bg-[#f8fafc] focus:border-cyan-500 focus:bg-white transition-all px-6 text-lg font-medium" placeholder="Ihren Namen eingeben" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-4">E-Mail</label>
                    <Input type="email" className="h-14 rounded-2xl border-2 border-slate-50 bg-[#f8fafc] focus:border-cyan-500 focus:bg-white transition-all px-6 text-lg font-medium" placeholder="Ihre E-Mail eingeben" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-4">Interesse an</label>
                  <select className="w-full h-14 rounded-2xl border-2 border-slate-50 bg-[#f8fafc] focus:border-cyan-500 focus:bg-white transition-all px-6 text-lg font-medium outline-none appearance-none">
                    <option>Medizinische Fußpflege</option>
                    <option>Wellness Fußpflege</option>
                    <option>Spangenbehandlung</option>
                    <option>Sonstiges / Beratung</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-4">Ihre Nachricht</label>
                  <Textarea className="min-h-[150px] rounded-[2rem] border-2 border-slate-50 bg-[#f8fafc] focus:border-cyan-500 focus:bg-white transition-all px-6 py-4 text-lg font-medium" placeholder="Wie können wir Ihnen helfen?" />
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200 text-cyan-600 focus:ring-cyan-500" />
                  <span className="text-sm font-medium text-slate-500">Ich stimme der Datenschutzerklärung zu.</span>
                </div>
                <Button className="w-full h-16 rounded-2xl text-xl font-black bg-cyan-600 hover:bg-cyan-700 shadow-2xl shadow-cyan-200 transition-all hover:scale-105 active:scale-95 group mt-4">
                  Nachricht absenden
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

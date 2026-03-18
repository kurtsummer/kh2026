import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight, Send, Utensils, Heart, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF7E67]/10 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD93D]/10 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
               <div className="bg-[#FF7E67]/10 p-4 rounded-3xl w-fit animate-bounce">
                  <Utensils className="w-8 h-8 text-[#FF7E67]" />
               </div>
               <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Kontakt</h2>
               <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">Wir freuen uns auf <span className="text-[#45B7AF]">Sie</span>!</h3>
               <p className="text-xl text-[#2D3436]/70 leading-relaxed max-w-lg font-medium">
                 Haben Sie Fragen zu unseren Gerichten oder planen Sie eine Veranstaltung? Schreiben Sie uns einfach eine Nachricht.
               </p>
            </div>

            <div className="grid gap-10">
               <div className="flex gap-8 group">
                  <div className="bg-[#FAF9F6] p-6 rounded-[32px] shadow-sm text-[#FF7E67] group-hover:bg-[#FF7E67] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                     <Mail className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#2D3436]/40 uppercase tracking-widest mb-1 leading-none">E-Mail Adresse</p>
                     <a href="mailto:hallo@restaurant-max.de" className="text-xl font-black text-[#2D3436] hover:text-[#FF7E67] transition-colors">hallo@restaurant-max.de</a>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="bg-[#FAF9F6] p-6 rounded-[32px] shadow-sm text-[#45B7AF] group-hover:bg-[#45B7AF] group-hover:text-white transition-all duration-300 group-hover:-rotate-6">
                     <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#2D3436]/40 uppercase tracking-widest mb-1 leading-none">Telefon</p>
                     <a href="tel:+49123456789" className="text-xl font-black text-[#2D3436] hover:text-[#45B7AF] transition-colors">+49 (0) 123 456 789</a>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="bg-[#FAF9F6] p-6 rounded-[32px] shadow-sm text-[#FFD93D] group-hover:bg-[#FFD93D] group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#2D3436]/40 uppercase tracking-widest mb-1 leading-none">Adresse</p>
                     <p className="text-xl font-black text-[#2D3436]">Hauptstraße 42, 12345 Musterhausen</p>
                  </div>
               </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-[#2D3436]/5">
               <p className="text-xs font-black text-[#2D3436]/40 uppercase tracking-widest">Folgen Sie uns</p>
               <div className="flex gap-4">
                  {[
                    { icon: <Instagram />, label: "Instagram", color: "hover:bg-[#E1306C]" },
                    { icon: <Facebook />, label: "Facebook", color: "hover:bg-[#4267B2]" }
                  ].map((social, i) => (
                    <button key={i} className={`bg-[#FAF9F6] p-6 rounded-[28px] shadow-sm text-[#2D3436] hover:text-white transition-all duration-300 hover:-translate-y-2 ${social.color}`} aria-label={social.label}>
                       {social.icon}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-[#FAF9F6] p-16 rounded-[60px] shadow-2xl relative overflow-hidden border-8 border-white">
             <div className="absolute top-0 right-0 w-48 h-48 bg-[#45B7AF]/5 rounded-full blur-[60px] -z-1" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FF7E67]/5 rounded-full blur-[60px] -z-1" />
             
             <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-xs font-black text-[#2D3436] uppercase tracking-widest ml-1">Ihr Name</label>
                      <Input placeholder="Max Mustermann" className="bg-white border-none rounded-3xl py-8 px-8 focus:ring-4 focus:ring-[#FF7E67]/20 transition-shadow shadow-sm font-bold placeholder:font-medium placeholder:text-[#2D3436]/30" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-black text-[#2D3436] uppercase tracking-widest ml-1">E-Mail</label>
                      <Input type="email" placeholder="max@beispiel.de" className="bg-white border-none rounded-3xl py-8 px-8 focus:ring-4 focus:ring-[#45B7AF]/20 transition-shadow shadow-sm font-bold placeholder:font-medium placeholder:text-[#2D3436]/30" />
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-black text-[#2D3436] uppercase tracking-widest ml-1">Betreff</label>
                   <div className="relative">
                      <select className="w-full bg-white border-none rounded-3xl py-6 px-8 focus:ring-4 focus:ring-[#FFD93D]/20 transition-shadow shadow-sm text-[#2D3436]/60 appearance-none font-bold">
                         <option>Allgemeine Anfrage</option>
                         <option>Veranstaltung / Catering</option>
                         <option>Feedback</option>
                         <option>Sonstiges</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#2D3436]/20">
                         <Sparkles className="w-5 h-5" />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-black text-[#2D3436] uppercase tracking-widest ml-1">Ihre Nachricht</label>
                   <Textarea placeholder="Wie können wir Ihnen helfen?" className="bg-white border-none rounded-[32px] py-8 px-8 h-48 focus:ring-4 focus:ring-[#FF7E67]/20 transition-shadow shadow-sm resize-none font-bold placeholder:font-medium placeholder:text-[#2D3436]/30" />
                </div>

                <Button className="w-full bg-[#FF7E67] hover:bg-[#E66B56] text-white rounded-3xl py-10 text-xl font-black group shadow-2xl shadow-[#FF7E67]/30 transition-all hover:scale-105 active:scale-95 border-none">
                   Nachricht abschicken!
                   <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-[10px] text-center text-[#2D3436]/40 uppercase font-black tracking-widest">
                   <Heart className="w-3 h-3 text-[#FF7E67] fill-current" />
                   <span>Ihre Daten sind sicher</span>
                   <Heart className="w-3 h-3 text-[#45B7AF] fill-current" />
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

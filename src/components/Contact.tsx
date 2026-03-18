import { Mail, Phone, MapPin, Instagram, Facebook, Send, Utensils, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#16332C]/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
               <div className="bg-[#16332C]/10 p-4 rounded-3xl w-fit animate-bounce">
                  <Utensils className="w-8 h-8 text-[#16332C]" />
               </div>
               <h2 className="text-[#C5A059] font-black tracking-widest uppercase text-sm">Kontakt</h2>
               <h3 className="text-4xl md:text-6xl font-black text-[#16332C] leading-tight">Wir freuen uns auf <span className="text-[#C5A059]">Sie</span>!</h3>
               <p className="text-xl text-[#16332C]/70 leading-relaxed max-w-lg font-medium">
                 Haben Sie Fragen zu unseren Gerichten oder planen Sie eine private Veranstaltung? Schreiben Sie uns einfach eine Nachricht.
               </p>
            </div>

            <div className="grid gap-10">
               <div className="flex gap-8 group">
                  <div className="bg-[#FDF8F1] p-6 rounded-[32px] shadow-sm text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                     <Mail className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#16332C]/40 uppercase tracking-widest mb-1 leading-none">E-Mail Adresse</p>
                     <a href="mailto:hallo@restaurant-max.de" className="text-xl font-black text-[#16332C] hover:text-[#C5A059] transition-colors">hallo@restaurant-max.de</a>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="bg-[#FDF8F1] p-6 rounded-[32px] shadow-sm text-[#16332C] group-hover:bg-[#16332C] group-hover:text-white transition-all duration-300 group-hover:-rotate-6">
                     <Phone className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#16332C]/40 uppercase tracking-widest mb-1 leading-none">Telefon</p>
                     <a href="tel:+49123456789" className="text-xl font-black text-[#16332C] hover:text-[#16332C] transition-colors font-bold">+49 (0) 123 456 789</a>
                  </div>
               </div>

               <div className="flex gap-8 group">
                  <div className="bg-[#FDF8F1] p-6 rounded-[32px] shadow-sm text-[#5C4033] group-hover:bg-[#5C4033] group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-[10px] font-black text-[#16332C]/40 uppercase tracking-widest mb-1 leading-none">Anschrift</p>
                     <p className="text-xl font-black text-[#16332C]">Hauptstraße 42, 12345 Musterhausen</p>
                  </div>
               </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-[#16332C]/5">
               <p className="text-xs font-black text-[#16332C]/40 uppercase tracking-widest">Folgen Sie uns</p>
               <div className="flex gap-4">
                  {[
                    { icon: <Instagram />, label: "Instagram", color: "hover:bg-[#E1306C]" },
                    { icon: <Facebook />, label: "Facebook", color: "hover:bg-[#4267B2]" }
                  ].map((social, i) => (
                    <button key={i} className={`bg-[#FDF8F1] p-6 rounded-[28px] shadow-sm text-[#16332C] hover:text-white transition-all duration-300 hover:-translate-y-2 ${social.color}`} aria-label={social.label}>
                       {social.icon}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-[#FDF8F1] p-16 rounded-[60px] shadow-2xl relative overflow-hidden border-8 border-white">
             <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/5 rounded-full blur-[60px] -z-1" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#16332C]/5 rounded-full blur-[60px] -z-1" />
             
             <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-xs font-black text-[#16332C] uppercase tracking-widest ml-1">Ihr Name</label>
                      <Input placeholder="Max Mustermann" className="bg-white border-none rounded-3xl py-8 px-8 focus:ring-4 focus:ring-[#C5A059]/20 transition-shadow shadow-sm font-bold placeholder:font-medium placeholder:text-[#16332C]/30" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-xs font-black text-[#16332C] uppercase tracking-widest ml-1">E-Mail</label>
                      <Input type="email" placeholder="max@beispiel.de" className="bg-white border-none rounded-3xl py-8 px-8 focus:ring-4 focus:ring-[#C5A059]/20 transition-shadow shadow-sm font-bold placeholder:font-medium placeholder:text-[#16332C]/30" />
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-black text-[#16332C] uppercase tracking-widest ml-1">Anliegen</label>
                   <div className="relative">
                      <select className="w-full bg-white border-none rounded-3xl py-6 px-8 focus:ring-4 focus:ring-[#C5A059]/20 transition-shadow shadow-sm text-[#16332C]/60 appearance-none font-bold">
                         <option>Allgemeine Anfrage</option>
                         <option>Veranstaltung / Catering</option>
                         <option>Feedback</option>
                         <option>Sonstiges</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A059]">
                         <Star className="w-5 h-5 fill-current" />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-black text-[#16332C] uppercase tracking-widest ml-1">Ihre Nachricht</label>
                   <Textarea placeholder="Wie können wir Ihnen weiterhelfen?" className="bg-white border-none rounded-[32px] py-8 px-8 h-48 focus:ring-4 focus:ring-[#C5A059]/20 transition-shadow shadow-sm resize-none font-bold placeholder:font-medium placeholder:text-[#16332C]/30" />
                </div>

                <Button className="w-full bg-[#16332C] hover:bg-[#1E3A34] text-white rounded-3xl py-10 text-xl font-black group shadow-2xl shadow-[#16332C]/30 transition-all hover:scale-105 active:scale-95 border-none">
                   Nachricht senden
                   <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-[10px] text-center text-[#16332C]/40 uppercase font-black tracking-widest">
                   <Heart className="w-3 h-3 text-[#C5A059] fill-current" />
                   <span>Ihre Daten sind bei uns sicher</span>
                   <Heart className="w-3 h-3 text-[#16332C] fill-current" />
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

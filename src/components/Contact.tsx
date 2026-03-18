import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm">Kontakt</h2>
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3436]">Lassen Sie uns Ihre Geschichte erzählen.</h3>
               <p className="text-lg text-[#2D3436]/70 leading-relaxed max-w-lg">
                 Haben Sie Fragen zu meinen Leistungen oder möchten Sie direkt ein Shooting buchen? Ich freue mich auf Ihre Nachricht!
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-[#2D3436]/50 uppercase tracking-widest mb-1">E-Mail Adresse</p>
                     <a href="mailto:hello@mustermann-fotografie.de" className="text-lg font-bold text-[#2D3436] hover:text-[#C5A059] transition-colors">hello@mustermann-fotografie.de</a>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-[#2D3436]/50 uppercase tracking-widest mb-1">Telefon</p>
                     <a href="tel:+49123456789" className="text-lg font-bold text-[#2D3436] hover:text-[#C5A059] transition-colors">+49 (0) 123 456 789</a>
                  </div>
               </div>

               <div className="flex gap-6 group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-[#2D3436]/50 uppercase tracking-widest mb-1">Studio Adresse</p>
                     <p className="text-lg font-bold text-[#2D3436]">Fotogasse 12, 12345 Musterhausen</p>
                  </div>
               </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-[#2D3436]/10">
               <p className="text-xs font-bold text-[#2D3436]/50 uppercase tracking-widest">Folgen Sie mir</p>
               <div className="flex gap-4">
                  {[
                    { icon: <Instagram />, label: "Instagram" },
                    { icon: <Facebook />, label: "Facebook" },
                    { icon: <Linkedin />, label: "LinkedIn" }
                  ].map((social, i) => (
                    <button key={i} className="bg-white p-4 rounded-2xl shadow-sm text-[#2D3436] hover:text-[#C5A059] transition-colors" aria-label={social.label}>
                       {social.icon}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-3xl -z-1" />
             <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-[#2D3436] uppercase tracking-widest ml-1">Name</label>
                      <Input placeholder="Ihren Namen eingeben" className="bg-[#FAF9F6] border-none rounded-2xl py-6 px-6 focus:ring-2 focus:ring-[#C5A059] transition-shadow shadow-inner" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-[#2D3436] uppercase tracking-widest ml-1">E-Mail</label>
                      <Input type="email" placeholder="ihre@email.de" className="bg-[#FAF9F6] border-none rounded-2xl py-6 px-6 focus:ring-2 focus:ring-[#C5A059] transition-shadow shadow-inner" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-[#2D3436] uppercase tracking-widest ml-1">Anlass</label>
                   <select className="w-full bg-[#FAF9F6] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#C5A059] transition-shadow shadow-inner text-[#2D3436]/60 appearance-none">
                      <option>Wählen Sie eine Leistung</option>
                      <option>Porträtfotografie</option>
                      <option>Hochzeitsreportage</option>
                      <option>Business-Shooting</option>
                      <option>Eventbegleitung</option>
                      <option>Sonstiges</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-[#2D3436] uppercase tracking-widest ml-1">Nachricht</label>
                   <Textarea placeholder="Erzählen Sie mir von Ihrem Vorhaben..." className="bg-[#FAF9F6] border-none rounded-2xl py-6 px-6 h-40 focus:ring-2 focus:ring-[#C5A059] transition-shadow shadow-inner resize-none" />
                </div>

                <Button className="w-full bg-[#2D3436] hover:bg-[#3D4446] text-white rounded-2xl py-8 text-lg font-bold group shadow-xl transition-all">
                   Nachricht absenden
                   <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[10px] text-center text-[#2D3436]/40 uppercase font-bold tracking-widest">
                   Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz" className="underline hover:text-[#C5A059]">Datenschutzbestimmungen</a>.
                </p>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

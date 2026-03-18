import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, ExternalLink, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0A1A17] transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#800020]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#800020]/10 text-[#800020] dark:text-[#D4AF37] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-[#800020]/20">
                <Coffee className="w-4 h-4" />
                <span>Anfahrt & Kontakt</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] leading-[0.9]">
                Finden Sie <br />
                <span className="text-[#800020]">zu uns.</span>
              </h2>
              <p className="text-lg text-[#3D2B1F]/60 dark:text-[#FDF5E6]/60 font-medium font-serif italic max-w-lg leading-relaxed">
                Wir freuen uns auf Ihren Besuch im Herzen von Musterhausen. Entdecken Sie den Geschmack von Wien, direkt vor Ihrer Haustür.
              </p>
            </div>

            <div className="grid gap-10">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#800020]/10 dark:bg-[#D4AF37]/10 rounded-[28px] text-[#800020] dark:text-[#D4AF37] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300 shadow-xl border border-[#D4AF37]/20">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#D4AF37] uppercase tracking-widest">Adresse</p>
                  <p className="text-xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">Musterstraße 123, 12345 Musterhausen</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#800020]/10 dark:bg-[#D4AF37]/10 rounded-[28px] text-[#800020] dark:text-[#D4AF37] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300 shadow-xl border border-[#D4AF37]/20">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#D4AF37] uppercase tracking-widest">Öffnungszeiten</p>
                  <p className="text-xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">Di - So: 08:00 - 18:00 Uhr</p>
                  <p className="text-sm font-bold text-[#800020]/50 uppercase tracking-widest">Montag Ruhetag</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#800020]/10 dark:bg-[#D4AF37]/10 rounded-[28px] text-[#800020] dark:text-[#D4AF37] group-hover:bg-[#800020] group-hover:text-white transition-all duration-300 shadow-xl border border-[#D4AF37]/20">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#D4AF37] uppercase tracking-widest">Reservierung</p>
                  <p className="text-xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">+49 123 456789</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <Instagram className="w-6 h-6" />, label: "Instagram" },
                { icon: <Facebook className="w-6 h-6" />, label: "Facebook" },
                { icon: <Mail className="w-6 h-6" />, label: "Email" }
              ].map((social, i) => (
                <button
                  key={i}
                  className="w-16 h-16 rounded-full bg-[#800020]/5 dark:bg-white/5 flex items-center justify-center text-[#800020] dark:text-[#FDF5E6] hover:bg-[#800020] hover:text-white transition-all duration-300 border border-[#D4AF37]/20 shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#FDF5E6] dark:bg-zinc-900 p-10 md:p-14 rounded-[56px] shadow-3xl border border-[#D4AF37]/30 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#800020] rounded-full opacity-5 group-hover:scale-125 transition-transform duration-700 blur-2xl" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">Haben Sie Fragen?</h3>
                <p className="text-[#3D2B1F]/60 dark:text-[#FDF5E6]/60 font-medium">Ob besondere Tortenwünsche oder Eventanfragen – schreiben Sie uns einfach.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-[#800020]/50 ml-2">Name</label>
                  <Input 
                    placeholder="Ihr Name" 
                    className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-[#800020]/50 ml-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Ihre Email" 
                    className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#800020]/50 ml-2">Anliegen</label>
                <Textarea 
                  placeholder="Wie können wir Ihnen weiterhelfen?" 
                  className="bg-white dark:bg-zinc-800 border-none rounded-[32px] py-6 px-6 text-lg shadow-inner min-h-[180px] focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                />
              </div>

              <Button className="w-full bg-[#800020] hover:bg-[#4A0E0E] text-white rounded-[32px] py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#800020]/20 border-none group transition-all duration-500">
                Nachricht senden
                <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 pt-6">
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Ihre Privatsphäre ist uns wichtig</p>
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
              </div>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-[64px] overflow-hidden shadow-2xl relative group border-[12px] border-white dark:border-zinc-800 aspect-[21/9]">
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" 
            alt="Anfahrtsskizze" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white dark:bg-zinc-900 text-[#800020] hover:bg-[#D4AF37] hover:text-white rounded-full px-12 py-8 text-lg font-black uppercase tracking-widest shadow-3xl border-none transition-all duration-300">
                 <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Route berechnen
                    <ExternalLink className="ml-3 w-5 h-5" />
                 </a>
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#FAF6F0] dark:bg-[#0F0A08] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <div className="inline-block px-4 py-1 border border-[#D48806]/30 rounded-full text-[#D48806] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Kontakt & Standort
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#2D241E] dark:text-white mb-8 tracking-tighter uppercase italic-font-pub">Besuch <span className="text-[#D48806]">uns.</span></h2>
              <p className="text-xl text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif leading-relaxed max-w-md italic">
                Wir freuen uns auf deinen Besuch. Ob Feierabendbier oder Familienfeier – bei uns bist du richtig.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-white dark:bg-[#D48806]/10 p-4 rounded-xl border border-[#2D241E]/5 dark:border-[#D48806]/20 shadow-sm">
                    <MapPin className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#2D241E] dark:text-white text-[11px] uppercase tracking-widest mb-2">Anschrift</h4>
                    <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif leading-relaxed">Hauptstraße 1<br />12345 Musterhausen</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white dark:bg-[#D48806]/10 p-4 rounded-xl border border-[#2D241E]/5 dark:border-[#D48806]/20 shadow-sm">
                    <Phone className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#2D241E] dark:text-white text-[11px] uppercase tracking-widest mb-2">Reservierung</h4>
                    <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 font-serif leading-relaxed">+49 (0) 123 4567890</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-white dark:bg-[#D48806]/10 p-4 rounded-xl border border-[#2D241E]/5 dark:border-[#D48806]/20 shadow-sm">
                    <Clock className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#2D241E] dark:text-white text-[11px] uppercase tracking-widest mb-2">Wir sind da</h4>
                    <div className="space-y-1.5 text-sm font-serif text-[#2D241E]/60 dark:text-[#F5E6D3]/60">
                      <p><span className="text-[#D48806] font-bold">Di-Do:</span> 17:00 - 23:00</p>
                      <p><span className="text-[#D48806] font-bold">Fr-Sa:</span> 17:00 - 01:00</p>
                      <p><span className="text-[#D48806] font-bold">So:</span> 15:00 - 22:00</p>
                      <p className="text-red-500 font-black uppercase text-[9px] tracking-[0.2em] mt-3">Montag Ruhetag</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#2D241E]/5 dark:border-[#D48806]/10 flex gap-8">
              <a href="#" className="flex items-center gap-2 text-[#D48806] hover:text-[#2D241E] dark:hover:text-[#F5E6D3] transition-colors font-black text-[10px] uppercase tracking-[0.3em]">
                <Instagram size={16} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-[#D48806] hover:text-[#2D241E] dark:hover:text-[#F5E6D3] transition-colors font-black text-[10px] uppercase tracking-[0.3em]">
                <Facebook size={16} /> Facebook
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A0F0A] p-10 md:p-16 rounded-[2rem] text-[#2D241E] dark:text-[#F5E6D3] shadow-2xl border border-[#2D241E]/5 dark:border-[#D48806]/20 relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D48806]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight text-[#2D241E] dark:text-white">Tisch reservieren</h3>
            <p className="text-[#2D241E]/50 dark:text-[#F5E6D3]/50 font-serif mb-10 text-lg italic">Plane deinen Abend bei uns. Wir reservieren dir einen gemütlichen Platz.</p>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#D48806] uppercase tracking-[0.3em]">Dein Name</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full bg-[#FAF6F0] dark:bg-[#0F0A08] border border-[#2D241E]/10 dark:border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-all text-[#2D241E] dark:text-[#F5E6D3] placeholder:text-[#2D241E]/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#D48806] uppercase tracking-[0.3em]">Gästeanzahl</label>
                  <select className="w-full bg-[#FAF6F0] dark:bg-[#0F0A08] border border-[#2D241E]/10 dark:border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-all appearance-none text-[#2D241E] dark:text-[#F5E6D3]">
                    <option>2 Personen</option>
                    <option>4 Personen</option>
                    <option>6 Personen</option>
                    <option>Größere Gruppe (10+)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#D48806] uppercase tracking-[0.3em]">Wunschtermin</label>
                <input type="datetime-local" className="w-full bg-[#FAF6F0] dark:bg-[#0F0A08] border border-[#2D241E]/10 dark:border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-all text-[#2D241E] dark:text-[#F5E6D3] dark:[color-scheme:dark]" />
              </div>
              <button className="w-full bg-[#2D241E] dark:bg-[#D48806] text-white dark:text-[#1A0F0A] font-black py-6 rounded-sm shadow-2xl hover:bg-[#D48806] dark:hover:bg-[#F5E6D3] transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.4em] text-[11px]">
                Jetzt anfragen
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

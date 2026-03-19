import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0F0A08] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <div className="inline-block px-4 py-1 border border-[#D48806]/30 rounded-full text-[#D48806] text-xs font-black uppercase tracking-[0.3em] mb-6">
                Kontakt & Standort
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic-font-pub">Besuch <span className="text-[#D48806]">uns.</span></h2>
              <p className="text-xl text-[#F5E6D3]/60 font-serif leading-relaxed max-w-md">
                Wir freuen uns auf dich. Ob für ein schnelles Feierabendbier oder die große Sause – bei uns bist du richtig.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D48806]/10 p-4 rounded-xl border border-[#D48806]/20">
                    <MapPin className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">Hier findest du uns</h4>
                    <p className="text-[#F5E6D3]/60 font-serif">Hauptstraße 1<br />12345 Musterhausen</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-[#D48806]/10 p-4 rounded-xl border border-[#D48806]/20">
                    <Phone className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">Telefonisch erreichbar</h4>
                    <p className="text-[#F5E6D3]/60 font-serif">+49 (0) 123 4567890</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D48806]/10 p-4 rounded-xl border border-[#D48806]/20">
                    <Clock className="text-[#D48806] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">Öffnungszeiten</h4>
                    <div className="space-y-1 text-sm font-serif text-[#F5E6D3]/60">
                      <p><span className="text-[#D48806]">Di-Do:</span> 17:00 - 23:00</p>
                      <p><span className="text-[#D48806]">Fr-Sa:</span> 17:00 - 01:00</p>
                      <p><span className="text-[#D48806]">So:</span> 15:00 - 22:00</p>
                      <p className="text-red-400 opacity-80 mt-2 font-bold uppercase text-[10px] tracking-widest">Montag Ruhetag</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D48806]/10 flex gap-4">
              <a href="#" className="flex items-center gap-2 text-[#D48806] hover:text-[#F5E6D3] transition-colors font-black text-xs uppercase tracking-widest">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-[#D48806] hover:text-[#F5E6D3] transition-colors font-black text-xs uppercase tracking-widest">
                <Facebook size={18} /> Facebook
              </a>
            </div>
          </div>

          <div className="bg-[#1A0F0A] p-10 md:p-16 rounded-[2rem] text-[#F5E6D3] shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-[#D48806]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D48806]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight text-white">Tisch reservieren</h3>
            <p className="text-[#F5E6D3]/50 font-serif mb-10 text-lg">Plane deinen Abend bei uns. Wir halten dir einen gemütlichen Platz frei.</p>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-[#D48806] uppercase tracking-[0.2em]">Dein Name</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full bg-[#0F0A08] border border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-colors text-[#F5E6D3] placeholder:text-white/10" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-[#D48806] uppercase tracking-[0.2em]">Wie viele seid ihr?</label>
                  <select className="w-full bg-[#0F0A08] border border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-colors appearance-none text-[#F5E6D3]">
                    <option>2 Personen</option>
                    <option>4 Personen</option>
                    <option>6 Personen</option>
                    <option>Größere Gruppe (10+)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-[#D48806] uppercase tracking-[0.2em]">Wunschtermin & Uhrzeit</label>
                <input type="datetime-local" className="w-full bg-[#0F0A08] border border-[#D48806]/20 rounded-sm px-6 py-4 focus:outline-none focus:border-[#D48806] transition-colors text-[#F5E6D3] [color-scheme:dark]" />
              </div>
              <button className="w-full bg-[#D48806] text-[#1A0F0A] font-black py-6 rounded-sm shadow-2xl hover:bg-[#F5E6D3] transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.3em] text-xs">
                Reservierung anfragen
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

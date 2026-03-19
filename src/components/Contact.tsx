import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2D241E] mb-8">Komm <span className="text-[#E6B325]">vorbei!</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="bg-[#FFFDF5] p-4 rounded-2xl border border-[#2D241E]/5 shadow-sm">
                  <MapPin className="text-[#E6B325] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D241E] text-lg">Adresse</h4>
                  <p className="text-[#2D241E]/60">Hauptstraße 1<br />12345 Musterhausen</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-[#FFFDF5] p-4 rounded-2xl border border-[#2D241E]/5 shadow-sm">
                  <Phone className="text-[#E6B325] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D241E] text-lg">Telefon</h4>
                  <p className="text-[#2D241E]/60">+49 (0) 123 4567890</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-[#FFFDF5] p-4 rounded-2xl border border-[#2D241E]/5 shadow-sm">
                  <Mail className="text-[#E6B325] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D241E] text-lg">E-Mail</h4>
                  <p className="text-[#2D241E]/60">moin@mustermanns-braustube.de</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-[#2D241E] text-xl">Öffnungszeiten</h4>
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                <div className="text-[#2D241E]/60">Di - Do:</div>
                <div className="font-bold text-[#2D241E]">17:00 - 23:00</div>
                <div className="text-[#2D241E]/60">Fr - Sa:</div>
                <div className="font-bold text-[#2D241E]">17:00 - 01:00</div>
                <div className="text-[#2D241E]/60">So:</div>
                <div className="font-bold text-[#2D241E]">15:00 - 22:00</div>
                <div className="text-[#2D241E]/60">Mo:</div>
                <div className="font-bold text-red-500">Ruhetag</div>
              </div>
            </div>
          </div>

          <div className="bg-[#2D241E] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6B325]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h3 className="text-3xl font-black mb-6">Reserviere deinen Tisch</h3>
            <p className="text-white/60 mb-10">Größere Gruppen ab 10 Personen bitte telefonisch anfragen.</p>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase">Name</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E6B325] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase">Gäste</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E6B325] transition-colors appearance-none">
                    <option>2 Personen</option>
                    <option>3 Personen</option>
                    <option>4 Personen</option>
                    <option>5+ Personen</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 uppercase">Datum & Zeit</label>
                <input type="datetime-local" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E6B325] transition-colors" />
              </div>
              <button className="w-full bg-[#E6B325] text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#d4a21e] transition-all flex items-center justify-center gap-3 group">
                Jetzt Reservierungsanfrage senden
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Calendar, Music, Trophy, Star } from 'lucide-react';

const events = [
  {
    date: 'Jeden Dienstag',
    title: 'Pub Quiz Nacht',
    desc: 'Teste dein Wissen und gewinne eine Runde Freibier für dein Team!',
    icon: <Trophy className="w-8 h-8 text-[#E6B325]" />,
    time: 'Ab 19:30 Uhr'
  },
  {
    date: '15. Oktober',
    title: 'Live: The Mustard Boys',
    desc: 'Bester Folk & Blues direkt aus der Region. Eintritt frei!',
    icon: <Music className="w-8 h-8 text-[#E6B325]" />,
    time: 'Einlass 20:00 Uhr'
  },
  {
    date: 'Jeden Freitag',
    title: 'Happy Hour Specials',
    desc: 'Alle Cocktails und Longdrinks zum halben Preis bis 22:00 Uhr.',
    icon: <Star className="w-8 h-8 text-[#E6B325]" />,
    time: '18:00 - 22:00 Uhr'
  }
];

export const Events = () => {
  return (
    <section id="events" className="py-24 px-6 bg-[#FFFDF5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2D241E] mb-4">Events & <span className="text-[#E6B325]">Highlights</span></h2>
            <p className="text-[#2D241E]/60 text-lg max-w-xl">In der Braustube ist immer etwas los. Verpasse keines unserer legendären Events!</p>
          </div>
          <button className="flex items-center gap-2 text-[#2D241E] font-bold hover:text-[#E6B325] transition-colors group">
            Alle Termine ansehen 
            <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#2D241E]/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6">{event.icon}</div>
              <div className="text-[#E6B325] font-bold text-sm uppercase tracking-widest mb-2">{event.date}</div>
              <h3 className="text-2xl font-bold text-[#2D241E] mb-4">{event.title}</h3>
              <p className="text-[#2D241E]/60 mb-6 leading-relaxed">{event.desc}</p>
              <div className="pt-6 border-t border-[#2D241E]/5 text-[#2D241E] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

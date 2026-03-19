import React from 'react';
import { Calendar, Music, Trophy, Star, Sparkles } from 'lucide-react';

const events = [
  {
    date: 'Jeden Dienstag',
    title: 'Pub Quiz Nacht',
    desc: 'Teste dein Wissen und gewinne eine Runde Freibier für dein Team! Anmeldung ab 19 Uhr.',
    icon: <Trophy className="w-8 h-8 text-[#1A0F0A]" />,
    time: 'Start 19:30 Uhr'
  },
  {
    date: 'Fr, 25. Oktober',
    title: 'Live: The Blues Brothers Tribute',
    desc: 'Eine Nacht voller Soul, R&B und natürlich schwarzer Sonnenbrillen. Eintritt frei!',
    icon: <Music className="w-8 h-8 text-[#1A0F0A]" />,
    time: 'Einlass 20:00 Uhr'
  },
  {
    date: 'Jeden Samstag',
    title: 'Late Night Beats',
    desc: 'Unser Resident DJ spielt die besten Classic Rock & Soul Platten bis in den Morgen.',
    icon: <Sparkles className="w-8 h-8 text-[#1A0F0A]" />,
    time: 'Ab 22:00 Uhr'
  }
];

export const Events = () => {
  return (
    <section id="events" className="py-32 px-6 bg-white dark:bg-[#0A0706] relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D48806]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-block px-4 py-1 border border-[#D48806]/30 rounded-full text-[#D48806] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Vormerken!
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2D241E] dark:text-white mb-6 uppercase italic-font-pub tracking-tight">Events & <span className="text-[#D48806]">Highlights</span></h2>
            <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/60 text-xl font-serif max-w-xl italic">Erlebe unvergessliche Abende in bester Gesellschaft.</p>
          </div>
          <button className="flex items-center gap-3 text-[#D48806] font-black text-[10px] uppercase tracking-[0.4em] hover:text-[#2D241E] dark:hover:text-white transition-all group">
            Alle Termine 
            <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="group relative bg-[#FAF6F0] dark:bg-[#1A0F0A] p-10 rounded-2xl border border-[#2D241E]/5 dark:border-[#D48806]/10 hover:border-[#D48806]/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="bg-[#D48806] w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                {event.icon}
              </div>
              <div className="text-[#D48806] font-black text-[10px] uppercase tracking-[0.5em] mb-4">{event.date}</div>
              <h3 className="text-2xl font-black text-[#2D241E] dark:text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-[#D48806] transition-colors">{event.title}</h3>
              <p className="text-[#2D241E]/60 dark:text-[#F5E6D3]/50 font-serif italic text-lg leading-relaxed mb-10">{event.desc}</p>
              
              <div className="pt-8 border-t border-[#2D241E]/5 dark:border-[#D48806]/5 flex items-center justify-between">
                <span className="text-[#2D241E] dark:text-[#F5E6D3] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                  {event.time}
                </span>
                <Star className="w-4 h-4 text-[#D48806]/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

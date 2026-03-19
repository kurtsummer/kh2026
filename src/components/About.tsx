import React from 'react';
import { Heart, Beer, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#E6B325]/20 rounded-[2rem] blur-2xl group-hover:bg-[#E6B325]/30 transition-all duration-500" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
                alt="Max Mustermann" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden md:block">
              <p className="text-[#2D241E] italic font-medium leading-relaxed">
                "Ein Pub ist mehr als nur ein Ort zum Trinken – es ist das Wohnzimmer unserer Stadt."
              </p>
              <p className="mt-4 font-bold text-[#E6B325]">— Max Mustermann</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#2D241E]">
                Tradition trifft auf <br />
                <span className="text-[#E6B325]">Musterhäuser Gemütlichkeit</span>
              </h2>
              <p className="text-lg text-[#2D241E]/70 leading-relaxed">
                Max Mustermann eröffnete die Braustube im Herzen von Musterhausen mit einer einfachen Vision: Einen Ort zu schaffen, an dem sich jeder – vom Handwerker bis zum Anwalt – wie zu Hause fühlt.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: <Heart className="w-6 h-6 text-white" />,
                  title: 'Mit Liebe geführt',
                  desc: 'Ein Familienbetrieb in zweiter Generation mit Herzblut.'
                },
                {
                  icon: <Beer className="w-6 h-6 text-white" />,
                  title: 'Echtes Handwerk',
                  desc: 'Wir führen 12 verschiedene Fassbiere und regionale Spezialitäten.'
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: 'Gemeinschaft',
                  desc: 'Regelmäßige Stammtische und Platz für über 150 Gäste.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-[#E6B325] p-3 rounded-2xl shadow-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#2D241E]">{item.title}</h3>
                    <p className="text-[#2D241E]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { MapPin, Quote, Award, Users, CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="ueber-mich" className="bg-slate-50 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] aspect-[4/5] max-w-lg mx-auto lg:mx-0 group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Max Mustermann - Immobilienexperte"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 z-20 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Erfahrung</p>
                  <p className="text-2xl font-black text-slate-900">15+ Jahre</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Zufriedenheit</p>
                  <p className="text-2xl font-black text-slate-900">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                Der Kopf hinter der Agentur
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Ihr Experte für <br />
                <span className="text-amber-500">Immobilien in Musterhausen</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                "Immobilien sind mehr als nur Steine und Mörtel. Sie sind Lebensräume, Altersvorsorge und Träume. Mein Ziel ist es, diese Werte für Sie zu sichern."
              </p>
              
              <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                <p>
                  Mein Name ist Max Mustermann, und ich bin seit über 15 Jahren als Makler in Musterhausen tätig. In dieser Zeit habe ich hunderte von Menschen dabei begleitet, ihr perfektes Zuhause zu finden oder ihre Immobilie erfolgreich zu vermitteln.
                </p>
                <p>
                  Was mich auszeichnet? Absolute Diskretion, eine tiefgreifende Marktkenntnis der Region und eine persönliche Betreuung, die weit über den Standard hinausgeht. Bei mir sind Sie kein Aktenzeichen, sondern ein Partner auf Augenhöhe.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {[
                "Lokale Expertise in Musterhausen",
                "Individuelle Vermarktungsstrategien",
                "Transparentes Prozessmanagement",
                "Geprüfte Wertermittlung"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl flex items-center gap-6 group hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-slate-900 font-black text-xl mb-1">Standort Musterhausen</p>
                <p className="text-slate-500 font-medium leading-tight">
                  Hauptstraße 42, 12345 Musterhausen <br />
                  Direkt am Marktplatz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

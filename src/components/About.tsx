import { Award, Heart, CheckCircle, ShieldCheck } from "lucide-react";

export const About = () => {
  return (
    <section id="ueber-mich" className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-[4rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000"
                alt="Max Mustermann Podologe"
                className="w-full h-full object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <p className="text-white font-bold text-lg leading-tight">
                  "Ihre Füße sind das Fundament Ihrer Gesundheit."
                </p>
                <p className="text-cyan-100 text-sm font-semibold mt-2 uppercase tracking-widest">
                  — Max Mustermann, Inhaber
                </p>
              </div>
            </div>
            
            {/* Stats / Badges Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl shadow-cyan-100 border border-slate-50 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">15+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Jahre Erfahrung</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-cyan-600 font-black uppercase tracking-widest text-sm bg-cyan-50 px-4 py-2 rounded-full inline-block mb-4">
                Über die Praxis
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Kompetenz, Erfahrung und <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">
                  echte Leidenschaft.
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Mein Name ist Max Mustermann, und ich bin seit über 15 Jahren als staatlich geprüfter Podologe tätig. In meiner Praxis in Musterhausen verbinde ich medizinisches Fachwissen mit einer einfühlsamen Betreuung.
            </p>

            <div className="grid gap-6">
              {[
                { 
                  icon: <CheckCircle className="w-6 h-6" />, 
                  title: "Staatlich geprüfte Podologie", 
                  desc: "Hochqualifizierte medizinische Ausbildung und ständige Fortbildung.",
                  color: "bg-cyan-100 text-cyan-600"
                },
                { 
                  icon: <ShieldCheck className="w-6 h-6" />, 
                  title: "Modernste Standards", 
                  desc: "Wir arbeiten mit modernsten Geräten unter Einhaltung strengster Hygienerichtlinien.",
                  color: "bg-teal-100 text-teal-600"
                },
                { 
                  icon: <Heart className="w-6 h-6" />, 
                  title: "Individuelle Beratung", 
                  desc: "Jeder Fuß ist einzigartig – wir nehmen uns Zeit für Ihre Bedürfnisse.",
                  color: "bg-blue-100 text-blue-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
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

import { Award, Heart, Users, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1e598c6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Das Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-indigo-900 p-10 rounded-[2.5rem] shadow-2xl max-w-[280px] hidden md:block z-20">
                <p className="text-white font-black text-5xl mb-2 italic">15+</p>
                <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Jahre Erfahrung in der Allgemeinmedizin</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-indigo-600 font-extrabold tracking-[0.2em] uppercase text-sm mb-4">Ihre Praxis</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Menschlichkeit & <br />
              <span className="text-indigo-600">Fachkompetenz</span>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              Seit über 15 Jahren ist Dr. Max Mustermann als Hausarzt in Musterhausen tätig. 
              Wir verstehen uns als Ihr vertrauensvoller Partner in allen Gesundheitsfragen – von der Akutversorgung bis zur Prävention.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-indigo-600 transition-colors">
                  <GraduationCap className="text-indigo-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Expertise</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Stetige Fortbildungen nach neuesten Standards.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-indigo-600 transition-colors">
                  <Users className="text-indigo-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Patientennah</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Empathie und Zuhören sind unsere Basis.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-indigo-600 transition-colors">
                  <Heart className="text-indigo-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Ganzheitlich</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Der Mensch als Ganzes steht im Fokus.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-indigo-600 transition-colors">
                  <Award className="text-indigo-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Vertrauen</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">Langjährige Bindung zu unseren Patienten.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

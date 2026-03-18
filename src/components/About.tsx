import { Award, Heart, Users, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="ueber-uns" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1e598c6?q=80&w=1000&auto=format&fit=crop" 
                  alt="Das Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-xl max-w-[250px] hidden md:block">
                <p className="text-teal-600 font-bold text-4xl mb-1">15+</p>
                <p className="text-slate-500 text-sm font-medium">Jahre Erfahrung in der Allgemeinmedizin</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Über uns</h2>
            <p className="text-4xl md:text-5xl font-bold text-teal-950 mb-8">
              Menschlichkeit & <br />
              <span className="text-teal-600">Medizinische Exzellenz</span>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Seit über 15 Jahren ist Dr. Max Mustermann als Hausarzt in Musterhausen tätig. 
              Unsere Praxis versteht sich als erste Anlaufstelle für alle gesundheitlichen Fragen. 
              Wir nehmen uns Zeit für Sie und betrachten Medizin ganzheitlich.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Fachkompetenz</h4>
                  <p className="text-slate-500 text-sm">Regelmäßige Fortbildungen nach neuesten Standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Users className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Patientennah</h4>
                  <p className="text-slate-500 text-sm">Wir sprechen Ihre Sprache und hören Ihnen zu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                  <Heart className="text-rose-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Ganzheitlich</h4>
                  <p className="text-slate-500 text-sm">Prävention und Therapie Hand in Hand.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Zertifiziert</h4>
                  <p className="text-slate-500 text-sm">Qualitätsmanagement nach höchsten Richtlinien.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

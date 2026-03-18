import { Award, Home, Users, CheckCircle2, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="ueber-uns" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-[16px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1560520449-796da75ef6e2?auto=format&fit=crop&q=80&w=1000"
                  alt="Modernes Büro"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-slate-900 p-12 rounded-[3rem] shadow-2xl max-w-[320px] hidden md:block z-20 group hover:bg-amber-500 transition-colors duration-500">
                <p className="text-white font-black text-6xl mb-3 italic group-hover:scale-110 transition-transform">15+</p>
                <p className="text-slate-400 group-hover:text-white text-sm font-black uppercase tracking-[0.2em] leading-relaxed transition-colors">Jahre Erfahrung am Markt von Musterhausen</p>
              </div>
              {/* Decorative Blur */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -z-10" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-4">Ihre Immobilienagentur</h2>
              <p className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Tradition trifft <br />
                <span className="text-amber-500">Innovation</span>
              </p>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Seit über 15 Jahren ist Max Mustermann die erste Adresse für anspruchsvolle Immobilien in Musterhausen. Wir kombinieren klassische Maklerwerte mit modernsten digitalen Vermarktungstools.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-4 group p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-2">Marktkenntnis</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">Präzise Analysen und tiefe Einblicke in regionale Trends.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-2">Netzwerk</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">Exklusiver Zugang zu Off-Market Objekten und Investoren.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <Home className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-2">Full-Service</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">Begleitung vom Erstgespräch bis zum Notartermin.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 group p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-2">Vertrauen</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">Höchste Diskretion und Zuverlässigkeit in jeder Phase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

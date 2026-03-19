import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#f8fafc]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50/50 rounded-l-[10rem] -z-10 hidden lg:block" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-100 rounded-full blur-3xl -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-cyan-50 text-cyan-700 font-bold text-sm tracking-wide">
            <Star className="w-4 h-4 fill-cyan-500 text-cyan-500" />
            Professionelle Fusspflege in Musterhausen
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Gesunde Füße für ein <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">
              leichtes Lebensgefühl.
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Willkommen in der Praxis von <span className="text-slate-900 font-bold">Max Mustermann</span>. Wir bieten Ihnen medizinische und kosmetische Fusspflege auf höchstem Niveau – für Ihr Wohlbefinden bei jedem Schritt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="rounded-2xl h-16 px-8 text-lg font-bold bg-cyan-600 hover:bg-cyan-700 shadow-xl shadow-cyan-200 transition-all hover:scale-105 active:scale-95 group"
              onClick={() => {
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Termin vereinbaren
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-2xl h-16 px-8 text-lg font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
              onClick={() => {
                document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Unsere Leistungen
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700">Staatlich geprüft</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-700">Höchste Hygiene</span>
            </div>
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-right duration-1000 delay-200">
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1519415510236-85591199260e?auto=format&fit=crop&q=80&w=1000" 
              alt="Foot Care Treatment"
              className="w-full h-full object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <p className="text-white font-bold text-lg leading-tight">
                "Gesunde Füße sind die Basis für Ihre Mobilität und Lebensqualität."
              </p>
              <p className="text-cyan-100 text-sm font-semibold mt-2 uppercase tracking-widest">
                — Max Mustermann
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

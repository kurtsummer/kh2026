import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-indigo-100">
            <ShieldCheck className="w-4 h-4" />
            Vertrauensvolle hausärztliche Betreuung
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Ihre Gesundheit <br />
            <span className="text-indigo-600">in besten Händen.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            Willkommen in der Hausarztpraxis Dr. Max Mustermann. Wir begleiten Sie mit modernster Medizin und menschlicher Wärme in Musterhausen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl px-10 h-16 text-lg font-bold shadow-xl shadow-indigo-200 transition-all hover:scale-105 active:scale-95">
              Online-Termin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-white hover:border-indigo-600 rounded-2xl px-10 h-16 text-lg font-bold gap-2 transition-all shadow-sm">
              <Phone className="w-5 h-5 text-indigo-600" />
              01234 / 56789
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md border border-slate-50">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none mb-1">Status: Geöffnet</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Bis 12:00 Uhr für Sie da</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr. Max Mustermann" 
              className="w-full h-[650px] object-cover"
            />
          </div>
          {/* Professional Accents */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          
          {/* Trust Badge Floating */}
          <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 z-20 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Zertifizierte Praxis</p>
                <p className="text-xs text-slate-500">Qualitätsmanagement 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

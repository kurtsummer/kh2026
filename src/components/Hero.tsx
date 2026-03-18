import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Ihre Gesundheit in guten Händen
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-teal-950 leading-tight mb-6">
            Hausarztpraxis <br />
            <span className="text-teal-600">Max Mustermann</span>
          </h1>
          <p className="text-lg text-teal-800/80 mb-8 max-w-lg leading-relaxed">
            Wir bieten Ihnen eine umfassende hausärztliche Betreuung in familiärer Atmosphäre. 
            Moderne Medizin trifft auf individuelle Beratung in Musterhausen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl px-8 h-14 text-lg">
              Termin vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 rounded-2xl px-8 h-14 text-lg gap-2">
              <Phone className="w-5 h-5" />
              01234 / 56789
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-teal-900 leading-none">Heute geöffnet</p>
                <p className="text-xs text-teal-700">08:00 - 12:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr. Max Mustermann" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-50 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
        </div>
      </div>
    </section>
  );
};

import { properties } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const PropertiesSection = () => {
  return (
    <section id="immobilien" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-amber-200">
              <Sparkles className="w-4 h-4" />
              Unsere Highlights
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Aktuelle Immobilien <br />
              <span className="text-amber-500">in Musterhausen</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Entdecken Sie eine exklusive Auswahl an Immobilien, die perfekt zu Ihrem Lebensstil passen. Von der modernen Stadtwohnung bis zur luxuriösen Villa am See.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-2xl h-16 px-10 border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-lg font-bold gap-3 transition-all">
            Alle Immobilien ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-20 md:hidden">
          <Button className="w-full h-16 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-lg font-bold gap-3 shadow-xl shadow-slate-200">
            Alle Immobilien ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

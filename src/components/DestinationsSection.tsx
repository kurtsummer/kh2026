import { useState } from "react";
import { destinations, Destination } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/DestinationCard";
import { DestinationDetails } from "@/components/DestinationDetails";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export const DestinationsSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="reiseziele" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-amber-400 dark:bg-amber-500 text-sky-950 dark:text-sky-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-amber-400/20">
              Top Reiseziele 2024
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
              Inspiration für <br />
              <span className="text-sky-600 dark:text-sky-400 italic">Ihren Urlaub</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md text-xl font-bold leading-relaxed mb-2">
            Entdecken Sie unsere handverlesenen Top-Angebote für die kommende Saison. Exklusiv kuratiert von Max Mustermann.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.slice(0, 6).map((item) => (
            <DestinationCard 
              key={item.id} 
              item={item} 
              onShowDetails={(item) => setSelectedDestination(item)} 
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/reiseziele">
            <Button size="lg" className="bg-sky-600 dark:bg-sky-500 hover:bg-sky-700 dark:hover:bg-sky-600 text-white rounded-[2.5rem] px-16 h-24 text-2xl font-black transition-all shadow-2xl shadow-sky-200 dark:shadow-sky-900/20 group active:scale-95">
              Alle Reiseziele weltweit entdecken
              <Compass className="ml-4 w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
            </Button>
          </Link>
        </div>
      </div>

      <DestinationDetails 
        item={selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
      />
    </section>
  );
};

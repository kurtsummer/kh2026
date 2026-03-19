import { useState } from "react";
import { destinations, Destination } from "@/data/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, ArrowUpRight, CheckCircle2, Plane, Palmtree, Map, Ship } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const DestinationsSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="reiseziele" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em]">
              Top Reiseziele 2024
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Inspiration für <br />
              <span className="text-sky-600">Ihren Urlaub</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-xl font-bold leading-relaxed mb-2">
            Entdecken Sie unsere handverlesenen Top-Angebote für die kommende Saison. Exklusiv kuratiert von Max Mustermann.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[3rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none font-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest shadow-xl">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1 bg-amber-400 text-white px-3 py-1.5 rounded-xl font-black text-xs shadow-xl w-fit">
                    <Star className="w-3 h-3 fill-current" />
                    {item.rating}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <div className="flex items-center gap-2 text-white/80 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    {item.location}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter leading-none">{item.title}</h3>
                </div>
              </div>

              <div className="p-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-400 font-black uppercase tracking-widest text-xs">
                    <Clock className="w-5 h-5 text-sky-500" />
                    {item.duration}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Ab p.P.</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">€{item.price.toLocaleString('de-DE')}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  onClick={() => setSelectedDestination(item)}
                  className="w-full h-16 bg-slate-900 hover:bg-sky-600 text-white rounded-[1.5rem] text-lg font-black gap-3 transition-all group shadow-xl"
                >
                  Details ansehen
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button size="lg" variant="outline" className="border-4 border-slate-200 text-slate-900 hover:border-sky-600 hover:text-sky-600 rounded-[2rem] px-12 h-20 text-xl font-black transition-all">
            Alle Reiseziele entdecken
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedDestination} onOpenChange={(open) => !open && setSelectedDestination(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[3rem] border-none shadow-3xl bg-white">
          {selectedDestination && (
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-full overflow-hidden">
                <img 
                  src={selectedDestination.imageUrl} 
                  alt={selectedDestination.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                   <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <span className="font-bold">{selectedDestination.location}</span>
                   </div>
                   <h2 className="text-4xl font-black tracking-tighter italic leading-none">{selectedDestination.title}</h2>
                </div>
              </div>

              <div className="p-12 space-y-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Kategorie</p>
                    <div className="flex items-center gap-2 font-black text-sky-600 text-lg">
                       {selectedDestination.category === 'Strand' && <Palmtree className="w-5 h-5" />}
                       {selectedDestination.category === 'Stadt' && <Map className="w-5 h-5" />}
                       {selectedDestination.category === 'Kreuzfahrt' && <Ship className="w-5 h-5" />}
                       {selectedDestination.category === 'Abenteuer' && <Plane className="w-5 h-5 rotate-45" />}
                       {selectedDestination.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Bewertung</p>
                    <div className="flex items-center gap-2 font-black text-amber-500 text-2xl">
                       <Star className="w-6 h-6 fill-amber-500" />
                       {selectedDestination.rating}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Über diese Reise</h3>
                  <p className="text-slate-500 font-bold leading-relaxed text-lg">
                    {selectedDestination.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Ihre Highlights</h3>
                  <div className="grid gap-4">
                    {selectedDestination.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 border-2 border-sky-100 group-hover:bg-sky-600 group-hover:border-sky-600 transition-all">
                           <CheckCircle2 className="w-4 h-4 text-sky-600 group-hover:text-white" />
                        </div>
                        <span className="font-bold text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t-4 border-slate-50 flex items-center justify-between gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Preis p.P.</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">€{selectedDestination.price.toLocaleString('de-DE')}</p>
                  </div>
                  <Button 
                    className="h-20 px-10 bg-sky-600 hover:bg-sky-700 text-white rounded-[2rem] text-xl font-black gap-4 shadow-2xl shadow-sky-200 transition-all active:scale-95 flex-1"
                    onClick={() => {
                        setSelectedDestination(null);
                        const contact = document.getElementById('kontakt');
                        contact?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Jetzt Anfragen
                    <ArrowUpRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

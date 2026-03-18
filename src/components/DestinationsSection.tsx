import { destinations } from "@/data/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, ArrowUpRight } from "lucide-react";

export const DestinationsSection = () => {
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

                <Button className="w-full h-16 bg-slate-900 hover:bg-sky-600 text-white rounded-[1.5rem] text-lg font-black gap-3 transition-all group shadow-xl">
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
    </section>
  );
};

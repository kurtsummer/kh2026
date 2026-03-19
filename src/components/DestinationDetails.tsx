import { Destination } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowUpRight, CheckCircle2, Plane, Palmtree, Map, Ship, Heart, Leaf } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface DestinationDetailsProps {
  item: Destination | null;
  onClose: () => void;
}

export const DestinationDetails = ({ item, onClose }: DestinationDetailsProps) => {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[3rem] border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] bg-white dark:bg-slate-900 animate-in zoom-in-95 duration-300">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[400px] md:h-full overflow-hidden group">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
               <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-sky-400" />
                  <span className="font-black text-xl tracking-tight">{item.location}</span>
               </div>
               <h2 className="text-5xl font-black tracking-tighter italic leading-none">{item.title}</h2>
               <div className="mt-6 flex gap-3">
                 <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/20">
                   {item.continent}
                 </span>
               </div>
            </div>
          </div>

          <div className="p-12 space-y-10 bg-white dark:bg-slate-900 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Kategorie</p>
                <div className="flex items-center gap-3 font-black text-sky-600 dark:text-sky-400 text-xl italic">
                   {item.category === 'Strand' && <Palmtree className="w-6 h-6" />}
                   {item.category === 'Stadt' && <Map className="w-6 h-6" />}
                   {item.category === 'Kreuzfahrt' && <Ship className="w-6 h-6" />}
                   {item.category === 'Abenteuer' && <Plane className="w-6 h-6 rotate-45" />}
                   {item.category === 'Wellness' && <Heart className="w-6 h-6" />}
                   {item.category === 'Natur' && <Leaf className="w-6 h-6" />}
                   {item.category}
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Bewertung</p>
                <div className="flex items-center gap-2 font-black text-amber-500 text-3xl">
                   <Star className="w-8 h-8 fill-amber-500" />
                   {item.rating}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter italic">Ihre Traumreise</h3>
              <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter italic">Highlights</h3>
              <div className="grid gap-5">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center shrink-0 border-4 border-sky-100 dark:border-sky-500/20 group-hover:bg-sky-600 group-hover:border-sky-600 transition-all duration-300">
                       <CheckCircle2 className="w-5 h-5 text-sky-600 group-hover:text-white" />
                    </div>
                    <span className="font-black text-slate-700 dark:text-slate-300 text-lg tracking-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t-4 border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-10">
              <div className="space-y-1 w-full sm:w-auto">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Ab-Preis pro Person</p>
                <p className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">€{item.price.toLocaleString('de-DE')}</p>
              </div>
              <Button 
                className="h-24 px-12 bg-sky-600 hover:bg-sky-700 text-white rounded-[2.5rem] text-2xl font-black gap-4 shadow-2xl shadow-sky-200 dark:shadow-sky-900/40 transition-all active:scale-95 w-full sm:w-auto flex-1 group"
                onClick={() => {
                    onClose();
                    const contact = document.getElementById('kontakt');
                    if (contact) {
                      contact.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = "/#kontakt";
                    }
                }}
              >
                Anfrage senden
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

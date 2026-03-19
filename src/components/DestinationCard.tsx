import { Destination } from "@/data/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  item: Destination;
  onShowDetails: (item: Destination) => void;
}

export const DestinationCard = ({ item, onShowDetails }: DestinationCardProps) => {
  return (
    <div 
      className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 hover:-translate-y-4"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <Badge className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-white border-none font-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest shadow-xl">
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
          <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest text-xs">
            <Clock className="w-5 h-5 text-sky-500" />
            {item.duration}
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Ab p.P.</p>
            <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">€{item.price.toLocaleString('de-DE')}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-black text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-lg uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>

        <Button 
          onClick={() => onShowDetails(item)}
          className="w-full h-16 bg-slate-900 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-700 text-white rounded-[1.5rem] text-lg font-black gap-3 transition-all group shadow-xl"
        >
          Details ansehen
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

import { Bed, Bath, Maximize, MapPin, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Card className="group overflow-hidden rounded-3xl border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={property.type === 'sale' ? "bg-amber-500" : "bg-blue-600"}>
            {property.type === 'sale' ? 'Verkauf' : 'Vermietung'}
          </Badge>
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-slate-900 font-bold border-none">
            {property.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-amber-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{property.location}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
          {property.title}
        </h3>
        
        <div className="flex justify-between items-center border-t border-slate-50 pt-4 mb-4">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Bed className="w-4 h-4" />
            <span className="text-sm font-semibold">{property.bedrooms} Zi.</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Bath className="w-4 h-4" />
            <span className="text-sm font-semibold">{property.bathrooms} Bad</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Maximize className="w-4 h-4" />
            <span className="text-sm font-semibold">{property.area} m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-auto">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preis</span>
          <span className="text-2xl font-black text-slate-900">{formattedPrice}{property.type === 'rent' && '/mtl.'}</span>
        </div>
        <Button className="rounded-full bg-slate-900 hover:bg-amber-600 text-white transition-colors px-6 font-bold shadow-lg shadow-slate-200">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

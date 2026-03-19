import { useState, useMemo, useEffect } from "react";
import { destinations, Destination } from "@/data/destinations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { DestinationDetails } from "@/components/DestinationDetails";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, Filter, X, Palmtree, Map, Ship, Plane, Heart, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Strand', 'Stadt', 'Kreuzfahrt', 'Abenteuer', 'Wellness', 'Natur'];
  const continents = ['Europa', 'Asien', 'Afrika', 'Nordamerika', 'Südamerika', 'Australien', 'Antarktis'];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(d => {
      const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           d.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           d.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || d.category === selectedCategory;
      const matchesContinent = !selectedContinent || d.continent === selectedContinent;
      return matchesSearch && matchesCategory && matchesContinent;
    });
  }, [searchTerm, selectedCategory, selectedContinent]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-sky-100">
              <Globe className="w-5 h-5 animate-spin-slow" />
              Weltweit entdecken
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Alle <span className="text-sky-600 italic">Reiseziele</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
              Finden Sie Ihren Traumurlaub in unserem weltweiten Portfolio. Von der Arktis bis zum Amazonas – Max Mustermann bringt Sie überall hin.
            </p>
          </div>

          <div className="mb-20 space-y-12">
            {/* Search and Main Filters */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="relative flex-1 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-sky-600 transition-colors" />
                <Input 
                  placeholder="Suche nach Ziel, Land oder Erlebnis..." 
                  className="h-20 pl-16 pr-8 bg-slate-50 border-4 border-slate-100 rounded-[2rem] text-xl font-bold focus:border-sky-600 focus:ring-0 transition-all placeholder:text-slate-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="space-y-8">
               <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">Kontinent</p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedContinent(null)}
                      className={cn(
                        "rounded-2xl h-12 px-6 font-black transition-all border-2",
                        !selectedContinent ? "bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-100" : "bg-white text-slate-600 border-slate-100 hover:border-sky-600"
                      )}
                    >
                      Alle Welt
                    </Button>
                    {continents.map(c => (
                      <Button 
                        key={c}
                        variant="outline"
                        onClick={() => setSelectedContinent(c)}
                        className={cn(
                          "rounded-2xl h-12 px-6 font-black transition-all border-2",
                          selectedContinent === c ? "bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-100" : "bg-white text-slate-600 border-slate-100 hover:border-sky-600"
                        )}
                      >
                        {c}
                      </Button>
                    ))}
                  </div>
               </div>

               <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-2">Reiseart</p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedCategory(null)}
                      className={cn(
                        "rounded-2xl h-12 px-6 font-black transition-all border-2",
                        !selectedCategory ? "bg-amber-400 text-white border-amber-400 shadow-lg shadow-amber-100" : "bg-white text-slate-600 border-slate-100 hover:border-amber-400"
                      )}
                    >
                      Alle Arten
                    </Button>
                    {categories.map(cat => (
                      <Button 
                        key={cat}
                        variant="outline"
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "rounded-2xl h-12 px-6 font-black transition-all border-2 flex items-center gap-2",
                          selectedCategory === cat ? "bg-amber-400 text-white border-amber-400 shadow-lg shadow-amber-100" : "bg-white text-slate-600 border-slate-100 hover:border-amber-400"
                        )}
                      >
                         {cat === 'Strand' && <Palmtree className="w-4 h-4" />}
                         {cat === 'Stadt' && <Map className="w-4 h-4" />}
                         {cat === 'Kreuzfahrt' && <Ship className="w-4 h-4" />}
                         {cat === 'Abenteuer' && <Plane className="w-4 h-4" />}
                         {cat === 'Wellness' && <Heart className="w-4 h-4" />}
                         {cat === 'Natur' && <Leaf className="w-4 h-4" />}
                         {cat}
                      </Button>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {filteredDestinations.map((item) => (
                <DestinationCard 
                  key={item.id} 
                  item={item} 
                  onShowDetails={(item) => setSelectedDestination(item)} 
                />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-100">
               <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Compass className="w-12 h-12 text-slate-300" />
               </div>
               <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Keine Reiseziele gefunden</h3>
               <p className="text-slate-500 font-bold text-lg">Versuchen Sie es mit anderen Filtern oder einem anderen Suchbegriff.</p>
               <Button 
                variant="link" 
                className="mt-6 text-sky-600 font-black text-xl"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                  setSelectedContinent(null);
                }}
               >
                 Alle Filter zurücksetzen
               </Button>
            </div>
          )}
        </div>
      </main>

      <DestinationDetails 
        item={selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
      />

      <Footer />
    </div>
  );
};

export default Destinations;

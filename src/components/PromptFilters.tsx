import { MediaType, CameraType, FilmStock, Perspective } from "../types/prompt";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";

interface FilterState {
  search: string;
  mediaType: string;
  cameraType: string;
  filmStock: string;
  perspective: string;
}

interface PromptFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onReset: () => void;
}

export function PromptFilters({ filters, setFilters, onReset }: PromptFiltersProps) {
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters({ ...filters, [key]: value === "all" ? "" : value });
  };

  const mediaTypes: MediaType[] = ["Bild", "Video"];
  const cameraTypes: CameraType[] = ["Retro", "Analog", "Digital", "Spiegellos", "Spiegelreflex", "Vintage", "35mm Film", "Mittelformat", "Großformat", "GoPro", "iPhone"];
  const filmStocks: FilmStock[] = ["Kodak Portra 400", "Fujifilm Superia", "Schwarz-Weiß", "CineStill 800T", "Polaroid", "Technicolor", "Ektachrome", "Standard Digital", "VHS-Stil", "Super 8", "Kodak Gold 200", "Ilford HP5"];
  const perspectives: Perspective[] = ["Weitwinkel", "Nahaufnahme", "Vogelperspektive", "Froschperspektive", "Draufsicht", "Augenhöhe", "Schräger Winkel", "Makro", "Extreme Nahaufnahme", "Totale", "Halbtotale", "Ego-Perspektive"];

  return (
    <div className="bg-white dark:bg-zinc-950 border rounded-2xl p-6 shadow-sm mb-8 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Suche in der Datenbank..."
          className="pl-10 h-12 rounded-xl"
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typ</Label>
          <Select value={filters.mediaType || "all"} onValueChange={(v) => updateFilter("mediaType", v)}>
            <SelectTrigger className="rounded-xl h-11">
              <SelectValue placeholder="Alle Typen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Typen</SelectItem>
              {mediaTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kamera</Label>
          <Select value={filters.cameraType || "all"} onValueChange={(v) => updateFilter("cameraType", v)}>
            <SelectTrigger className="rounded-xl h-11">
              <SelectValue placeholder="Alle Kameras" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Kameras</SelectItem>
              {cameraTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Film / Look</Label>
          <Select value={filters.filmStock || "all"} onValueChange={(v) => updateFilter("filmStock", v)}>
            <SelectTrigger className="rounded-xl h-11">
              <SelectValue placeholder="Alle Looks" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Looks</SelectItem>
              {filmStocks.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Perspektive</Label>
          <Select value={filters.perspective || "all"} onValueChange={(v) => updateFilter("perspective", v)}>
            <SelectTrigger className="rounded-xl h-11">
              <SelectValue placeholder="Alle Winkel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Winkel</SelectItem>
              {perspectives.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="ghost" size="sm" onClick={onReset} className="text-xs text-muted-foreground hover:text-foreground">
          <X className="w-3 h-3 mr-1" /> Filter zurücksetzen
        </Button>
      </div>
    </div>
  );
}

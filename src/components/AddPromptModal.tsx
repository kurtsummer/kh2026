import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Prompt, MediaType, CameraType, FilmStock, Perspective } from "../types/prompt";
import { Plus } from "lucide-react";
import { toast } from "../hooks/use-toast";

interface AddPromptModalProps {
  onAdd: (prompt: Prompt) => void;
}

export function AddPromptModal({ onAdd }: AddPromptModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mediaType: "Bild" as MediaType,
    cameraType: "Digital" as CameraType,
    filmStock: "Standard Digital" as FilmStock,
    perspective: "Augenhöhe" as Perspective,
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast({
        title: "Fehler",
        description: "Bitte Titel und Prompt ausfüllen.",
        variant: "destructive",
      });
      return;
    }

    const newPrompt: Prompt = {
      id: Math.random().toString(36).substr(2, 9),
      title: formData.title,
      content: formData.content,
      mediaType: formData.mediaType,
      cameraType: formData.cameraType,
      filmStock: formData.filmStock,
      perspective: formData.perspective,
      tags: formData.tags.split(",").map(t => t.trim()).filter(t => t !== ""),
      createdAt: new Date().toISOString(),
    };

    onAdd(newPrompt);
    setOpen(false);
    setFormData({
      title: "",
      content: "",
      mediaType: "Bild",
      cameraType: "Digital",
      filmStock: "Standard Digital",
      perspective: "Augenhöhe",
      tags: "",
    });
    toast({
      title: "Erfolg!",
      description: "Prompt wurde zur Datenbank hinzugefügt.",
    });
  };

  const cameraTypes: CameraType[] = ["Retro", "Analog", "Digital", "Spiegellos", "Spiegelreflex", "Vintage", "35mm Film", "Mittelformat", "Großformat", "GoPro", "iPhone"];
  const filmStocks: FilmStock[] = ["Kodak Portra 400", "Fujifilm Superia", "Schwarz-Weiß", "CineStill 800T", "Polaroid", "Technicolor", "Ektachrome", "Standard Digital", "VHS-Stil", "Super 8", "Kodak Gold 200", "Ilford HP5"];
  const perspectives: Perspective[] = ["Weitwinkel", "Nahaufnahme", "Vogelperspektive", "Froschperspektive", "Draufsicht", "Augenhöhe", "Schräger Winkel", "Makro", "Extreme Nahaufnahme", "Totale", "Halbtotale", "Ego-Perspektive"];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
          <Plus className="w-4 h-4 mr-2" /> Eigener Prompt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Manueller Eintrag</DialogTitle>
            <DialogDescription>
              Füge einen bereits existierenden Prompt zur Datenbank hinzu.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Kurztitel</Label>
              <Input 
                id="title" 
                placeholder="z.B. Neon City Shot" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Prompt-Text (Englisch)</Label>
              <Textarea 
                id="content" 
                placeholder="Füge hier deinen englischen Prompt ein..." 
                className="min-h-[100px]"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Typ</Label>
                <Select value={formData.mediaType} onValueChange={(v) => setFormData({...formData, mediaType: v as MediaType})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bild">Bild</SelectItem>
                    <SelectItem value="Video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Kamera</Label>
                <Select value={formData.cameraType} onValueChange={(v) => setFormData({...formData, cameraType: v as CameraType})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {cameraTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Film/Look</Label>
                <Select value={formData.filmStock} onValueChange={(v) => setFormData({...formData, filmStock: v as FilmStock})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {filmStocks.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Perspektive</Label>
                <Select value={formData.perspective} onValueChange={(v) => setFormData({...formData, perspective: v as Perspective})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {perspectives.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full h-12">In Datenbank speichern</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

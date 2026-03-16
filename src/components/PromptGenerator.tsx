import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MediaType, CameraType, FilmStock, Perspective, Lighting, Mood, Prompt } from "../types/prompt";
import { Sparkles, Copy, Check, Save, Wand2, RefreshCcw } from "lucide-react";
import { toast } from "../hooks/use-toast";

interface PromptGeneratorProps {
  onSave: (prompt: Prompt) => void;
}

export function PromptGenerator({ onSave }: PromptGeneratorProps) {
  const [config, setConfig] = useState({
    subject: "",
    mediaType: "Bild" as MediaType,
    cameraType: "Analog" as CameraType,
    filmStock: "Kodak Portra 400" as FilmStock,
    perspective: "Augenhöhe" as Perspective,
    lighting: "Goldene Stunde" as Lighting,
    mood: "Nostalgisch" as Mood,
  });

  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  // Mappings for English prompt generation
  const mapToEnglish = {
    media: { "Bild": "High-resolution professional photograph of", "Video": "Cinematic high-quality video footage of" },
    camera: {
      "Retro": "vintage retro camera",
      "Analog": "classic analog camera",
      "Digital": "high-end digital sensor",
      "Spiegellos": "modern mirrorless camera",
      "Spiegelreflex": "professional DSLR camera",
      "Vintage": "authentic vintage camera equipment",
      "35mm Film": "35mm film camera",
      "Mittelformat": "medium format camera with shallow depth of field",
      "Großformat": "large format camera with immense detail",
      "GoPro": "action-packed GoPro camera",
      "iPhone": "shot on iPhone, mobile photography style"
    },
    film: {
      "Kodak Portra 400": "Kodak Portra 400, warm skin tones, fine grain",
      "Fujifilm Superia": "Fujifilm Superia, vibrant greens and cool shadows",
      "Schwarz-Weiß": "timeless black and white film, high contrast",
      "CineStill 800T": "CineStill 800T, tungsten balanced, cinematic halation",
      "Polaroid": "instant Polaroid film, soft edges, nostalgic chemicals",
      "Technicolor": "classic Technicolor 3-strip process, saturated primary colors",
      "Ektachrome": "Kodak Ektachrome color reversal film, vivid colors",
      "Standard Digital": "sharp digital clarity, clean professional look",
      "VHS-Stil": "80s VHS tracking effects, scanlines, chromatic aberration",
      "Super 8": "Super 8mm home movie style, grainy, jittery frames",
      "Kodak Gold 200": "Kodak Gold 200, consumer-grade warmth, nostalgic feeling",
      "Ilford HP5": "Ilford HP5 black and white, gritty grain, classic look"
    },
    perspective: {
      "Weitwinkel": "wide angle lens, capturing the vast environment",
      "Nahaufnahme": "close-up shot, focusing on intricate details",
      "Vogelperspektive": "bird's eye view from high above",
      "Froschperspektive": "worm's eye view, looking up from the ground",
      "Draufsicht": "top-down flat lay perspective",
      "Augenhöhe": "eye-level perspective, creating a direct connection",
      "Schräger Winkel": "dutch angle, creating tension and dynamism",
      "Makro": "extreme macro photography, microscopic details visible",
      "Extreme Nahaufnahme": "extreme close-up, intense focus on a specific feature",
      "Totale": "full wide shot, showing the subject in its entirety",
      "Halbtotale": "medium wide shot, balancing subject and environment",
      "Ego-Perspektive": "first-person point of view (POV)"
    },
    lighting: {
      "Goldene Stunde": "bathed in warm golden hour light, long soft shadows",
      "Cinematisch": "cinematic lighting with high dynamic range and moody shadows",
      "Neon-Licht": "vibrant neon lights, Cyberpunk aesthetic, glowing reflections",
      "Weiches Licht": "diffused soft lighting, gentle transitions",
      "Hartes Licht": "hard direct sunlight, dramatic high-contrast shadows",
      "Studio-Beleuchtung": "professional studio lighting setup, rim lights, softboxes",
      "Natürliches Licht": "natural ambient daylight, realistic reflections",
      "Düster": "low-key moody lighting, mysterious atmosphere",
      "Bewölkt": "soft overcast daylight, flat even lighting"
    },
    mood: {
      "Nostalgisch": "evoking a sense of nostalgia and memory",
      "Futuristisch": "sleek futuristic aesthetic, clean lines, advanced tech feel",
      "Raw/Authentisch": "raw and authentic documentary style, unpolished beauty",
      "Ätherisch": "ethereal and otherworldly, glowing halos, soft focus",
      "Traumhaft": "dreamlike surreal atmosphere, soft hazy textures",
      "Professionell": "clean professional commercial look, high-end production",
      "Dunkel": "dark and gritty atmosphere, intense and heavy",
      "Lebhaft": "vibrant and energetic, bursting with life and color"
    }
  };

  const generatePrompt = () => {
    if (!config.subject) {
      toast({ title: "Hinweis", description: "Bitte gib zuerst ein Thema ein.", variant: "destructive" });
      return;
    }

    const engMedia = mapToEnglish.media[config.mediaType];
    const engCamera = mapToEnglish.camera[config.cameraType as keyof typeof mapToEnglish.camera];
    const engFilm = mapToEnglish.film[config.filmStock as keyof typeof mapToEnglish.film];
    const engPersp = mapToEnglish.perspective[config.perspective as keyof typeof mapToEnglish.perspective];
    const engLight = mapToEnglish.lighting[config.lighting as keyof typeof mapToEnglish.lighting];
    const engMood = mapToEnglish.mood[config.mood as keyof typeof mapToEnglish.mood];

    const fullPrompt = `${engMedia} ${config.subject}. The scene is ${engPersp}, captured using a ${engCamera}. The visual style is defined by ${engFilm}, ${engLight}, all contributing to a ${engMood} feeling. Extremely detailed textures, hyper-realistic, volumetric lighting, photorealistic rendering, 8k resolution, masterfully composed.`;

    setGeneratedPrompt(fullPrompt);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    toast({ title: "Kopiert!", description: "Der englische Prompt wurde in die Zwischenablage kopiert." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (!generatedPrompt) return;
    
    const newPrompt: Prompt = {
      id: Math.random().toString(36).substr(2, 9),
      title: config.subject.slice(0, 30) + (config.subject.length > 30 ? "..." : ""),
      content: generatedPrompt,
      mediaType: config.mediaType,
      cameraType: config.cameraType,
      filmStock: config.filmStock,
      perspective: config.perspective,
      lighting: config.lighting,
      mood: config.mood,
      tags: ["generiert", config.mediaType.toLowerCase()],
      createdAt: new Date().toISOString(),
    };

    onSave(newPrompt);
    toast({ title: "Gespeichert", description: "Prompt wurde in die Datenbank übernommen." });
  };

  const cameraTypes: CameraType[] = ["Retro", "Analog", "Digital", "Spiegellos", "Spiegelreflex", "Vintage", "35mm Film", "Mittelformat", "Großformat", "GoPro", "iPhone"];
  const filmStocks: FilmStock[] = ["Kodak Portra 400", "Fujifilm Superia", "Schwarz-Weiß", "CineStill 800T", "Polaroid", "Technicolor", "Ektachrome", "Standard Digital", "VHS-Stil", "Super 8", "Kodak Gold 200", "Ilford HP5"];
  const perspectives: Perspective[] = ["Weitwinkel", "Nahaufnahme", "Vogelperspektive", "Froschperspektive", "Draufsicht", "Augenhöhe", "Schräger Winkel", "Makro", "Extreme Nahaufnahme", "Totale", "Halbtotale", "Ego-Perspektive"];
  const lightings: Lighting[] = ["Goldene Stunde", "Cinematisch", "Neon-Licht", "Weiches Licht", "Hartes Licht", "Studio-Beleuchtung", "Natürliches Licht", "Düster", "Bewölkt"];
  const moods: Mood[] = ["Nostalgisch", "Futuristisch", "Raw/Authentisch", "Ätherisch", "Traumhaft", "Professionell", "Dunkel", "Lebhaft"];

  return (
    <Card className="border-2 border-primary/20 shadow-2xl bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600" />
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Wand2 className="w-5 h-5 text-primary" />
          <CardTitle>KI Prompt Generator</CardTitle>
        </div>
        <CardDescription>Erstelle extrem detaillierte englische Prompts durch deutsche Auswahl.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3 space-y-2">
            <Label htmlFor="subject" className="text-sm font-bold">Was soll zu sehen sein? (Inhalt)</Label>
            <Textarea 
              id="subject"
              placeholder="z.B. Ein alter Leuchtturm bei Sturm an der Küste..."
              className="h-24 resize-none rounded-xl border-zinc-200 dark:border-zinc-800 focus:ring-primary"
              value={config.subject}
              onChange={(e) => setConfig({ ...config, subject: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Medien-Typ</Label>
            <Select value={config.mediaType} onValueChange={(v) => setConfig({ ...config, mediaType: v as MediaType })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Bild">Bild</SelectItem>
                <SelectItem value="Video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Kamera</Label>
            <Select value={config.cameraType} onValueChange={(v) => setConfig({ ...config, cameraType: v as CameraType })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {cameraTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Film / Look</Label>
            <Select value={config.filmStock} onValueChange={(v) => setConfig({ ...config, filmStock: v as FilmStock })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {filmStocks.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Perspektive</Label>
            <Select value={config.perspective} onValueChange={(v) => setConfig({ ...config, perspective: v as Perspective })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {perspectives.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Beleuchtung</Label>
            <Select value={config.lighting} onValueChange={(v) => setConfig({ ...config, lighting: v as Lighting })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {lightings.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase text-muted-foreground">Stimmung</Label>
            <Select value={config.mood} onValueChange={(v) => setConfig({ ...config, mood: v as Mood })}>
              <SelectTrigger className="rounded-xl h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                {moods.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4">
          <Button onClick={generatePrompt} className="w-full h-12 text-lg font-bold gap-2 shadow-xl shadow-primary/20">
            <Sparkles className="w-5 h-5" /> Prompt generieren
          </Button>
        </div>

        {generatedPrompt && (
          <div className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border-2 border-primary/30 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                <Wand2 className="w-3 h-3" /> Dein englischer Prompt
              </span>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => setGeneratedPrompt("")}
                className="h-8 text-xs"
              >
                <RefreshCcw className="w-3 h-3 mr-1" /> Zurücksetzen
              </Button>
            </div>
            <div className="bg-white dark:bg-black p-4 rounded-xl border mb-6 shadow-inner min-h-[100px]">
              <p className="text-sm font-medium leading-relaxed italic text-foreground">
                {generatedPrompt}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={handleCopy} variant="outline" className="gap-2 h-11 rounded-xl border-primary/20 hover:border-primary">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                Kopieren
              </Button>
              <Button onClick={handleSave} className="gap-2 h-11 rounded-xl">
                <Save className="w-4 h-4" /> Speichern
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

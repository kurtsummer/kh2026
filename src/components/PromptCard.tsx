import { Prompt } from "../types/prompt";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Camera, Film, Video, Image as ImageIcon, Copy, Check, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "../hooks/use-toast";

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    toast({
      title: "Kopiert!",
      description: "Prompt wurde in die Zwischenablage kopiert.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Card className="group overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 dark:bg-zinc-900/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-bold">
            {prompt.mediaType === 'Video' ? <Video className="w-3 h-3 mr-1" /> : <ImageIcon className="w-3 h-3 mr-1" />}
            {prompt.mediaType}
          </Badge>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {formatDate(prompt.createdAt)}
          </div>
        </div>
        <CardTitle className="text-xl font-bold tracking-tight line-clamp-1">{prompt.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative group/text">
          <p className="text-sm text-muted-foreground line-clamp-3 italic min-h-[60px]">
            "{prompt.content}"
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover/text:opacity-100 transition-opacity pointer-events-none" />
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent hover:border-blue-500/20 transition-colors">
            <Camera className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-semibold truncate">{prompt.cameraType}</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent hover:border-orange-500/20 transition-colors">
            <Film className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-semibold truncate">{prompt.filmStock}</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 col-span-2 border border-transparent hover:border-primary/20 transition-colors">
            <span className="text-zinc-500 font-medium">Blickwinkel:</span>
            <span className="font-bold">{prompt.perspective}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {prompt.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-[9px] uppercase tracking-wider font-bold py-0 bg-zinc-50 dark:bg-zinc-900">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-zinc-50 dark:bg-zinc-800/50 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <Button
          variant="outline"
          className="w-full gap-2 transition-all active:scale-95 hover:bg-primary hover:text-white border-primary/20"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Kopiert" : "Prompt kopieren"}
        </Button>
      </CardFooter>
    </Card>
  );
}

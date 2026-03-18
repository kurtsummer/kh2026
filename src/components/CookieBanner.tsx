import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white rounded-[32px] shadow-2xl border border-[#8DA399]/10 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <button 
            onClick={() => setIsVisible(false)}
            className="text-[#2D3436]/40 hover:text-[#2D3436] transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#8DA399]/10 p-3 rounded-2xl text-[#8DA399]">
            <Cookie className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-[#2D3436]">Plätzchen-Zeit?</h3>
        </div>

        <p className="text-[#2D3436]/70 text-sm leading-relaxed mb-8">
          Wir nutzen Cookies, um Ihr Erlebnis zu verbessern. Einige sind technisch notwendig, andere helfen uns dabei, die Seite für Sie noch schöner zu machen. 
          Details finden Sie in unserer <Link to="/datenschutz" className="text-[#8DA399] underline">Datenschutzerklärung</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={acceptAll}
            className="flex-1 bg-[#8DA399] hover:bg-[#7A8E85] text-white rounded-2xl h-12 font-bold"
          >
            Alle akzeptieren
          </Button>
          <Button 
            variant="outline"
            onClick={acceptNecessary}
            className="flex-1 border-[#8DA399]/20 text-[#2D3436]/70 hover:bg-[#8DA399]/5 rounded-2xl h-12 font-bold"
          >
            Nur notwendige
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-14 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-16 h-8 rounded-full transition-all duration-500 flex items-center px-1 border-2 overflow-hidden shadow-lg ${
        isDark 
          ? 'bg-slate-900 border-sky-500/30' 
          : 'bg-sky-50 border-sky-200'
      }`}
      aria-label="Design umschalten"
    >
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-20' : 'opacity-0'}`}
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #0EA5E9, transparent 70%)' }}
      />
      
      <div 
        className={`z-10 w-6 h-6 rounded-xl flex items-center justify-center transition-all duration-500 transform ${
          isDark ? 'translate-x-8 bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.6)]' : 'translate-x-0 bg-sky-600'
        }`}
      >
        {isDark ? (
          <Sun size={14} className="text-white" strokeWidth={3} />
        ) : (
          <Moon size={14} className="text-white" strokeWidth={3} />
        )}
      </div>
    </button>
  );
}

export default ThemeToggle;

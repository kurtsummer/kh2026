import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-7 rounded-full transition-all duration-500 flex items-center px-1 border overflow-hidden ${
        isDark 
          ? 'bg-[#1A0F0A] border-[#D48806]/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]' 
          : 'bg-[#F5E6D3] border-[#2D241E]/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
      }`}
      aria-label="Design umschalten"
    >
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-20' : 'opacity-0'}`}
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #D48806, transparent 70%)' }}
      />
      
      <div 
        className={`z-10 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 transform ${
          isDark ? 'translate-x-7 bg-[#D48806] shadow-[0_0_15px_rgba(212,136,6,0.6)]' : 'translate-x-0 bg-[#2D241E]'
        }`}
      >
        {isDark ? (
          <Sun size={12} className="text-[#1A0F0A]" strokeWidth={3} />
        ) : (
          <Moon size={12} className="text-[#F5E6D3]" strokeWidth={3} />
        )}
      </div>
    </button>
  );
}

export default ThemeToggle;

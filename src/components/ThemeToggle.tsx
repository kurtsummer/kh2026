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
      className="p-2 rounded-full border border-primary/20 bg-background/50 hover:bg-primary/10 transition-colors text-text dark:text-primary"
      aria-label="Design umschalten"
    >
      {isDark ? (
        <Sun size={20} className="text-primary animate-in spin-in-90 duration-500" />
      ) : (
        <Moon size={20} className="text-secondary animate-in spin-in-90 duration-500" />
      )}
    </button>
  );
}

export default ThemeToggle;

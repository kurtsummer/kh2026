import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-xl w-10 h-10 bg-[#16332C]/5 dark:bg-[#C5A059]/10 hover:bg-[#C5A059]/20 hover:text-[#C5A059] transition-all duration-300 border border-[#16332C]/10 dark:border-[#C5A059]/20"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all text-[#C5A059]" />
      ) : (
        <Moon className="h-5 w-5 transition-all text-[#16332C]" />
      )}
      <span className="sr-only">Design umschalten</span>
    </Button>
  );
}

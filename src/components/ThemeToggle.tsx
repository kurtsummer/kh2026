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
      className="rounded-xl w-10 h-10 bg-[#800020]/5 dark:bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 border border-[#800020]/10 dark:border-[#D4AF37]/20"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all text-[#D4AF37]" />
      ) : (
        <Moon className="h-5 w-5 transition-all text-[#800020]" />
      )}
      <span className="sr-only">Design umschalten</span>
    </Button>
  );
}

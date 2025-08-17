"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";


const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        className="p-2 bg-[var(--primary)] rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
      >
        <Moon size={20} />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer  p-2 dark:bg-gray-900 rounded-full text-white dark:bg-[var(--primary)] /10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ToggleTheme;

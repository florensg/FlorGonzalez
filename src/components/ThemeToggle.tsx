"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors cursor-pointer"
      aria-label="Toggle theme"
      style={{ color: "var(--color-text-muted)" }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

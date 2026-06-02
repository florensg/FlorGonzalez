"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const navItems = ["about", "experience", "projects", "publications", "skills", "awards", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: "var(--color-bg)",
        borderColor: "var(--color-border)"
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-xl font-extrabold tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          FG <span style={{ color: "var(--color-accent)" }}>·</span> CV
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t(id)}
              </button>
            </li>
          ))}
        </ul>

        {/* Toggles */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors cursor-pointer"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4"
          style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {navItems.map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className="w-full text-left py-1 hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t(id)}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

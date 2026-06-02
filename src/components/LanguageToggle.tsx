"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition, useCallback } from "react";
import { routing } from "@/i18n/routing";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = useCallback(() => {
    const nextLocale = locale === "es" ? "en" : "es";

    startTransition(() => {
      // Construir la nueva ruta con el locale cambiado
      // Si estamos en /es → /en, si estamos en /en → /es
      // Si estamos en / → agregamos el locale
      const segments = pathname.split("/").filter(Boolean);
      
      if (routing.locales.includes(segments[0] as typeof routing.locales[number])) {
        // Reemplazar locale existente
        segments[0] = nextLocale;
      } else {
        // Insertar locale al inicio
        segments.unshift(nextLocale);
      }

      const newPath = `/${segments.join("/")}`;
      router.push(newPath);
    });
  }, [locale, pathname, router]);

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-3 py-1.5 text-sm font-semibold rounded-lg border 
                 hover:bg-[var(--color-accent-light)] transition-colors cursor-pointer disabled:opacity-50"
      style={{ borderColor: "var(--color-border)" }}
      aria-label="Toggle language"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

function GithubIcon({ size }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size ?? 18}
      height={size ?? 18}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size ?? 18}
      height={size ?? 18}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="border-t py-10 mt-10"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container-cv text-center">
        <div className="flex justify-center gap-4 mb-5">
          <a
            href="https://github.com/florensg"
            target="_blank"
            className="p-2 rounded-xl transition-colors hover:bg-[var(--color-accent-light)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/florenciagonzalezz"
            target="_blank"
            className="p-2 rounded-xl transition-colors hover:bg-[var(--color-accent-light)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:floo.g1096@gmail.com"
            className="p-2 rounded-xl transition-colors hover:bg-[var(--color-accent-light)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          {t("copyright")}
        </p>
        <p className="text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>
          {t("made_with")}
        </p>
      </div>
    </footer>
  );
}

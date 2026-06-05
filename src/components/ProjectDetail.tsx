"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  tech: string[];
  github: string;
  demo: string;
  logo?: string;
  pdfUrl?: string;
  details?: {
    longDesc: string;
    features: string[];
    results: string;
  };
};

/* ─── Icons ─── */
function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Helper: split longDesc into paragraphs ─── */
function parseParagraphs(text: string): string[] {
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

/* ─── Helper: detect **bold** markdown in text ─── */
function BoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} style={{ color: "var(--color-text)", fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/* ─── Motion variants ─── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ─── Main Component ─── */
export default function ProjectDetail({ project, locale }: { project: Project; locale: string }) {
  const t = useTranslations("projects");

  const paragraphs = project.details?.longDesc ? parseParagraphs(project.details.longDesc) : [];

  // Labels
  const lbl = {
    back: locale === "es" ? "Volver a proyectos" : "Back to projects",
    features: locale === "es" ? "Funcionalidades implementadas" : "Implemented Features",
    results: locale === "es" ? "Resultados" : "Results",
    tech: locale === "es" ? "Stack tecnológico" : "Tech Stack",
    download: locale === "es" ? "Descargar informe completo (PDF)" : "Download Full Report (PDF)",
    viewGithub: "GitHub",
    viewDemo: locale === "es" ? "Ver demo" : "View Demo",
    overview: locale === "es" ? "Descripción del proyecto" : "Project Overview",
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen pt-24 pb-20"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-cv">

        {/* ── Back link ── */}
        <motion.div variants={item} className="mb-8">
          <Link
            href={locale === "en" ? "/en/#projects" : "/#projects"}
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            <ChevronLeftIcon />
            {locale === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
        </motion.div>

        {/* ── Hero card: category + date + logo + title + short desc ── */}
        <motion.div
          variants={item}
          className="rounded-2xl p-8 md:p-10 mb-6"
          style={{
            backgroundColor: "var(--color-surface)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg"
              style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
            >
              {t(`filters.${project.category}`)}
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
              {project.date}
            </span>
          </div>

          {/* Logo */}
          {project.logo && (
            <div className="mb-6 flex">
              <div
                className="rounded-xl px-5 py-4 flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  border: "1px solid var(--color-border)",
                  maxWidth: "260px",
                }}
              >
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-10 w-auto object-contain"
                  style={{ filter: "var(--logo-filter, none)" }}
                />
              </div>
            </div>
          )}

          {/* Title */}
          <h1
            className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
            style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h1>

          {/* Short description */}
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {project.desc}
          </p>
        </motion.div>

        {/* ── Two-column stats strip ── */}
        {project.details && (
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
          >
            {[
              { icon: "📋", label: locale === "es" ? "Norma base" : "Base Standard", value: "ISO/IEC 25000" },
              { icon: "🧩", label: locale === "es" ? "Modelo" : "Model", value: "QuAM" },
              { icon: "🎯", label: locale === "es" ? "Características" : "Characteristics", value: "3" },
              { icon: "📄", label: locale === "es" ? "Páginas del informe" : "Report Pages", value: "49" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4 flex flex-col gap-1"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span className="text-xl">{stat.icon}</span>
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </span>
                <span className="text-lg font-bold" style={{ color: "var(--color-accent)" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── Long description ── */}
        {paragraphs.length > 0 && (
          <motion.div
            variants={item}
            className="rounded-2xl p-8 md:p-10 mb-6"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="text-lg font-bold mb-5" style={{ color: "var(--color-text)" }}>
              {lbl.overview}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  <BoldText text={para} />
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Features ── */}
        {project.details?.features && project.details.features.length > 0 && (
          <motion.div
            variants={item}
            className="rounded-2xl p-8 md:p-10 mb-6"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="text-lg font-bold mb-5" style={{ color: "var(--color-text)" }}>
              {lbl.features}
            </h2>
            <ul className="space-y-3">
              {project.details.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* ── Tech stack ── */}
        {project.tech.length > 0 && (
          <motion.div
            variants={item}
            className="rounded-2xl p-8 md:p-10 mb-6"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-text)" }}>
              {lbl.tech}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                  style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Results highlight ── */}
        {project.details?.results && (
          <motion.div
            variants={item}
            className="rounded-2xl p-8 md:p-10 mb-6 relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-accent-light)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Decorative star */}
            <div
              className="absolute top-4 right-5 opacity-20"
              style={{ color: "var(--color-accent)" }}
            >
              <StarIcon />
            </div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text)" }}>
              {lbl.results}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {project.details.results}
            </p>
          </motion.div>
        )}

        {/* ── PDF Download CTA ── */}
        {project.pdfUrl && (
          <motion.div
            variants={item}
            className="rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                {locale === "es" ? "Informe técnico completo" : "Full Technical Report"}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {locale === "es" ? "49 páginas · PDF · Calidad del Producto y del Proceso de Software, UTN 2024" : "49 pages · PDF · UTN 2024"}
              </p>
            </div>
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              <DownloadIcon />
              {lbl.download}
            </a>
          </motion.div>
        )}

        {/* ── GitHub / Demo links ── */}
        {(project.github || project.demo) && (
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-2"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                <LinkIcon />
                {lbl.viewGithub}
                <ExternalLinkIcon />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                <ExternalLinkIcon />
                {lbl.viewDemo}
                <ExternalLinkIcon />
              </a>
            )}
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}

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
  details?: {
    longDesc: string;
    features: string[];
    results: string;
  };
};

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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectDetail({ project, locale }: { project: Project; locale: string }) {
  const t = useTranslations("projects");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        <motion.div variants={item}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-accent)" }}
          >
            <ChevronLeftIcon />
            {locale === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-2xl p-8 md:p-10"
          style={{
            backgroundColor: "var(--color-surface)",
            boxShadow: "var(--shadow-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg"
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
              }}
            >
              {t(`filters.${project.category}`)}
            </span>
            <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {project.date}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </motion.h1>

          {project.details?.longDesc && (
            <motion.div variants={item} className="mb-8">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {project.details.longDesc}
              </p>
            </motion.div>
          )}

          {project.details?.features && project.details.features.length > 0 && (
            <motion.div variants={item} className="mb-8">
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-text)" }}>
                {locale === "es" ? "Funcionalidades" : "Features"}
              </h2>
              <ul className="space-y-3">
                {project.details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-accent-light)" }}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.details?.results && (
            <motion.div
              variants={item}
              className="mb-8 p-5 rounded-xl"
              style={{
                backgroundColor: "var(--color-accent-light)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
                {locale === "es" ? "Resultados" : "Results"}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {project.details.results}
              </p>
            </motion.div>
          )}

          {project.tech.length > 0 && (
            <motion.div variants={item} className="mb-8">
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text)" }}>
                {locale === "es" ? "Tecnologías" : "Technologies"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {(project.github || project.demo) && (
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-accent)" }}
                >
                  <LinkIcon />
                  GitHub
                  <ExternalLinkIcon />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-accent)" }}
                >
                  <ExternalLinkIcon />
                  {locale === "es" ? "Demo" : "Demo"}
                  <ExternalLinkIcon />
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

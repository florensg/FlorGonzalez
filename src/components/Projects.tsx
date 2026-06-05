"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const categories = ["all", "personal", "professional", "academic"] as const;

export default function Projects() {
  const t = useTranslations("projects");
  const router = useRouter();
  const [filter, setFilter] = useState<string>("all");
  const projects = t.raw("items") as Array<{
    id: string;
    title: string;
    date: string;
    desc: string;
    category: string;
    tech: string[];
    github: string;
    demo: string;
  }>;

  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container-cv">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{t("label")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-sub">{t("subtitle")}</p>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer"
                style={{
                  backgroundColor: filter === cat ? "var(--color-accent)" : "var(--color-surface)",
                  color: filter === cat ? "#fff" : "var(--color-text-muted)",
                  border: filter === cat ? "none" : "1px solid var(--color-border)",
                }}
              >
                {t(`filters.${cat}`)}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: "var(--color-text-muted)" }}>
              <div className="text-4xl mb-3">📭</div>
              <p>{t("empty")}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl p-5 flex flex-col cursor-pointer transition-all duration-200"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    boxShadow: "var(--shadow-card)",
                    border: "1px solid var(--color-border)",
                  }}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {t(`filters.${project.category}`)}
                  </span>
                  <h3 className="text-base font-bold mb-1">{project.title}</h3>
                  <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>
                    {project.date}
                  </p>
                  <p className="text-sm mb-4 flex-1" style={{ color: "var(--color-text-muted)" }}>
                    {project.desc}
                  </p>

                  {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-lg font-medium"
                          style={{
                            backgroundColor: "var(--color-accent-light)",
                            color: "var(--color-accent)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {(project.github || project.demo) && (
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                          style={{ color: "var(--color-accent)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          🔗 GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:underline"
                          style={{ color: "var(--color-accent)" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          🌐 Demo
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
                ))}
              </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

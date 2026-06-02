"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as Array<{
    tag: string;
    role: string;
    organization: string;
    date: string;
    bullets: string[];
  }>;
  const edu = t.raw("education") as { title: string; school: string; date: string };

  return (
    <section id="experience" className="py-20">
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

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold mb-1">{item.role}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>
                  {item.organization}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {item.date}
                </p>
                <ul className="space-y-1.5 flex-1">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm pl-4 relative"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Educación */}
          <div
            className="mt-6 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{
              backgroundColor: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <h3 className="text-lg font-bold">{edu.title}</h3>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                {edu.school}
              </p>
            </div>
            <span
              className="text-sm font-semibold whitespace-nowrap px-3 py-1 rounded-lg"
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
              }}
            >
              {edu.date}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Array<{ title: string; items: string[] }>;

  return (
    <section id="skills" className="py-20">
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

          <div className="space-y-8 mt-8">
            {categories.map((cat, i) => (
              <div key={i}>
                <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3.5 py-2 rounded-xl font-medium transition-transform hover:scale-105"
                      style={{
                        backgroundColor: "var(--color-accent-light)",
                        color: "var(--color-accent)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

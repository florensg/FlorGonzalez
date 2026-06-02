"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Awards() {
  const t = useTranslations("awards");
  const items = t.raw("items") as Array<{ icon: string; text: string; subtext: string }>;

  return (
    <section id="awards" className="py-20">
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

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {items.map((award, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span className="text-2xl flex-shrink-0">{award.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{award.text}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {award.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

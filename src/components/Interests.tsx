"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Interests() {
  const t = useTranslations("interests");
  const items = t.raw("items") as string[];

  return (
    <section id="interests" className="py-20">
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

          <div className="flex flex-wrap gap-3 mt-8">
            {items.map((interest) => (
              <span
                key={interest}
                className="text-sm px-4 py-2.5 rounded-xl font-medium"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Publications() {
  const t = useTranslations("publications");
  const items = t.raw("items") as Array<{ title: string; venue: string }>;

  return (
    <section id="publications" className="py-20">
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

          <div className="space-y-4 mt-8">
            {items.map((pub, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p className="text-sm font-medium leading-relaxed">{pub.title}</p>
                {pub.venue && (
                  <span
                    className="text-xs font-semibold mt-2 inline-block px-2.5 py-1 rounded-lg"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {pub.venue}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

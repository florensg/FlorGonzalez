"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Globe, GraduationCap, FlaskConical } from "lucide-react";

const infoCards = [
  { key: "location", icon: MapPin },
  { key: "languages", icon: Globe },
  { key: "education", icon: GraduationCap },
  { key: "research", icon: FlaskConical },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20">
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

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Bio */}
            <div className="text-base leading-relaxed space-y-4" style={{ color: "var(--color-text-muted)" }}>
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
            </div>

            {/* Info cards */}
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              {infoCards.map(({ key, icon: Icon }) => (
                <div key={key} className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "var(--color-accent-light)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                      {t(`${key}_label`)}
                    </p>
                    <p className="text-sm font-medium mt-0.5">{t(`${key}_value`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

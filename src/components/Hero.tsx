"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container-cv w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Texto */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-sm font-semibold tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              ✺ {t("greeting")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
              {t("name")}{" "}
              <span style={{ color: "var(--color-accent)" }}>{t("lastname")}</span>
            </h1>
            <p
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("title")}
            </p>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("description")}
            </p>

            {/* Botones */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#experience"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                {t("cta_experience")}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-transform hover:scale-105"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                {t("cta_contact")}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("cta_cv")}
              </a>
            </div>
          </motion.div>

          {/* Foto / Placeholder */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl flex items-center justify-center text-4xl font-extrabold shadow-lg"
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent)",
              }}
            >
              FG
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

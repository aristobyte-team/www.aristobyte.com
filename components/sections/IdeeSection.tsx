"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Gradient } from "@/components";

import { useTranslate } from "@/context";
import { Icons } from "@/utils";

import "./sections.scss";

export const IdeeSection = () => {
  const { t } = useTranslate();

  return (
    <section className="section">
      <div className="section__container">
        <motion.div
          className="section__idee"
          dangerouslySetInnerHTML={{ __html: Icons.IDEEFlipped }}
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          viewport={{ once: false }}
          onViewportEnter={(e) =>
            e?.target?.classList?.add("section__idee--active")
          }
          onViewportLeave={(e) =>
            e?.target?.classList?.remove("section__idee--active")
          }
        />

        <div className="section__content">
          <Gradient id="idee" />
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {t(`idee.title`)}
          </motion.h2>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {t(`idee.description.p1`)}
          </motion.p>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {t(`idee.description.p2`)}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

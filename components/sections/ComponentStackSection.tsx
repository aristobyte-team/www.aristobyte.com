"use client";

import * as React from "react";
import NextLink from "next/link";

import { motion } from "framer-motion";
import { Gradient } from "@/components";

import { useTranslate } from "@/context";
import { TranslateFunctionType } from "@/data";
import { Icons } from "@/utils";

import "./sections.scss";

export type ComponentStackSectionPropsType = {
  t: TranslateFunctionType;
};

const CardSVGs = ["Card1", "Card2", "Card3"];
const step = 100;

const MotionLink = motion.create(NextLink);

export const ComponentStackSection = () => {
  const { t } = useTranslate();

  return (
    <section className="section">
      <div className="section__container">
        <div className="section__content">
          <Gradient id="component-stack" />
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {t(`ui.component-stack.title`)}
          </motion.h2>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {t(`ui.component-stack.description.p1`)}
          </motion.p>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {t(`ui.component-stack.description.p2`)}
          </motion.p>
        </div>

        <ul className="section__svg-list" style={{ top: -step / 6 }}>
          {CardSVGs.map((id, i) => (
            <li key={id} className="section__svg-list-item">
              {i === 0 && (
                <MotionLink
                  href="https://ui.aristobyte.com"
                  target="_blank"
                  dangerouslySetInnerHTML={{ __html: Icons.Button }}
                  className="section__svg-list-inner section__svg-list-inner--icon"
                  initial={{ opacity: 0, y: -80, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 * (CardSVGs.length - 2),
                  }}
                  viewport={{ once: false }}
                />
              )}
              <motion.span
                dangerouslySetInnerHTML={{ __html: Icons[id] }}
                style={{ zIndex: CardSVGs.length - i, top: i * step }}
                className="section__svg-list-inner"
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 * i,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                viewport={{ once: false }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

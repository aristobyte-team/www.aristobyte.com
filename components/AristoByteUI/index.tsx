"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Gradient } from "@components";
import { Icons } from "@/utils";
import { TranslateFunctionType } from "@/data";

import "./AristoByteUI.scss";

export type FeaturesPropsType = {
  t: TranslateFunctionType;
};

const CardSVGs = ["Card1", "Card2", "Card3"];
const step = 100;

const MotionLink = motion.create(Link);

export const AristoByteUI = ({ t }: FeaturesPropsType) => (
  <section className="aristobyte-ui">
    <div className="aristobyte-ui__container">
      <div className="aristobyte-ui__content">
        <Gradient id="aristobyte-ui aristobyte-ui--1" />

        <h2 className="aristobyte-ui__title">{t(`aristobyte-ui.title`)}</h2>
        <p className="aristobyte-ui__description">
          {t(`aristobyte-ui.description`)}
        </p>
      </div>

      <section className="aristobyte-ui__sub-section">
        <motion.div
          className="aristobyte-ui__sub-section-idee"
          dangerouslySetInnerHTML={{ __html: Icons.IDEEFlipped }}
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          viewport={{ once: false }}
          onViewportEnter={(e) =>
            e?.target?.classList?.add("aristobyte-ui__sub-section-idee--active")
          }
          onViewportLeave={(e) =>
            e?.target?.classList?.remove(
              "aristobyte-ui__sub-section-idee--active"
            )
          }
        />

        <div className="aristobyte-ui__sub-section-content">
          <Gradient id="aristobyte-ui aristobyte-ui--2" />
          <motion.h2
            className="aristobyte-ui__sub-section-title"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.title`)}
          </motion.h2>
          <motion.p
            className="aristobyte-ui__sub-section-description"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.description.p1`)}
          </motion.p>
          <motion.p
            className="aristobyte-ui__sub-section-description"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.description.p2`)}
          </motion.p>
        </div>
      </section>

      <section className="aristobyte-ui__sub-section">
        <div className="aristobyte-ui__sub-section-content">
          <Gradient id="aristobyte-ui aristobyte-ui--3" />
          <motion.h2
            className="aristobyte-ui__sub-section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.title`)}
          </motion.h2>
          <motion.p
            className="aristobyte-ui__sub-section-description"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.description.p1`)}
          </motion.p>
          <motion.p
            className="aristobyte-ui__sub-section-description"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {t(`aristobyte-ui.windows.description.p2`)}
          </motion.p>
        </div>

        <ul className="aristobyte-ui__svg-list" style={{ top: -step / 6 }}>
          {CardSVGs.map((id, i) => (
            <li key={id} className="aristobyte-ui__svg-list-item">
              {i === 0 && (
                <MotionLink
                  href="https://ui.aristobyte.com"
                  target="_blank"
                  dangerouslySetInnerHTML={{ __html: Icons.Button }}
                  className="aristobyte-ui__svg-list-inner aristobyte-ui__svg-list-inner--icon"
                  initial={{ opacity: 0, y: -80, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
                className="aristobyte-ui__svg-list-inner"
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
      </section>
    </div>
  </section>
);

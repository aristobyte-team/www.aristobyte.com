"use client";

import * as React from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { Gradient } from "@/components";
import { useTranslate } from "@/context";

import "./Hero.scss";

export type HeroPropsType = {
  withGradient?: boolean;
  icon?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  linkText?: string;
  links?: {
    id: string;
    href: string;
  }[];
};

export const Hero = ({
  withGradient,
  icon,
  subtitle,
  title,
  description,
  linkText,
  links,
}: HeroPropsType) => {
  const { t } = useTranslate();

  const subtitleDelay = 0;
  const iconDelay = 0.2 + subtitleDelay;
  const titleDelay = 0.2 + subtitleDelay;
  const descriptionDelay = titleDelay + 0.2;
  const linksDelay = descriptionDelay + 0.2;

  return (
    <section className="hero">
      {withGradient && <Gradient id="hero" preventMotionAnimation />}
      <div className="hero__gradient" />
      <div className="hero__container">
        <div className="hero__content">
          {icon && (
            <motion.span
              className="hero__icon"
              dangerouslySetInnerHTML={{ __html: icon }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: iconDelay }}
              viewport={{ once: false }}
            />
          )}
          {subtitle && (
            <motion.h3
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: subtitleDelay }}
              viewport={{ once: false }}
            >
              {t(subtitle)}
            </motion.h3>
          )}
          {title && (
            <motion.h2
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: titleDelay }}
              viewport={{ once: false }}
            >
              {t(title)}
            </motion.h2>
          )}
          {description && (
            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: descriptionDelay }}
              viewport={{ once: false }}
            >
              {t(description)}
            </motion.p>
          )}
        </div>
        {links && linkText && (
          <ul className="hero__links">
            {links.map(({ id, href }) => (
              <motion.li
                key={id}
                className={`hero__item hero__item--${id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: linksDelay }}
                viewport={{ once: false }}
              >
                <NextLink href={href} target="_blank" className="hero__link">
                  <span>{t(`${linkText}.${id}`)}</span>
                </NextLink>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

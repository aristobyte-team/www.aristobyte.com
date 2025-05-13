"use client";

import * as React from "react";

import { Gradient, ScrollLink } from "@/components";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./Hero.scss";

export const Hero = () => {
  const { t } = useTranslate();

  return (
    <section className="hero">
      <Gradient id="hero" preventMotionAnimation />
      <div className="hero__gradient" />
      <div className="hero__container">
        <div className="hero__content">
          <span
            className="hero__icon"
            dangerouslySetInnerHTML={{ __html: Config.hero.icon }}
          />
          <h3 className="hero__subtitle">{t("hero.subtitle")}</h3>
          <h2 className="hero__title">{t("hero.title")}</h2>
          <p className="hero__description">{t("hero.description")}</p>
        </div>
        <ul className="hero__links">
          {Config.hero.links.map(({ id, href }) => (
            <li key={id} className={`hero__item hero__item--${id}`}>
              <ScrollLink to={href} smooth={true} duration={500}>
                <span>{t(`hero.links.${id}`)}</span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

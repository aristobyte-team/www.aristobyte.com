import * as React from "react";
import Link from "next/link";

import { TranslateFunctionType } from "@/data";
import { Config } from "@/config";

import "./Hero.scss";

export type HeroPropsType = {
  t: TranslateFunctionType;
};

export const Hero = ({ t }: HeroPropsType) => (
  <section className="hero">
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
          <li key={id}>
            <Link href={href} className={`hero__link hero__link--${id}`}>
              <span>{t(`hero.links.${id}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

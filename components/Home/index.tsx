import * as React from "react";
import Link from "next/link";

import { TranslateFunctionType } from "@/data";
import { Config } from "@/config";

import "./Home.scss";

export type HomePropsType = {
  t: TranslateFunctionType;
};

export const Home = ({ t }: HomePropsType) => (
  <section className="home">
    <div className="home__gradient" />
    <div className="home__container">
      <div className="home__content">
        <h3 className="home__subtitle">{t("home.subtitle")}</h3>
        <h2 className="home__title">{t("home.title")}</h2>
        <p className="home__description">{t("home.description")}</p>
      </div>
      <ul className="home__links">
        {Config.home.links.map(({ id, href }) => (
          <li key={id}>
            <Link href={href} className={`home__link home__link--${id}`}>
              <span>{t(`home.links.${id}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

import * as React from "react";
import Link from "next/link";

import { HomeData } from "@/data";

import "./Home.scss";

export const Home = () => (
  <section className="home">
    <div className="home__gradient" />
    <div className="home__container">
      <div className="home__content">
        <h3 className="home__subtitle">{HomeData.subtitle}</h3>
        <h2 className="home__title">{HomeData.title}</h2>
        <p className="home__description">{HomeData.description}</p>
      </div>
      <ul className="home__links">
        {HomeData.links.map(({ id, href, text }) => (
          <li key={id}>
            <Link href={href} className={`home__link home__link--${id}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

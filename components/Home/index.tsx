import * as React from "react";

import { HomeData } from "@/data";

import "./Home.scss";

export const Home = () => (
  <section className="home">
    <div className="home__container">
      <div className="home__content">
        <h3 className="home__subtitle">{HomeData.subtitle}</h3>
        <h2 className="home__title">{HomeData.title}</h2>
        <p className="home__description">{HomeData.description}</p>
      </div>
    </div>
    <div className="home__image">
      <img src={HomeData.imageURL} alt="Home banner" />
    </div>
  </section>
);

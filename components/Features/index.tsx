"use client";

import * as React from "react";

import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./Features.scss";

export const Features = () => {
  const { t } = useTranslate();

  return (
    <section id="features" className="features">
      <div className="features__container">
        <div className="features__content">
          <h2 className="features__title">{t("features.title")}</h2>
          <p className="features__description">{t("features.description")}</p>
        </div>

        <ul className="features__list">
          {Config.features.cards.map(({ id, icon }) => (
            <li key={id} className="features__card">
              <span
                className="features__card-icon"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
              <h3 className="features__card-title">
                {t(`features.cards.${id}.title`)}
              </h3>
              <p className="features__card-description">
                {t(`features.cards.${id}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

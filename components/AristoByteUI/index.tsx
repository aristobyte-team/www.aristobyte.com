import * as React from "react";

import { Gradient } from "@components";
import { TranslateFunctionType } from "@/data";

import "./AristoByteUI.scss";

export type FeaturesPropsType = {
  t: TranslateFunctionType;
};

export const AristoByteUI = ({ t }: FeaturesPropsType) => (
  <section className="aristobyte-ui">
    <div className="aristobyte-ui__container">
      <div className="aristobyte-ui__content">
        <Gradient id="aristobyte-ui" />

        <h2 className="aristobyte-ui__title">{t(`aristobyte-ui.title`)}</h2>
        <p className="aristobyte-ui__description">
          {t(`aristobyte-ui.description`)}
        </p>
      </div>
    </div>
  </section>
);

"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslate } from "@/context";

import "./UIComponentsPreview.scss";

export const UIComponentsPreview = () => {
  const { t } = useTranslate();

  return (
    <section className="ui-components-preview">
      <div className="ui-components-preview__container">
        <div className="ui-components-preview__content">
          <h2 className="ui-components-preview__title">
            {t("home.ui-components-preview.title")}
          </h2>
          <p className="ui-components-preview__description">
            {t("home.ui-components-preview.description")}
          </p>
          <Link href="/ui" className="ui-components-preview__link">
            <span>{t("home.ui-components-preview.link")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

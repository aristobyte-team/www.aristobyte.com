"use client";

import * as React from "react";
import Link from "next/link";

import { useTranslate } from "@/context";
import { Icons } from "@/utils";
import { Config } from "@/config";

import "./ComplianceMap.scss";

export const ComplianceMap = () => {
  const { t } = useTranslate();

  return (
    <section className="compliance-map">
      <div className="compliance-map__container">
        <div className="compliance-map__document">
          <div className="compliance-map__content">
            <h1 className="compliance-map__title">
              {t("compliance.main.title")}
            </h1>
            <h2 className="compliance-map__title-small">
              {t("compliance.main.titleSmall")}
            </h2>
            <p className="compliance-map__description">
              {t("compliance.main.description")}
            </p>
          </div>

          <ul className="compliance-map__list">
            {Config.compliance.main.list.map(({ id, href }) => (
              <li key={id}>
                <Link href={href} className="compliance-map__link">
                  <span className="compliance-map__link-text">
                    {t(`compliance.main.list.${id}`)}
                  </span>
                  <span
                    className="compliance-map__link-icon"
                    dangerouslySetInnerHTML={{ __html: Icons.ArrowRight }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

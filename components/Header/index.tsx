"use client";

import * as React from "react";
import NextLink from "next/link";

import { Config } from "@config";
import { useTranslate } from "@/context";

import "./Header.scss";

export const Header = () => {
  const { t } = useTranslate();

  return (
    <header className="header">
      <div className="header__container">
        <NextLink href="/" className="header__logo">
          <span className="header__logo-icon">
            <span
              className="header__logo-icon-container"
              dangerouslySetInnerHTML={{ __html: Config.header.logo }}
            />
          </span>
          <span className="header__logo-text">AristoByte</span>
        </NextLink>

        <nav>
          <ul className="header__list">
            {Config.header.nav.map(({ id, href }) => (
              <li key={id}>
                <NextLink className="header__link" href={href}>
                  {t(`header.nav.${id}`)}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

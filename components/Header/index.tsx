import * as React from "react";
import Link from "next/link";

import { Icons } from "@/utils";
import { HeaderData } from "@/data";

import "./Header.scss";

const navElements = [
  { id: "product", href: "/product" },
  { id: "company", href: "/company" },
  { id: "insights", href: "/insights" },
  { id: "contact", href: "/contact" },
];

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link href="/" className="header__logo">
        <span className="header__logo-icon">
          <span
            className="header__logo-icon-container"
            dangerouslySetInnerHTML={{ __html: Icons.Logo }}
          />
        </span>
        <span className="header__logo-text">AristoByte</span>
      </Link>

      <nav>
        <ul className="header__list">
          {navElements.map(({ id, href }) => (
            <li key={id}>
              <Link className="header__link" href={href}>
                {HeaderData[id]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

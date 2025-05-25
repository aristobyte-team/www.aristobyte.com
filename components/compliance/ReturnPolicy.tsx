"use client";

import * as React from "react";
import NextLink from "next/link";

import { GoBackButton } from "./GoBackButton";

import "./compliance.scss";

export const ReturnPolicy = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">
          <GoBackButton />
          <span>RETURN POLICY</span>
        </h1>
        <p className="compliance__date">
          Last updated:&nbsp;<b>19.05.2025</b>
        </p>
        <h2 className="compliance__title-small">REFUNDS</h2>
        <p className="compliance__par">
          All sales are final and no refund will be issued.
        </p>
        <h2 className="compliance__title-small">QUESTIONS</h2>
        <p className="compliance__par">
          If you have any questions concerning our return policy, please contact
          us at:
        </p>
        <ul className="compliance__list compliance__list--with-dots">
          <li>
            <p className="compliance__par">
              Online Contact Form:&nbsp;
              <NextLink className="compliance__link" href="/contact">
                https://aristobyte.com/contact
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              Email:&nbsp;
              <NextLink
                className="compliance__link"
                href="mailto:info@aristobyte.com"
                target="_blank"
              >
                info@aristobyte.com
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              Phone:&nbsp;
              <NextLink
                className="compliance__link"
                href="tel:+48-451-652-749"
                target="_blank"
              >
                (+48) 451 652 749
              </NextLink>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

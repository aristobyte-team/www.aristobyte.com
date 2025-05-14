"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslate } from "@/context";

import "./AppsPreview.scss";

export const AppsPreview = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslate();

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const yOffset = rect.top;
      setOffsetY(yOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const downShiftIds = [3, 4, 5, 9, 10, 11];
  const MAX_SHIFT = 100;

  return (
    <section className="apps-preview" ref={sectionRef}>
      <div className="apps-preview__container">
        <div className="apps-preview__content">
          <h2 className="apps-preview__title">{t("apps-preview.title")}</h2>
          <p className="apps-preview__description">
            {t("apps-preview.description")}
          </p>
        </div>

        <div className="apps-preview__phones">
          <div className="apps-preview__phones-container">
            <div className="apps-preview__link-container">
              <Link className="apps-preview__link" href="/apps">
                <span>{t("apps-preview.link")}</span>
              </Link>
            </div>
            <ul className="apps-preview__list">
              {[...Array(7).keys(), ...Array(7).keys()].map((id, i) => (
                <li
                  key={i}
                  className={`apps-preview__item apps-preview__item--${i}`}
                  style={{
                    transform: `translateY(${(
                      Math.sin(offsetY / 300) *
                        MAX_SHIFT *
                        (downShiftIds.includes(i) ? -1 : 1) +
                      (downShiftIds.includes(i) ? 120 : 0)
                    ).toFixed(2)}px)`,
                  }}
                >
                  <img src={`/images/Phone${id}.png`} alt={`Phone ${i}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

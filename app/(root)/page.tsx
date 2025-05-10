"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Hero, Features } from "@/components";

import "./page.scss";

export default function Home() {
  const { t } = useTranslate();
  return (
    <>
      <Hero t={t} />
      <Features t={t} />
    </>
  );
}

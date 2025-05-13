"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import {
  Hero,
  Features,
  AristoByteUI,
  IdeeSection,
  ComponentStackSection,
} from "@/components";

import "./page.scss";

export default function Home() {
  const { t } = useTranslate();
  return (
    <>
      <Hero t={t} />
      <Features t={t} />
      <AristoByteUI t={t} />
      <IdeeSection t={t} />
      <ComponentStackSection t={t} />
    </>
  );
}

"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Home as HomeComponent } from "@/components";

import "./page.scss";

export default function Home() {
  const { t } = useTranslate();
  return <HomeComponent t={t} />;
}

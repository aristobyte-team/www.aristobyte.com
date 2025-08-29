import * as React from "react";

import { Hero } from "@/components";
import { Config } from "@/config";

export default function Insights() {
  return (
    <>
      <Hero
        withGradient
        icon={Config.insights.hero.icon}
        title="insights.hero.title"
        subtitle="insights.hero.subtitle"
        description="insights.hero.description"
        linkText="insights.hero.links"
        links={Config.insights.hero.links}
      />
    </>
  );
}

import * as React from "react";

import { Hero } from "@/components";
import { Config } from "@/config";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon={Config.apps.hero.icon}
        title="apps.hero.title"
        subtitle="apps.hero.subtitle"
        description="apps.hero.description"
        linkText="apps.hero.links"
        links={Config.apps.hero.links}
      />
    </>
  );
}

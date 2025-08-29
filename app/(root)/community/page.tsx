import * as React from "react";

import { Hero } from "@/components";
import { Config } from "@/config";

export default function Community() {
  return (
    <>
      <Hero
        withGradient
        icon={Config.community.hero.icon}
        title="community.hero.title"
        subtitle="community.hero.subtitle"
        description="community.hero.description"
        linkText="community.hero.links"
        links={Config.community.hero.links}
      />
    </>
  );
}

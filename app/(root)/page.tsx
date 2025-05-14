import * as React from "react";
import { Hero, Features, AppsPreview, UIComponentsPreview } from "@/components";
import { Config } from "@/config";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon={Config.home.hero.icon}
        title="home.hero.title"
        subtitle="home.hero.subtitle"
        description="home.hero.description"
        linkText="home.hero.links"
        links={Config.home.hero.links}
      />
      <Features />
      <AppsPreview />
      <UIComponentsPreview />
    </>
  );
}

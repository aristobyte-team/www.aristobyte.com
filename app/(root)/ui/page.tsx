import * as React from "react";
import { Hero, IdeeSection, ComponentStackSection } from "@/components";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        title="ui.hero.title"
        subtitle="ui.hero.subtitle"
        description="ui.hero.description"
      />
      <IdeeSection />
      <ComponentStackSection />
    </>
  );
}

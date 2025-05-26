import * as React from "react";
import { Hero, IdeeSection, ComponentStackSection } from "@/components";
import { Icons } from "@/utils";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon={Icons.Logo}
        title="ui.hero.title"
        subtitle="ui.hero.subtitle"
        description="ui.hero.description"
      />
      <IdeeSection />
      <ComponentStackSection />
    </>
  );
}

"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";

import { Header, Splash } from "@/components";

export type AppLayoutPropsType = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutPropsType) => {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <>
      <AnimatePresence>{isReady && <Header />}</AnimatePresence>
      <Splash isReady={isReady} setIsReady={setIsReady} />
      {isReady && <main>{children}</main>}
    </>
  );
};

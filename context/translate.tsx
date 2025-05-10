"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Locales, translate, type TranslateFunctionType } from "@/data";

const TranslateContext = React.createContext({
  t: ((_: string) => _) as TranslateFunctionType,
});

export type TranslateProviderPropsType = {
  children: React.ReactNode;
};

const getLocale = (pathname: string) =>
  Object.values(Locales).find((locale) =>
    pathname.toLowerCase().includes(`/${locale}`)
  ) ?? Locales.EN_GB;

export const TranslateProvider = ({ children }: TranslateProviderPropsType) => {
  const pathname = usePathname();
  const locale = getLocale(pathname);

  const t = translate(locale);

  return (
    <TranslateContext.Provider value={{ t }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => {
  return React.useContext(TranslateContext);
};

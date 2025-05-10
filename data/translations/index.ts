import { EN_GB } from "./en-gb";

export enum Locales {
  EN_GB = "",
}

export type TranslateFunctionType = (path: string) => string;

export const translate = (locale: Locales): TranslateFunctionType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let context: Record<string, any>;

  switch (locale) {
    case Locales.EN_GB:
    default:
      context = EN_GB;
      break;
  }

  return (path: string): string => {
    const value = path.split(".").reduce((acc, key) => acc?.[key], context);
    if (typeof value === "string") return value;
    throw new Error(`Missing or invalid translation for path: "${path}"`);
  };
};

import { Icons } from "@/utils";

export const Config = {
  header: {
    logo: Icons.Logo,
    nav: [
      { id: "our-product", href: "/our-products" },
      { id: "company", href: "/company" },
      { id: "insights", href: "/insights" },
      { id: "contact", href: "/contact" },
    ],
  },
  hero: {
    icon: Icons.Logo,
    links: [
      { id: "get-started", href: "/#features" },
      { id: "our-products", href: "/our-products" },
    ],
  },
  features: {
    cards: [
      {
        id: "modular-by-design",
        icon: Icons.Puzzle,
      },
      {
        id: "plug-and-play-integration",
        icon: Icons.Plug,
      },
      {
        id: "lightning-performance",
        icon: Icons.Zap,
      },
      {
        id: "future-proof-stack",
        icon: Icons.Dna,
      },
    ],
  },
};

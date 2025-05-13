import { Icons } from "@/utils";

export const Config = {
  header: {
    logo: Icons.Logo,
    nav: [
      { id: "ui", href: "/ui" },
      { id: "apps", href: "/apps" },
      { id: "insights", href: "/insights" },
      { id: "contact", href: "/contact" },
    ],
  },
  hero: {
    icon: Icons.Logo,
    links: [
      { id: "get-started", href: "features" },
      { id: "apps", href: "apps" },
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

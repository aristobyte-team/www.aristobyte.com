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
  home: {
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
  },
  apps: {
    hero: {
      icon: Icons.Logo,
      links: [
        { id: "instagram", href: "https://isntagram.com/aristo_byte" },
        { id: "facebook", href: "https://facebook.com/aristobyte" },
        { id: "twitter", href: "https://x.com/aristo_byte" },
      ],
    },
  },
};

import { Icons, LinkType } from "@/utils";

export const Config = {
  header: {
    logo: Icons.Logo,
    nav: [
      { id: "ui", href: "/ui" },
      { id: "apps", href: "/apps" },
      { id: "contact", href: "/contact" },
    ],
  },
  home: {
    hero: {
      icon: Icons.Logo,
      links: [
        { id: "get-started", href: "features", type: LinkType.SCROLL_LINK },
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
        {
          id: "instagram",
          href: "https://instagram.com/aristo_byte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "facebook",
          href: "https://facebook.com/aristobyte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "twitter",
          href: "https://x.com/aristo_byte",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
  },
  compliance: {
    main: {
      list: [
        {
          id: "terms-and-conditions",
          href: "/compliance/terms-and-conditions",
        },
        {
          id: "cookie-policy",
          href: "/compliance/cookie-policy",
        },
        {
          id: "privacy-policy",
          href: "/compliance/privacy-policy",
        },
        {
          id: "return-policy",
          href: "/compliance/return-policy",
        },
        {
          id: "acceptable-use-policy",
          href: "/compliance/acceptable-use-policy",
        },
        {
          id: "disclaimer",
          href: "/compliance/disclaimer",
        },
        {
          id: "eula",
          href: "/compliance/eula",
        },
        {
          id: "dsar",
          href: "/compliance/dsar",
        },
      ],
    },
  },
};

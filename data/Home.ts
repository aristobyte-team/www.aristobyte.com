import { Icons } from "@/utils";

export type HomeDataType = {
  subtitle: string;
  title: string;
  icon: string;
  description: string;
  imageURL: string;
  links: { id: string; href: string; text: string }[];
};

export const HomeData: HomeDataType = {
  title: "Smart. Scalable. Seamless.",
  subtitle: "Empowering Digital Progress",
  description:
    "Scalable web and mobile software tailored to help startups and businesses innovate faster, grow smarter, and operate more efficiently",
  icon: Icons.Logo,
  imageURL: "/images/car-top-white.png",
  links: [
    {
      id: "get-started",
      href: "/get-started",
      text: "Get started",
    },
    {
      id: "our-products",
      href: "/our-products",
      text: "Our products",
    },
  ],
};

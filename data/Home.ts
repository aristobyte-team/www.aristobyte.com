import { Icons } from "@/utils";

export type HomeDataType = {
  subtitle: string;
  title: string;
  icon: string;
  description: string;
  imageURL: string;
};

export const HomeData: HomeDataType = {
  subtitle: "Welcome",
  title: "Aristobyte",
  icon: Icons.CarFront,
  description:
    "AristoByte is a forward-thinking software and technology company specializing in the design, development, and deployment of custom web and mobile applications.",
  imageURL: "/images/car-top-white.png",
};

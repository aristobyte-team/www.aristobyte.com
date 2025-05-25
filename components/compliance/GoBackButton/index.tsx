import * as React from "react";
import NextLink from "next/link";

import { Icons } from "@/utils";

import "./GoBackButton.scss";

export const GoBackButton = () => (
  <NextLink href="/compliance" className="go-back-button">
    <span dangerouslySetInnerHTML={{ __html: Icons.ArrowLeft }} />
  </NextLink>
);

"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Gradient.scss";

export type GradientPropsType = {
  id?: string;
  preventMotionAnimation?: boolean;
};

export const Gradient = ({
  id = "standard",
  preventMotionAnimation = false,
}: GradientPropsType) => {
  if (preventMotionAnimation) {
    return (
      <div
        className={`gradient ${id
          .split(" ")
          .map((c) => `gradient--${c}`)
          .join(" ")}`}
      />
    );
  }

  return (
    <motion.div
      className={`gradient ${id
        .split(" ")
        .map((c) => `gradient--${c}`)
        .join(" ")}`}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      viewport={{ once: false }}
    />
  );
};

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Splash.scss";

export type SplashPropsType = {
  setIsReady: (v: boolean) => void;
  isReady: boolean;
};

export const Splash = ({ setIsReady, isReady }: SplashPropsType) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const { current: video } = videoRef;
    if (!video) return;

    video.play();

    const handleEnd = () => setIsReady(true);
    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, [setIsReady]);

  React.useEffect(() => {
    document.body.style.overflow = isReady ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isReady]);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <video
            ref={videoRef}
            className="splash__video"
            src="/videos/splash.mp4"
            muted
            playsInline
            preload="auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

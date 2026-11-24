"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 35 },
    down: { x: 0, y: -35 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              ...initialOffset,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

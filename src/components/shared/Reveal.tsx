"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = reduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

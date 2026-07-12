"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className={`
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
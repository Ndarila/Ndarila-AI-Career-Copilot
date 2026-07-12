"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(6,182,212,0.08)]
        transition-all
        duration-300
        hover:border-cyan-400/60
        hover:shadow-[0_0_60px_rgba(6,182,212,0.25)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
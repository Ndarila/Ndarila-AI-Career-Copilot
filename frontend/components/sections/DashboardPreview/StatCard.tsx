"use client";

import { motion } from "framer-motion";

type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
    >
      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-bold text-cyan-400">
        {value}
      </h3>
    </motion.div>
  );
}
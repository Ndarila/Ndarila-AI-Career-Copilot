"use client";

import { motion } from "framer-motion";

type Props = {
  score: number;
};

export default function DNAScore({ score }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
    >
      <p className="text-slate-400 uppercase tracking-widest">
        Overall AI Score
      </p>

      <h2 className="mt-6 text-7xl font-bold text-cyan-400">
        {score}%
      </h2>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          transition={{ duration: 1.2 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </motion.div>
  );
}
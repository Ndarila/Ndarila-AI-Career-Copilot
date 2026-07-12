"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  message,
  rating,
}: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-8
        backdrop-blur-xl
      "
    >
      <div className="mb-4 flex">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>

      <p className="leading-relaxed text-slate-300">
        "{message}"
      </p>

      <div className="mt-6">
        <h3 className="font-semibold text-white">
          {name}
        </h3>

        <p className="text-sm text-cyan-400">
          {role}
        </p>
      </div>
    </motion.div>
  );
}
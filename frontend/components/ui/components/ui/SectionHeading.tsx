"use client";

import { motion } from "framer-motion";

interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >
      <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
        {badge}
      </p>

      <h2 className="mb-6 text-5xl font-bold md:text-6xl">
        {title}

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          {highlight}
        </span>
      </h2>

      <p className="text-xl leading-8 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}
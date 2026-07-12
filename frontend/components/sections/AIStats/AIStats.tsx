"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";

import StatCounter from "./StatCounter";
import { stats } from "./StatsData";

export default function AIStats() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Platform Statistics"
          title="Trusted by Thousands of Professionals"
          subtitle="Real-world insights powered by artificial intelligence, helping professionals improve CVs, match jobs, and accelerate career growth."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              {...stat}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
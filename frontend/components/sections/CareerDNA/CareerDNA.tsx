"use client";

import { motion } from "framer-motion";

import DNAScore from "./DNAScore";
import SkillsRadar from "./SkillsRadar";
import AIInsight from "./AIInsight";

import {
  dnaScore,
  strengths,
  improvements,
  summary,
} from "./CareerData";

export default function CareerDNA() {
  return (
    <section
      id="career-dna"
      className="bg-slate-950 py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
            AI Career DNA
          </p>

          <h2 className="text-5xl font-bold">
            Understand Your Professional Profile
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Our AI analyzes your technical skills, identifies strengths,
            highlights improvement areas, and generates personalized career
            recommendations.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <DNAScore score={dnaScore} />
          <AIInsight summary={summary} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <SkillsRadar
            title="Core Strengths"
            items={strengths}
          />

          <SkillsRadar
            title="Growth Opportunities"
            items={improvements}
          />
        </div>
      </div>
    </section>
  );
}
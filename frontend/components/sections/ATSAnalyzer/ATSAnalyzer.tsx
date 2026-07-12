"use client";

import { motion } from "framer-motion";

import ATSScore from "./ATSScore";
import CVBreakdown from "./CVBreakdown";
import ATSInsight from "./ATSInsight";

import {
  atsScore,
  cvSections,
  strengths,
  improvements,
} from "./ATSData";

export default function ATSAnalyzer() {
  return (
    <section
      id="ats"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
            ATS CV Analyzer
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Optimize Your Resume for Recruiters
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Our AI scans your CV the same way Applicant Tracking
            Systems do, identifying strengths, keyword gaps,
            formatting issues, and opportunities to improve your
            interview chances.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ATSScore score={atsScore} />
          <CVBreakdown sections={cvSections} />
        </div>

        <div className="mt-10">
          <ATSInsight
            strengths={strengths}
            improvements={improvements}
          />
        </div>
      </div>
    </section>
  );
}
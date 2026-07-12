"use client";

import { motion } from "framer-motion";

import MatchCard from "./MatchCard";
import MissingSkills from "./MissingSkills";
import JobInsight from "./JobInsight";

import {
  matchScore,
  strongSkills,
  missingSkills,
  insight,
} from "./JobData";

export default function JobMatcher() {
  return (
    <section
      id="job-matcher"
      className="bg-slate-900 py-32 px-6"
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
            AI Job Match Engine
          </p>

          <h2 className="text-5xl font-bold">
            Match Your Profile to Any Job
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Instantly compare your skills against job requirements and receive
            AI-powered recommendations to improve your chances.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <MatchCard score={matchScore} />
          <JobInsight insight={insight} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <MissingSkills
            title="Strong Skills"
            skills={strongSkills}
            positive
          />

          <MissingSkills
            title="Missing Skills"
            skills={missingSkills}
          />
        </div>

      </div>
    </section>
  );
}
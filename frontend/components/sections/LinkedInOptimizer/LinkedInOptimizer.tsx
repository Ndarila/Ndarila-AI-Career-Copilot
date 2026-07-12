"use client";

import { motion } from "framer-motion";

import LinkedInScore from "./LinkedInScore";
import ProfileCard from "./ProfileCard";
import LinkedInInsight from "./LinkedInInsight";

import {
  linkedinScore,
  profile,
  strengths,
  improvements,
} from "./LinkedInData";

export default function LinkedInOptimizer() {
  return (
    <section
      id="linkedin"
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
            LinkedIn Optimizer
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Improve Your Professional Presence
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            AI evaluates your LinkedIn profile,
            recruiter visibility, networking,
            profile strength, and content quality
            to maximize interview opportunities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <LinkedInScore score={linkedinScore} />
          <ProfileCard profile={profile} />
        </div>

        <div className="mt-10">
          <LinkedInInsight
            strengths={strengths}
            improvements={improvements}
          />
        </div>
      </div>
    </section>
  );
}
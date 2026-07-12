"use client";

import { motion } from "framer-motion";

import GithubScore from "./GithubScore";
import RepoCard from "./RepoCard";
import GithubInsight from "./GithubInsight";

import {
  githubScore,
  repositories,
  insights,
} from "./GithubData";

export default function GithubIntelligence() {
  return (
    <section
      id="github"
      className="py-28 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-semibold text-cyan-400">
            GitHub Intelligence
          </p>

          <h2 className="text-4xl font-bold text-white">
            Analyze Your Development Profile
          </h2>

          <p className="mt-5 max-w-3xl text-slate-400">
            AI evaluates repository quality, commit history,
            documentation, technologies, and overall portfolio
            professionalism.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">

            <h3 className="mb-8 text-center text-xl font-semibold text-white">
              GitHub Quality Score
            </h3>

            <GithubScore score={githubScore} />

          </div>

          <div className="space-y-5">

            <h3 className="text-xl font-semibold text-white">
              Featured Repositories
            </h3>

            {repositories.map((repo) => (
              <RepoCard
                key={repo.name}
                repo={repo}
              />
            ))}

          </div>

        </div>

        <div className="mt-16">

          <h3 className="mb-8 text-2xl font-bold text-white">
            AI Insights
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            {insights.map((item) => (
              <GithubInsight
                key={item}
                insight={item}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

import StatCard from "./StatCard";
import SkillsCard from "./SkillsCard";
import RecommendationCard from "./RecommendationCard";
import ActivityChart from "./ActivityChart";

import {
  stats,
  skills,
  recommendations,
} from "./DashboardData";

export default function DashboardPreview() {
  return (
    <section className="bg-slate-900 py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            AI Dashboard
          </p>

          <h2 className="text-5xl font-bold">
            Experience Your Career Intelligence
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <SkillsCard skills={skills} />

          <RecommendationCard
            recommendations={recommendations}
          />

          <ActivityChart />
        </div>

      </div>
    </section>
  );
}
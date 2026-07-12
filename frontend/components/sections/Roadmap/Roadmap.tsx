"use client";

import { motion } from "framer-motion";

import TimelineCard from "./TimelineCard";
import MilestoneCard from "./MilestoneCard";

import { milestones } from "./RoadmapData";

export default function Roadmap() {
  return (
    <section className="py-32 px-6 bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Career Roadmap
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Your Personalized Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Follow an AI-generated roadmap designed to help you
            acquire the right technical skills, certifications,
            and projects required for your dream career.
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((item) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="grid gap-6 lg:grid-cols-2"
            >
              <TimelineCard
                month={item.month}
                title={item.title}
              />

              <MilestoneCard
                skills={item.skills}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileSearch,
  Briefcase,
  BarChart3,
  Mic,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const features = [
  {
    icon: <BrainCircuit size={34} />,
    title: "AI Career DNA",
    description:
      "Discover your strengths, technical profile and growth opportunities using intelligent AI skill mapping.",
  },
  {
    icon: <FileSearch size={34} />,
    title: "ATS CV Analysis",
    description:
      "Upload your CV and receive ATS scoring, recruiter insights and improvement recommendations.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Job Match Engine",
    description:
      "Paste any job description and instantly see how well your profile matches employer requirements.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Career Dashboard",
    description:
      "Track applications, interviews, hiring probability and career growth from one intelligent dashboard.",
  },
  {
    icon: <FaGithub size={34} />,
    title: "GitHub Intelligence",
    description:
      "Analyze repositories, documentation quality, commits, languages and project professionalism.",
  },
  {
    icon: <FaLinkedin size={34} />,
    title: "LinkedIn Optimizer",
    description:
      "Improve recruiter visibility with AI-powered headline, skills and profile recommendations.",
  },
  {
    icon: <Mic size={34} />,
    title: "AI Interview Coach",
    description:
      "Practice interviews using speech analysis with instant feedback on confidence and communication.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Career Copilot",
    description:
      "Chat with your personal AI mentor for learning roadmaps, certifications and career planning.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
            AI Powered Platform
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Accelerate Your Career
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-400">
            Ndarila AI Career Copilot combines CV analysis, ATS scoring,
            GitHub intelligence, LinkedIn optimization, interview coaching,
            career roadmaps and hiring insights into one premium platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-cyan-500/20">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
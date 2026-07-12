"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-6 text-cyan-400"
        >
          🚀 Built by James Ndarila Wanjala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-6xl font-extrabold leading-tight"
        >
          Ndarila AI <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Career Copilot
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.7 }}
          className="mx-auto mt-8 max-w-3xl text-xl text-slate-300"
        >
          An AI-powered platform that analyzes CVs, predicts hiring
          probability, matches jobs, builds career roadmaps, evaluates
          interviews and helps professionals accelerate their careers.
        </motion.p>

        <motion.div
          initial={{ opacity:0,y:20 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:1 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold hover:bg-cyan-400">
            Launch AI
          </button>

          <button className="rounded-xl border border-cyan-500 px-8 py-4">
            View Demo
          </button>
        </motion.div>

      </div>

    </section>
  );
}
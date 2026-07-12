"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <FaRobot className="text-3xl text-cyan-400" />

          <div>
            <h1 className="text-xl font-bold text-white">
              NdarilaAI
            </h1>

            <p className="text-xs text-slate-400">
              Career Copilot
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-slate-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400">
          Launch AI
        </button>
      </div>
    </motion.nav>
  );
}
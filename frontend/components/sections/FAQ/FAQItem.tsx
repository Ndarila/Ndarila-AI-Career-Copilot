"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {

  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="font-semibold text-white">
          {question}
        </span>

        <span className="text-cyan-400 text-xl">
          {open ? "−" : "+"}
        </span>

      </button>


      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden"
      >

        <p className="px-6 pb-5 text-slate-400 leading-relaxed">
          {answer}
        </p>

      </motion.div>

    </div>
  );
}
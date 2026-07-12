"use client";

import { Sparkles } from "lucide-react";

type Props = {
  summary: string;
};

export default function AIInsight({
  summary,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="text-cyan-400" />

        <h3 className="text-2xl font-bold">
          AI Insight
        </h3>
      </div>

      <p className="leading-8 text-slate-300">
        {summary}
      </p>
    </div>
  );
}
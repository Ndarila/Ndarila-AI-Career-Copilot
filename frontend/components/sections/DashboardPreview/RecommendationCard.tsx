"use client";

import { CheckCircle } from "lucide-react";

type RecommendationCardProps = {
  recommendations: string[];
};

export default function RecommendationCard({
  recommendations,
}: RecommendationCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-8 text-2xl font-bold">
        AI Recommendations
      </h3>

      <div className="space-y-5">
        {recommendations.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle
              size={20}
              className="text-cyan-400"
            />

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
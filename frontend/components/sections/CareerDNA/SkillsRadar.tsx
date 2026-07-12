"use client";

import { CheckCircle } from "lucide-react";

type Props = {
  title: string;
  items: string[];
};

export default function SkillsRadar({
  title,
  items,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-6 text-2xl font-bold">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle
              size={20}
              className="text-cyan-400"
            />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
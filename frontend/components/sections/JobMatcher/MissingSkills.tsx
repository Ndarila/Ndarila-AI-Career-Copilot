"use client";

import { XCircle, CheckCircle } from "lucide-react";

type Props = {
  title: string;
  skills: string[];
  positive?: boolean;
};

export default function MissingSkills({
  title,
  skills,
  positive = false,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-6 text-2xl font-bold">
        {title}
      </h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3"
          >
            {positive ? (
              <CheckCircle
                className="text-green-400"
                size={20}
              />
            ) : (
              <XCircle
                className="text-red-400"
                size={20}
              />
            )}

            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
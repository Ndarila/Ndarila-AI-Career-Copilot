"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  score: number;
}

export default function ATSScore({ score }: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">
      <h3 className="mb-6 text-xl font-semibold">
        ATS Compatibility Score
      </h3>

      <div className="mx-auto h-44 w-44">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
        />
      </div>
    </div>
  );
}
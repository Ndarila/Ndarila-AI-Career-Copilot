"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  score: number;
}

export default function GithubScore({ score }: Props) {
  return (
    <div className="mx-auto h-44 w-44">
      <CircularProgressbar
        value={score}
        text={`${score}%`}
      />
    </div>
  );
}
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  number: number;
  suffix: string;
  label: string;
};

export default function StatCounter({
  number,
  suffix,
  label,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
    >
      <h3 className="text-5xl font-bold text-cyan-400">
        {inView ? (
          <CountUp
            end={number}
            duration={2}
            decimals={number % 1 !== 0 ? 1 : 0}
          />
        ) : (
          0
        )}
        {suffix}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </div>
  );
}
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 18, label: "AI Features" },
  { value: 97, label: "ATS Accuracy %" },
  { value: 100, label: "Skills Analysed +" },
  { value: 24, label: "AI Career Coach" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-slate-950 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-lg"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {inView ? <CountUp end={item.value} duration={2} /> : 0}
            </h2>

            <p className="mt-3 text-slate-300">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
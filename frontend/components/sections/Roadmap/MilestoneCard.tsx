"use client";

type Props = {
  skills: string[];
};

export default function MilestoneCard({
  skills,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
      <h4 className="mb-4 text-lg font-semibold text-white">
        Skills
      </h4>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
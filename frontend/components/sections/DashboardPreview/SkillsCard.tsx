"use client";

type Skill = {
  name: string;
  level: number;
};

type SkillsCardProps = {
  skills: Skill[];
};

export default function SkillsCard({
  skills,
}: SkillsCardProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-8 text-2xl font-bold">
        Career Skills
      </h3>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between">
              <span>{skill.name}</span>

              <span className="text-cyan-400">
                {skill.level}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
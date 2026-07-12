interface Section {
  title: string;
  score: number;
}

interface Props {
  sections: Section[];
}

export default function CVBreakdown({ sections }: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">
      <h3 className="mb-6 text-xl font-semibold">
        CV Section Analysis
      </h3>

      <div className="space-y-5">
        {sections.map((item) => (
          <div key={item.title}>
            <div className="mb-2 flex justify-between">
              <span>{item.title}</span>
              <span className="text-cyan-400">
                {item.score}%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div
                className="h-2 rounded-full bg-cyan-400"
                style={{
                  width: `${item.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
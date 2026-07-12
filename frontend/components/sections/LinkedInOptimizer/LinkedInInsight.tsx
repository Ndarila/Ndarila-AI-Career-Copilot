interface Props {
  strengths: string[];
  improvements: string[];
}

export default function LinkedInInsight({
  strengths,
  improvements,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">
      <h3 className="mb-6 text-xl font-semibold">
        AI Recommendations
      </h3>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-4 font-semibold text-cyan-400">
            Strengths
          </h4>

          <ul className="space-y-2">
            {strengths.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-cyan-400">
            Improvements
          </h4>

          <ul className="space-y-2">
            {improvements.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
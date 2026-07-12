interface Props {
  insight: string;
}

export default function GithubInsight({ insight }: Props) {
  return (
    <div className="rounded-xl bg-cyan-500/10 p-4 text-slate-300 border border-cyan-500/20">
      {insight}
    </div>
  );
}
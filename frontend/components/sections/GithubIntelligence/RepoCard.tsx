interface Props {
  repo: {
    name: string;
    language: string;
    stars: number;
    commits: number;
  };
}

export default function RepoCard({ repo }: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-5">
      <h3 className="font-semibold text-white">
        {repo.name}
      </h3>

      <p className="mt-1 text-sm text-cyan-300">
        {repo.language}
      </p>

      <div className="mt-4 flex justify-between text-sm text-slate-400">
        <span>⭐ {repo.stars}</span>
        <span>{repo.commits} commits</span>
      </div>
    </div>
  );
}
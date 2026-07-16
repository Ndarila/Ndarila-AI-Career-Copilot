interface Props {
  badge?: string;
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      {badge && (
        <div className="mb-4">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
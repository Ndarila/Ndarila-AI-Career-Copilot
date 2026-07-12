"use client";

type Props = {
  month: string;
  title: string;
};

export default function TimelineCard({
  month,
  title,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
      <p className="text-cyan-400 text-sm uppercase">
        {month}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}
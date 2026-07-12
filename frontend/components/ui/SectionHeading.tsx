interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}
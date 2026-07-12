interface Props {
  text: string;
}

export default function GlowBadge({
  text,
}: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-cyan-400/40
      bg-cyan-500/10
      px-4
      py-2
      text-sm
      text-cyan-300
    "
    >
      {text}
    </span>
  );
}
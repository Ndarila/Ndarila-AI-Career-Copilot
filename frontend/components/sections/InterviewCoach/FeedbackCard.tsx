interface Props {
  feedback: string;
}

export default function FeedbackCard({ feedback }: Props) {
  return (
    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-slate-300">

      <span>
        ✓ {feedback}
      </span>

    </div>
  );
}
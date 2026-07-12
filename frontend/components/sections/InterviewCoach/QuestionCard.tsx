interface Props {
  question: {
    question: string;
    category: string;
  };
}

export default function QuestionCard({ question }: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6">

      <span className="text-sm text-cyan-400">
        {question.category}
      </span>

      <h3 className="mt-3 text-lg font-semibold text-white">
        {question.question}
      </h3>

      <button className="mt-5 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        Practice Answer
      </button>

    </div>
  );
}
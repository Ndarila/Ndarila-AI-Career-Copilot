interface Props {
  role: string;
  message: string;
}


export default function MessageBubble({
  role,
  message,
}: Props) {

  const isAI = role === "ai";


  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >

      <div
        className={`max-w-xl rounded-2xl p-5 ${
          isAI
            ? "border border-cyan-500/20 bg-slate-800 text-slate-200"
            : "bg-cyan-500/20 text-white"
        }`}
      >

        <p className="mb-2 text-sm text-cyan-400">
          {isAI ? "Career Copilot AI" : "You"}
        </p>


        <p>
          {message}
        </p>


      </div>

    </div>
  );
}
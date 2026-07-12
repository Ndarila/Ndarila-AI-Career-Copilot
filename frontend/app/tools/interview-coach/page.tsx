"use client";

import { useState } from "react";

export default function InterviewCoach() {
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function reviewAnswer() {
    if (!role || !question || !answer) {
      alert("Please complete all fields.");
      return;
    }

    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/interview/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
            question,
            answer,
          }),
        }
      );

      const data = await response.json();

      setFeedback(data.feedback || "No feedback received.");
    } catch (error) {
      setFeedback("Unable to connect to AI backend.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold text-white">
          🎤 AI Interview Coach
        </h1>

        <p className="mt-4 text-slate-400 text-lg">
          Practice interviews and receive AI-powered feedback.
        </p>


        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          {/* Role */}
          <label className="text-white font-semibold">
            Job Role
          </label>

          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Example: Data Analyst"
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />


          {/* Question */}
          <label className="mt-6 block text-white font-semibold">
            Interview Question
          </label>

          <textarea
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: Tell me about a project you built."
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />


          {/* Answer */}
          <label className="mt-6 block text-white font-semibold">
            Your Answer
          </label>

          <textarea
            rows={8}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your interview answer here..."
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />


          <button
            onClick={reviewAnswer}
            disabled={loading}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
          >
            {loading ? "Analyzing Answer..." : "Review My Answer"}
          </button>

        </div>


        {feedback && (
          <div className="mt-10 rounded-3xl bg-slate-900 p-8">

            <h2 className="mb-5 text-3xl font-bold text-white">
              🤖 AI Interview Feedback
            </h2>

            <pre className="whitespace-pre-wrap text-slate-200">
              {feedback}
            </pre>

          </div>
        )}

      </div>
    </main>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function CareerChat() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `# 👋 Welcome to NdarilaAI Career Copilot

I'm your personal AI Career Mentor.

I can help you with:

- 🎯 Career Roadmaps
- 📄 ATS Resume Reviews
- 💼 Job Search Strategy
- 🔗 LinkedIn Optimization
- 🎤 Interview Preparation
- 🐍 Python
- 🗄 SQL
- 📊 Data Analytics
- 🤖 AI Engineering
- 🚀 Portfolio Reviews

Choose one of the quick actions below or ask me anything.`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askAI(customQuestion?: string) {
    const userQuestion = (customQuestion ?? question).trim();

    if (!userQuestion) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/ai/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ??
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Unable to connect to the backend.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">

      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

        {/* Header */}

        <div className="border-b border-slate-700 bg-slate-950 p-6">

          <h1 className="text-3xl font-bold text-white">
            🤖 NdarilaAI Career Copilot
          </h1>

          <p className="mt-2 text-slate-400">
            AI-powered career mentor for Data, AI & Tech professionals
          </p>

        </div>

        {/* Messages */}

        <div className="h-[600px] overflow-y-auto bg-slate-900 p-6 space-y-6">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "assistant"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              <div
                className={`max-w-3xl rounded-2xl p-5 shadow-lg ${
                  msg.role === "assistant"
                    ? "bg-slate-800 text-white"
                    : "bg-cyan-500 text-black"
                }`}
              >

                <div className="mb-3 text-sm font-bold">

                  {msg.role === "assistant"
                    ? "🤖 NdarilaAI"
                    : "👤 You"}

                </div>

                <div className="prose prose-invert max-w-none">

                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>

                </div>

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <div className="rounded-2xl bg-slate-800 px-5 py-4 text-white animate-pulse">

                🤖 Thinking...

              </div>

            </div>

          )}

          <div ref={bottomRef} />

        </div>

        {/* Input */}

        <div className="border-t border-slate-700 bg-slate-950 p-6">

          {/* Quick Actions */}

          <div className="mb-6 flex flex-wrap gap-3">

            <button
              onClick={() => askAI("Review my Data Analyst CV")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
            >
              📄 Review my CV
            </button>

            <button
              onClick={() => askAI("Create a 6-month Data Analyst roadmap")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
            >
              🗺 Career Roadmap
            </button>

            <button
              onClick={() => askAI("Prepare me for a SQL interview")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
            >
              💼 SQL Interview
            </button>

            <button
              onClick={() => askAI("Improve my LinkedIn profile")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
            >
              🔗 LinkedIn
            </button>

            <button
              onClick={() => askAI("What projects should I build for my portfolio?")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
            >
              🚀 Portfolio
            </button>

          </div>

          <textarea
            rows={3}
            value={question}
            placeholder="Ask anything about your career..."
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askAI();
              }
            }}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <div className="mt-4 flex items-center justify-between">

            <p className="text-sm text-slate-400">
              Press Enter to send • Shift + Enter for a new line
            </p>

            <button
              onClick={() => askAI()}
              disabled={loading}
              className="rounded-xl bg-cyan-500 px-8 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading ? "Thinking..." : "🚀 Send"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
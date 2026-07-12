"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeResume() {
    if (!file) return;

    setLoading(true);
    setAnalysis("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/resume/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Analysis failed.");
      }

      setAnalysis(data.analysis);
    } catch (error) {
      console.error(error);
      setAnalysis("Unable to analyze resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold">
          📄 Resume Analyzer
        </h1>

        <p className="mt-4 text-slate-400">
          Upload your CV and let AI review it.
        </p>

        <div className="mt-10 rounded-3xl bg-slate-900 p-10">

          <label className="block">
            <span className="text-white">
              Upload Resume
            </span>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
              className="mt-4 block w-full rounded-xl bg-slate-800 p-4"
            />
          </label>

          {file && (
            <div className="mt-8 rounded-xl bg-slate-800 p-6">
              <p className="text-green-400">
                ✅ {file.name}
              </p>
            </div>
          )}

          <button
            onClick={analyzeResume}
            disabled={!file || loading}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

        {analysis && (
          <div className="prose prose-invert mt-10 max-w-none rounded-2xl border border-slate-700 bg-slate-900 p-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {analysis}
            </ReactMarkdown>
          </div>
        )}

      </div>
    </main>
  );
}
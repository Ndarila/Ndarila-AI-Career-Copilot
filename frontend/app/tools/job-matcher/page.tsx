"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function JobMatcher() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeMatch() {
    if (!file || !jobDescription.trim()) return;

    setLoading(true);
    setAnalysis("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/job-matcher/match",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Unable to analyze.");
      }

      setAnalysis(data.analysis);
    } catch (err) {
      console.error(err);
      setAnalysis("Unable to analyze job match.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-bold">
          🎯 Job Matcher
        </h1>

        <p className="mt-4 text-slate-400">
          Upload your resume and compare it with any job description.
        </p>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <label className="block">
            <span>Upload Resume</span>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
              className="mt-4 block w-full rounded-xl bg-slate-800 p-4"
            />
          </label>

          {file && (
            <div className="mt-6 rounded-xl bg-slate-800 p-4 text-green-400">
              ✅ {file.name}
            </div>
          )}

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            className="mt-8 h-72 w-full rounded-xl bg-slate-800 p-4"
          />

          <button
            onClick={analyzeMatch}
            disabled={loading || !file || !jobDescription}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Match"}
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
"use client";

import { useState } from "react";

export default function CareerRoadmap() {
  const [currentRole, setCurrentRole] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [experience, setExperience] = useState("");
  const [timeline, setTimeline] = useState("");

  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");

  async function generateRoadmap() {

    if (!currentRole || !targetRole || !experience || !timeline) {
      alert("Please complete all fields.");
      return;
    }

    setLoading(true);
    setRoadmap("");

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/roadmap/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            current_role: currentRole,
            target_role: targetRole,
            experience,
            timeline,
          }),
        }
      );


      const data = await response.json();

      setRoadmap(data.roadmap || "No roadmap generated.");

    } catch {

      setRoadmap(
        "Unable to connect to NdarilaAI backend."
      );

    }

    setLoading(false);
  }


  return (
    <main className="min-h-screen bg-slate-950 p-10">

      <div className="mx-auto max-w-5xl">


        <h1 className="text-5xl font-bold text-white">
          🗺 AI Career Roadmap
        </h1>


        <p className="mt-4 text-lg text-slate-400">
          Generate a personalized AI-powered career growth plan.
        </p>



        <div className="mt-10 rounded-3xl bg-slate-900 p-8">


          <label className="text-white font-semibold">
            Current Role
          </label>

          <input
            value={currentRole}
            onChange={(e)=>setCurrentRole(e.target.value)}
            placeholder="Example: ICT Graduate"
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />



          <label className="mt-6 block text-white font-semibold">
            Target Career
          </label>

          <input
            value={targetRole}
            onChange={(e)=>setTargetRole(e.target.value)}
            placeholder="Example: Data Scientist"
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />



          <label className="mt-6 block text-white font-semibold">
            Experience Level
          </label>

          <input
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
            placeholder="Example: Beginner"
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />



          <label className="mt-6 block text-white font-semibold">
            Timeline
          </label>

          <input
            value={timeline}
            onChange={(e)=>setTimeline(e.target.value)}
            placeholder="Example: 6 Months"
            className="mt-3 w-full rounded-xl bg-slate-800 p-4 text-white"
          />



          <button
            onClick={generateRoadmap}
            disabled={loading}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black hover:bg-cyan-400"
          >
            {loading 
              ? "Generating Roadmap..."
              : "Generate My Roadmap"
            }
          </button>


        </div>



        {roadmap && (

          <div className="mt-10 rounded-3xl bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold text-white">
              🤖 Your AI Career Roadmap
            </h2>


            <pre className="whitespace-pre-wrap text-slate-200">
              {roadmap}
            </pre>

          </div>

        )}


      </div>

    </main>
  );
}
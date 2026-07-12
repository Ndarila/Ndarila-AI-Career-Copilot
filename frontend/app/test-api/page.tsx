"use client";

import { useState } from "react";
import { careerAI } from "@/lib/api";

export default function TestAPI() {

  const [result, setResult] = useState("");

  async function test() {

    const data = await careerAI(
      "Give me a career roadmap for a Python AI developer"
    );

    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="p-10">

      <button
        onClick={test}
        className="bg-blue-600 text-white px-5 py-3 rounded"
      >
        Test Career AI
      </button>

      <pre className="mt-5">
        {result}
      </pre>

    </main>
  );
}
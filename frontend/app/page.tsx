import Link from "next/link";

const tools = [
  {
    title: "Career Copilot",
    icon: "💬",
    description: "Ask AI career questions",
    href: "/tools/career-copilot",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Resume Analyzer",
    icon: "📄",
    description: "Analyze ATS score",
    href: "/tools/resume-analyzer",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Job Matcher",
    icon: "🎯",
    description: "Find matching jobs",
    href: "/tools/job-matcher",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Interview Coach",
    icon: "🎤",
    description: "Practice interviews",
    href: "/tools/interview-coach",
    color: "from-orange-500 to-red-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-10">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 p-10 shadow-2xl">

          <h1 className="text-5xl font-extrabold text-white">
            👋 Welcome back, James
          </h1>

          <p className="mt-4 max-w-3xl text-xl text-cyan-100">
            Your AI-powered career platform for Data Analytics,
            Artificial Intelligence and Software Engineering.
          </p>

        </div>

        {/* AI Tools */}

        <h2 className="mt-14 text-3xl font-bold text-white">
          🚀 AI Tools
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {tools.map((tool) => (

            <Link
              key={tool.title}
              href={tool.href}
              className={`rounded-3xl bg-gradient-to-br ${tool.color} p-8 shadow-xl transition duration-300 hover:scale-105 hover:shadow-cyan-500/30`}
            >

              <div className="text-6xl">
                {tool.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                {tool.title}
              </h2>

              <p className="mt-3 text-white/80">
                {tool.description}
              </p>

            </Link>

          ))}

        </div>

        {/* Statistics */}

        <h2 className="mt-16 text-3xl font-bold text-white">
          📊 Platform Status
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-slate-900 p-8 shadow-lg">

            <h3 className="text-slate-400">
              AI Assistant
            </h3>

            <p className="mt-3 text-5xl font-bold text-cyan-400">
              Live
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8 shadow-lg">

            <h3 className="text-slate-400">
              AI Modules
            </h3>

            <p className="mt-3 text-5xl font-bold text-green-400">
              5
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8 shadow-lg">

            <h3 className="text-slate-400">
              AI Provider
            </h3>

            <p className="mt-3 text-3xl font-bold text-purple-400">
              OpenRouter
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8 shadow-lg">

            <h3 className="text-slate-400">
              System Status
            </h3>

            <p className="mt-3 text-3xl font-bold text-emerald-400">
              Online
            </p>

          </div>

        </div>

        {/* Recent Conversations */}

        <div className="mt-16 rounded-3xl bg-slate-900 p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            🕒 Recent Conversations
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
              💬 How do I become a Data Analyst?
            </div>

            <div className="rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
              📄 Review my Resume
            </div>

            <div className="rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
              🎤 SQL Interview Questions
            </div>

            <div className="rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
              🚀 Build my Career Roadmap
            </div>

          </div>

        </div>

        {/* AI Capabilities */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 p-10 shadow-2xl">

          <h2 className="text-4xl font-bold text-white">
            🤖 What NdarilaAI Can Do
          </h2>

          <p className="mt-3 max-w-3xl text-cyan-100">
            One intelligent platform to help professionals accelerate their
            careers using Artificial Intelligence.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              📄 ATS Resume Analysis
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              🎯 AI Job Matching
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              🎤 Interview Coaching
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              🗺 Personalized Career Roadmaps
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              💼 LinkedIn Optimization
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              🤖 AI Career Mentor
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
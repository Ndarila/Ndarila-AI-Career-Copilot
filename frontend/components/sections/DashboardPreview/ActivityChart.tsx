"use client";

export default function ActivityChart() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-8 text-2xl font-bold">
        Weekly Activity
      </h3>

      <div className="flex h-56 items-end justify-between gap-3">
        {[45, 70, 55, 85, 60, 95, 75].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500 transition-all duration-300 hover:opacity-80"
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
"use client";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-white">
            Trusted by Professionals
          </h2>

          <p className="mt-4 text-slate-400">
            See how AI-powered career intelligence helps professionals
            improve their hiring journey.
          </p>

        </div>


        <div className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
        ">

          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
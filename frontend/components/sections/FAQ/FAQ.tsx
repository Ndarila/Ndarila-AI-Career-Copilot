import FAQItem from "./FAQItem";
import { faqData } from "./FAQData";

export default function FAQ() {

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-3">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need To Know
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Learn how NdarilaAI Career Copilot helps you improve your CV,
            prepare for interviews, and accelerate your technology career.
          </p>

        </div>


        {/* FAQ List */}
        <div className="space-y-5">

          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}

        </div>


      </div>

    </section>
  );
}
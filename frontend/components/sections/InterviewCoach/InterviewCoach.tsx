"use client";

import { motion } from "framer-motion";

import InterviewScore from "./InterviewScore";
import QuestionCard from "./QuestionCard";
import FeedbackCard from "./FeedbackCard";

import {
  interviewScore,
  interviewStats,
  questions,
  feedback,
  recommendations,
} from "./InterviewData";


export default function InterviewCoach() {

  return (

    <section
      id="interview"
      className="bg-slate-950 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}
        >

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
            AI Interview Coach
          </span>


          <h2 className="mt-6 text-5xl font-bold text-white">
            Prepare For Your Next Interview With AI
          </h2>


          <p className="mt-6 max-w-3xl text-lg text-slate-400">

            Practice technical and behavioural interviews,
            receive AI feedback, analyze communication,
            and improve your confidence before meeting recruiters.

          </p>


        </motion.div>



        <div className="mt-16 grid gap-8 lg:grid-cols-2">


          <InterviewScore
            score={interviewScore}
          />



          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">

            <h3 className="mb-6 text-xl font-semibold text-white">
              Interview Performance
            </h3>


            <div className="space-y-5">


              <div className="flex justify-between">
                <span>
                  Confidence
                </span>

                <span className="text-cyan-400">
                  {interviewStats.confidence}
                </span>
              </div>



              <div className="flex justify-between">
                <span>
                  Communication
                </span>

                <span className="text-cyan-400">
                  {interviewStats.communication}
                </span>
              </div>



              <div className="flex justify-between">
                <span>
                  Technical Knowledge
                </span>

                <span className="text-cyan-400">
                  {interviewStats.technicalKnowledge}
                </span>
              </div>



              <div className="flex justify-between">
                <span>
                  Problem Solving
                </span>

                <span className="text-cyan-400">
                  {interviewStats.problemSolving}
                </span>
              </div>


            </div>


          </div>


        </div>




        <div className="mt-16">

          <h3 className="mb-8 text-2xl font-bold text-white">
            AI Interview Questions
          </h3>


          <div className="grid gap-6 md:grid-cols-3">

            {questions.map((item)=>(
              <QuestionCard
                key={item.question}
                question={item}
              />
            ))}

          </div>

        </div>





        <div className="mt-16">

          <h3 className="mb-8 text-2xl font-bold text-white">
            AI Feedback
          </h3>


          <div className="grid gap-5 md:grid-cols-2">


            {feedback.map((item)=>(
              <FeedbackCard
                key={item}
                feedback={item}
              />
            ))}


          </div>


        </div>





        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-slate-900 p-8">


          <h3 className="mb-6 text-xl font-semibold text-white">
            Recommended Improvements
          </h3>


          <ul className="space-y-3 text-slate-300">

            {recommendations.map((item)=>(
              <li key={item}>
                • {item}
              </li>
            ))}


          </ul>


        </div>



      </div>


    </section>

  );
}
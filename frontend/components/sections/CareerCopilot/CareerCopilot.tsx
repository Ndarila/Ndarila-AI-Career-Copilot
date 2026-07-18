"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { careerAI } from "@/lib/api";


export default function CareerCopilot() {


  const [question, setQuestion] = useState("");

  const [response, setResponse] = useState(
    "👋 Hello! I am your NdarilaAI Career Copilot.\n\nAsk me anything about your career."
  );


  const [loading, setLoading] = useState(false);





  async function sendMessage(customQuestion?: string) {


    const prompt =
      customQuestion ?? question;



    if (!prompt.trim()) return;



    setLoading(true);



    console.log(
      "Sending question:",
      prompt
    );



    try {


      const data =
        await careerAI(prompt);



      console.log(
        "AI Response:",
        data
      );



      setResponse(
        data.response
      );



    } catch(error:any) {


      console.error(
        "Career AI Error:",
        error
      );



      setResponse(
        `❌ Unable to contact the AI service.\n\n${error.message}`
      );



    } finally {


      setLoading(false);

      setQuestion("");

    }


  }






  const suggestions = [

    "How do I become a Data Analyst?",

    "Give me a Python Developer roadmap.",

    "How do I become an AI Engineer?",

    "Analyze my career path.",

  ];







  return (


    <section
      id="career-copilot"
      className="bg-slate-950 py-28 text-white"
    >


      <div className="mx-auto max-w-5xl px-6">


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

          transition={{
            duration:0.5
          }}

          className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-900/80
          p-8
          shadow-2xl
          backdrop-blur
          "

        >



          <h2 className="
          mb-4
          text-4xl
          font-bold
          ">

            🤖 Career Copilot AI

          </h2>




          <p className="
          mb-8
          text-slate-400
          ">

            Your personal AI career mentor powered by NdarilaAI.

          </p>






          <div className="
          mb-8
          rounded-xl
          border
          border-cyan-500/20
          bg-slate-800
          p-6
          ">



            <h3 className="
            mb-4
            text-lg
            font-semibold
            text-cyan-400
            ">

              AI Response

            </h3>




            <pre className="
            whitespace-pre-wrap
            font-sans
            text-white
            ">

              {response}

            </pre>


          </div>






          <div className="
          flex
          flex-col
          gap-4
          md:flex-row
          ">



            <input

              type="text"

              value={question}

              onChange={(e)=>
                setQuestion(e.target.value)
              }


              onKeyDown={(e)=>{

                if(
                  e.key==="Enter"
                ){

                  sendMessage();

                }

              }}


              placeholder="
              Ask your career question...
              "


              className="
              flex-1
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              "

            />





            <button

              onClick={()=>
                sendMessage()
              }

              disabled={loading}


              className="
              rounded-xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-black
              hover:bg-cyan-400
              disabled:opacity-50
              "

            >

              {loading
                ? "Thinking..."
                : "Ask AI"
              }


            </button>



          </div>







          <div className="
          mt-8
          ">


            <p className="
            mb-3
            text-sm
            text-slate-400
            ">

              Try asking:

            </p>




            <div className="
            flex
            flex-wrap
            gap-3
            ">


              {suggestions.map((item)=>(


                <button

                  key={item}

                  onClick={()=>{

                    setQuestion(item);

                    sendMessage(item);

                  }}


                  className="
                  rounded-full
                  border
                  border-cyan-500/30
                  px-4
                  py-2
                  text-sm
                  hover:bg-cyan-500
                  hover:text-black
                  "

                >

                  {item}


                </button>


              ))}


            </div>


          </div>



        </motion.div>


      </div>


    </section>


  );


}
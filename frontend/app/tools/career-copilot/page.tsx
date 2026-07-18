```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ProtectedPage from "@/app/components/ProtectedPage";
import { useAuth } from "@/app/providers/AuthProvider";
import { careerAI } from "@/lib/api";


type Message = {
  role: "user" | "assistant";
  content: string;
};


const suggestedPrompts = [
  "How do I become a Data Analyst?",
  "What skills should I learn for AI Engineering?",
  "Review my career path.",
  "Prepare me for a Data Analyst interview.",
];


export default function CareerCopilotPage() {

  const { token } = useAuth();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);





  async function askAI() {

    if (!question.trim()) return;


    const userQuestion = question;


    setMessages((prev)=>[
      ...prev,
      {
        role:"user",
        content:userQuestion,
      },
    ]);


    setQuestion("");

    setLoading(true);



    try {


      const data = await careerAI(userQuestion);



      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:data.response,
        },
      ]);



    } catch(error) {


      console.error(
        "Career AI Error:",
        error
      );


      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:
          "❌ Unable to contact the AI service.",
        },
      ]);



    } finally {

      setLoading(false);

    }

  }





  return (

    <ProtectedPage>

      <main className="
        min-h-screen
        bg-slate-950
        text-white
      ">


        <div className="
          mx-auto
          flex
          max-w-5xl
          flex-col
          p-8
        ">


          <div className="mb-8">

            <h1 className="
              text-4xl
              font-bold
            ">
              🤖 NdarilaAI Career Copilot
            </h1>


            <p className="
              mt-2
              text-slate-400
            ">
              Your AI-powered career mentor.
              Ask about careers, interviews,
              resumes and professional growth.
            </p>


          </div>





          <div className="
            mb-6
            flex
            flex-wrap
            gap-3
          ">

            {suggestedPrompts.map((prompt)=>(

              <button
                key={prompt}
                onClick={()=>setQuestion(prompt)}
                className="
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-2
                  text-sm
                  hover:bg-slate-800
                "
              >

                {prompt}

              </button>

            ))}

          </div>






          <div className="
            mb-6
            space-y-6
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            p-6
          ">


            {messages.length===0 && (

              <div className="
                py-20
                text-center
                text-slate-500
              ">

                Start a conversation with your AI Career Copilot.

              </div>

            )}



            {messages.map((message,index)=>(


              <div
                key={index}
                className={`flex ${
                  message.role==="user"
                  ?"justify-end"
                  :"justify-start"
                }`}
              >


                <div
                  className={`max-w-3xl rounded-2xl p-5 ${
                    message.role==="user"
                    ?"bg-cyan-600"
                    :"border border-slate-700 bg-slate-900"
                  }`}
                >


                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                  >
                    {message.content}
                  </ReactMarkdown>



                  {message.role==="assistant" && (

                    <button

                      onClick={()=>
                        navigator.clipboard.writeText(
                          message.content
                        )
                      }

                      className="
                        mt-4
                        text-xs
                        text-cyan-400
                      "
                    >

                      📋 Copy

                    </button>

                  )}


                </div>


              </div>


            ))}





            {loading && (

              <div className="flex justify-start">

                <div className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-5
                  py-4
                ">

                  <span className="
                    animate-pulse
                    text-cyan-400
                  ">

                    🤖 Thinking...

                  </span>


                </div>


              </div>

            )}


            <div ref={bottomRef}/>


          </div>





          <div className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-5
          ">


            <textarea

              value={question}

              onChange={(e)=>
                setQuestion(e.target.value)
              }


              onKeyDown={(e)=>{

                if(
                  e.key==="Enter"
                  &&
                  !e.shiftKey
                ){

                  e.preventDefault();

                  askAI();

                }

              }}


              placeholder="Ask anything about your career..."

              className="
                h-36
                w-full
                resize-none
                rounded-xl
                border
                border-slate-700
                bg-slate-950
                p-4
                outline-none
                focus:border-cyan-500
              "

            />



            <div className="
              mt-4
              flex
              justify-end
            ">


              <button

                onClick={askAI}

                disabled={loading}

                className="
                  rounded-xl
                  bg-cyan-500
                  px-8
                  py-3
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


          </div>



        </div>


      </main>


    </ProtectedPage>

  );

}
```

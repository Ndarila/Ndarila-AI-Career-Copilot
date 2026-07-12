"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import ProtectedRoute from "@/app/components/ProtectedRoute";


export default function DashboardPage() {

  const { user, logout } = useAuth();


  const [stats, setStats] = useState({
    career_score: "0%",
    ai_sessions: 0,
    job_matches: 0,
  });


  useEffect(() => {

    async function loadDashboard(){

      const token = localStorage.getItem("token");

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/dashboard/stats",
          {
            headers:{
              Authorization:`Bearer ${token}`,
            },
          }
        );


        if(response.ok){

          const data = await response.json();

          setStats(data.stats);

        }


      } catch(error){

        console.log(
          "Dashboard error:",
          error
        );

      }

    }


    loadDashboard();


  },[]);




  const tools=[


    {
      title:"💬 Career Copilot",
      description:
      "Get AI career guidance, learning paths and professional advice.",
      link:"/tools/career-copilot"
    },


    {
      title:"📄 Resume Analyzer",
      description:
      "Analyze your CV and improve ATS compatibility.",
      link:"/tools/resume-analyzer"
    },


    {
      title:"🎯 Job Matcher",
      description:
      "Match your skills with relevant opportunities.",
      link:"/tools/job-matcher"
    },


    {
      title:"🎤 Interview Coach",
      description:
      "Practice interviews with AI feedback.",
      link:"/tools/interview-coach"
    }


  ];




return (

<ProtectedRoute>


<main className="
min-h-screen
bg-slate-950
p-8
text-white
">


<div className="
flex
justify-between
items-center
">


<div>

<h1 className="
text-4xl
font-bold
">

Welcome back, {user?.username || "James"} 🚀

</h1>


<p className="
mt-2
text-slate-400
">

Your AI Career Copilot workspace.

</p>


<p className="
mt-2
text-sm
text-cyan-400
">

Signed in as: {user?.email}

</p>


</div>



<button

onClick={logout}

className="
rounded-xl
bg-red-500
px-5
py-2
font-bold
"

>

🚪 Logout

</button>


</div>





<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


<div className="
rounded-xl
bg-slate-900
p-6
">

<p className="text-slate-400">
Career Score
</p>


<h2 className="
mt-3
text-4xl
font-bold
text-cyan-400
">

{stats.career_score}

</h2>


</div>




<div className="
rounded-xl
bg-slate-900
p-6
">

<p className="text-slate-400">
AI Sessions
</p>


<h2 className="
mt-3
text-4xl
font-bold
text-cyan-400
">

{stats.ai_sessions}

</h2>


</div>




<div className="
rounded-xl
bg-slate-900
p-6
">

<p className="text-slate-400">
Job Matches
</p>


<h2 className="
mt-3
text-4xl
font-bold
text-cyan-400
">

{stats.job_matches}

</h2>


</div>


</div>





<h2 className="
mt-12
mb-6
text-2xl
font-bold
">

AI Career Tools

</h2>




<div className="
grid
gap-6
md:grid-cols-2
">


{
tools.map(tool=>(


<div

key={tool.title}

className="
rounded-xl
bg-slate-900
p-6
hover:bg-slate-800
transition
"


>


<h3 className="
text-xl
font-semibold
">

{tool.title}

</h3>


<p className="
mt-3
text-slate-400
">

{tool.description}

</p>



<Link

href={tool.link}

className="
mt-5
inline-block
rounded-xl
bg-cyan-500
px-5
py-2
font-bold
text-black
"

>

Open

</Link>


</div>


))

}



</div>


</main>


</ProtectedRoute>

);


}
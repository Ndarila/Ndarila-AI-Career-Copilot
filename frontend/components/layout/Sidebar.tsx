"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/providers/AuthProvider";


export default function Sidebar() {

  const router = useRouter();

  const {
    user,
    logout,
  } = useAuth();



  function handleLogout(){

    logout();

    router.push("/login");

  }




  const links = [

    {
      name:"🏠 Dashboard",
      path:"/dashboard",
    },

    {
      name:"💬 Career Copilot",
      path:"/tools/career-copilot",
    },

    {
      name:"📄 Resume Analyzer",
      path:"/tools/resume-analyzer",
    },

    {
      name:"🎯 Job Matcher",
      path:"/tools/job-matcher",
    },

    {
      name:"🎤 Interview Coach",
      path:"/tools/interview-coach",
    },

  ];




return (

<aside className="
w-72
min-h-screen
bg-slate-900
border-r
border-slate-800
p-6
text-white
flex
flex-col
">



{/* Logo */}

<div>


<h1 className="
text-2xl
font-bold
text-cyan-400
">

🤖 NdarilaAI

</h1>


<p className="
text-slate-400
mt-1
">

Career Copilot

</p>


</div>





{/* Navigation */}


<nav className="
mt-10
space-y-3
flex-1
">


{

links.map((link)=>(


<Link

key={link.path}

href={link.path}

className="
block
rounded-lg
px-4
py-3
text-slate-300
hover:bg-slate-800
hover:text-white
transition
"

>

{link.name}

</Link>


))


}


</nav>






{/* User Section */}


<div className="
border-t
border-slate-800
pt-5
">


{
user && (

<div className="mb-4">

<p className="
text-sm
text-slate-400
">

Signed in as

</p>


<p className="
truncate
text-cyan-400
">

{user.email}

</p>


</div>


)

}




<button

onClick={handleLogout}

className="
w-full
rounded-lg
bg-red-500/20
px-4
py-3
font-semibold
text-red-400
hover:bg-red-500
hover:text-white
transition
"

>

🚪 Logout

</button>



</div>




</aside>


);


}
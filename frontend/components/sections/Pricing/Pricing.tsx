"use client";


import { motion } from "framer-motion";

import PricingCard from "./PricingCard";

import { pricingPlans } from "./PricingData";


export default function Pricing() {


return (

<section
id="pricing"
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

className="text-center"

>


<span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">

Pricing

</span>



<h2 className="mt-6 text-5xl font-bold text-white">

Choose Your Career Intelligence Plan

</h2>



<p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">

Unlock AI-powered career analysis,
job matching, interview preparation,
and personalized career guidance.

</p>



</motion.div>




<div className="mt-16 grid gap-8 lg:grid-cols-3">


{pricingPlans.map((plan)=>(

<PricingCard
key={plan.name}
plan={plan}
/>

))}


</div>


</div>


</section>

);


}
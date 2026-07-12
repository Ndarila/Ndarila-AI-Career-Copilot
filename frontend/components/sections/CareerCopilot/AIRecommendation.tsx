interface Props {
  title:string;
  items:string[];
}


export default function AIRecommendation({
  title,
  items,
}:Props){


return (

<div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">


<h3 className="mb-5 text-lg font-semibold text-white">
{title}
</h3>


<ul className="space-y-3 text-slate-300">


{items.map((item)=>(
<li key={item}>
✓ {item}
</li>
))}


</ul>


</div>

);


}
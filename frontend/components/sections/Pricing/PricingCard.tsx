interface Props {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
  };
}


export default function PricingCard({
  plan,
}: Props) {

  return (

    <div
      className={`relative rounded-3xl border p-8 ${
        plan.popular
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-cyan-500/20 bg-slate-900"
      }`}
    >

      {plan.popular && (

        <span className="absolute right-6 top-6 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">

          Most Popular

        </span>

      )}



      <h3 className="text-2xl font-bold text-white">
        {plan.name}
      </h3>



      <p className="mt-3 text-slate-400">
        {plan.description}
      </p>



      <div className="mt-8">

        <span className="text-5xl font-bold text-white">
          {plan.price}
        </span>

        <span className="text-slate-400">
          /month
        </span>

      </div>



      <ul className="mt-8 space-y-4">

        {plan.features.map((feature)=>(
          <li
            key={feature}
            className="text-slate-300"
          >
            ✓ {feature}
          </li>
        ))}

      </ul>



      <button
        className="mt-10 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >

        Get Started

      </button>


    </div>

  );

}
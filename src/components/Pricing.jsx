import { Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "Perfect for students & personal tasks",
    features: [
      "Up to 3 active projects",
      "Basic daily reminders",
      "Mobile & web sync",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    subtitle: "Ideal for freelancers & power users",
    features: [
      "Unlimited projects & tasks",
      "Smart recurring reminders",
      "Priority tags & time tracking",
      "Weekly productivity analytics",
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    subtitle: "Built for agile teams & startups",
    features: [
      "Everything in Pro",
      "Shared team workspaces",
      "Role permissions & admin controls",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Start for free and upgrade as your productivity grows.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <RevealOnScroll key={plan.name} delay={index * 120}>
              <div
                className={`rounded-2xl p-8 bg-white transition-all ${
                  plan.popular
                    ? "border-2 border-indigo-600 shadow-xl shadow-indigo-600/10 md:-translate-y-2 relative"
                    : "border border-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide mb-4">
                    MOST POPULAR
                  </span>
                )}

                <h3
                  className={`text-xl font-bold ${
                    plan.popular ? "text-indigo-600" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm">/ month</span>
                </div>

                <p className="mt-2 text-sm text-slate-500">{plan.subtitle}</p>

                <hr className="my-6 border-slate-100" />

                <ul className="space-y-3.5">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[2.5]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-300"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
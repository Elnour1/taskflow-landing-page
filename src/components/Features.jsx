import { Zap, Bell, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    icon: Zap,
    title: "Smart Quick-Add",
    description:
      "Capture tasks in seconds with zero friction. Organize by tags, due dates, and priority levels effortlessly.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description:
      "Never miss an important deadline again. Get timely notifications before your critical tasks are due.",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share workspaces, assign tasks clearly, and track real-time progress across your entire team.",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Everything you need to stay on track
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Designed to eliminate distractions and keep your daily priorities
              crystal clear.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <RevealOnScroll key={feature.title} delay={index * 120}>
                <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-13 h-13 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
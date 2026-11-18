import { Star } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CS Student",
    initials: "AH",
    avatarBg: "bg-indigo-100 text-indigo-600",
    quote:
      "TaskFlow saved my semester! Keeping track of assignments and exams is finally simple and completely stress-free.",
  },
  {
    name: "Sara Mahmoud",
    role: "UI/UX Freelancer",
    initials: "SM",
    avatarBg: "bg-emerald-100 text-emerald-700",
    quote:
      "Juggling 5 freelance clients used to be overwhelming. Now I separate projects cleanly and never miss a deadline.",
  },
  {
    name: "Karim Adel",
    role: "Tech Lead",
    initials: "KA",
    avatarBg: "bg-amber-100 text-amber-700",
    quote:
      "Our engineering team switched to TaskFlow last month. Everyone knows what they own, and standups are twice as fast.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Loved by productive people
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how TaskFlow helps users achieve more every day.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 120}>
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed">"{item.quote}"</p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full ${item.avatarBg} font-bold text-sm flex items-center justify-center`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
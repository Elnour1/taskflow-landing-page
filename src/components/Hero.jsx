import { useState } from "react";
import { ArrowRight, Check, Plus, Sparkles } from "lucide-react";

export default function Hero() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design wireframes for TaskFlow landing page", tag: "Done", done: true },
    { id: 2, title: "Build React components with Tailwind CSS", tag: "Work", done: false },
    { id: 3, title: "Review client feedback & deploy to Vercel", tag: "Urgent", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask.trim(), tag: "New", done: false },
    ]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copy & CTA */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Task Management</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Organize your work,{" "}
            <span className="text-indigo-600">amplify your focus.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            TaskFlow helps students, freelancers, and teams turn daily chaos into
            clear, actionable progress without the clutter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition shadow-md shadow-indigo-600/20"
            >
              <span>Start for Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold border border-slate-300 transition"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Right Column: Interactive App Mockup */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6">
          {/* Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            </div>
            <span className="text-xs font-medium text-slate-400">
              Interactive Preview • Today
            </span>
          </div>

          {/* Quick Add Form */}
          <form onSubmit={handleAddTask} className="mt-5 flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="+ Add a new task quickly..."
              className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl inline-flex items-center gap-1 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </form>

          {/* Task List */}
          <div className="mt-5 space-y-3 max-h-64 overflow-y-auto pr-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition ${
                  task.done
                    ? "bg-slate-50 border-slate-200"
                    : "bg-white border-indigo-200 hover:border-indigo-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                      task.done
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {task.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      task.done ? "line-through text-slate-400" : "text-slate-800"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                    task.done
                      ? "bg-emerald-100 text-emerald-700"
                      : task.tag === "Urgent"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {task.done ? "Done" : task.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
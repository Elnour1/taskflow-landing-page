import { useState } from "react";
import { Check, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
            <Check className="w-5 h-5 text-white stroke-[3]" />
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            TaskFlow
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-indigo-600 transition">
            Pricing
          </a>
        </nav>

        {/* Auth Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition">
            Login
          </button>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition shadow-sm"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
            <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)}>Testimonials</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button className="w-full py-2.5 text-sm font-semibold text-slate-900 border border-slate-200 rounded-xl">
              Login
            </button>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-xl"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
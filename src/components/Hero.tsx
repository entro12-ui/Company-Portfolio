"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const stats = [
  { value: "6+", label: "Flagship Products" },
  { value: "10+", label: "Industries Served" },
  { value: "100%", label: "Locally Engineered" },
  { value: "24/7", label: "Support & Care" },
];

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark
    ? "bg-gradient-to-br from-[#05070f] via-[#0a1120] to-[#04121a]"
    : "bg-gradient-to-br from-slate-50 via-white to-cyan-50/60";

  const titleColor = isDark ? "text-white" : "text-slate-900";
  const subtitleColor = isDark ? "text-slate-300" : "text-slate-700";
  const descriptionColor = isDark ? "text-slate-400" : "text-slate-600";
  const taglineColor = isDark ? "text-slate-200" : "text-slate-800";

  const badgeClasses = isDark
    ? "border-teal-400/30 bg-teal-400/10 text-teal-200"
    : "border-teal-600/20 bg-teal-50 text-teal-700";

  const primaryButton =
    "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105";

  const secondaryButton = isDark
    ? "border-white/15 bg-white/5 text-white hover:bg-white/10 backdrop-blur"
    : "border-slate-200 bg-white/80 text-slate-800 hover:bg-white backdrop-blur";

  const statValueColor = isDark ? "text-white" : "text-slate-900";
  const statLabelColor = isDark ? "text-slate-400" : "text-slate-500";
  const dividerColor = isDark ? "border-white/10" : "border-slate-200";

  return (
    <section
      className={`relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 ${sectionBg} min-h-[640px] transition-colors duration-300`}
    >
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
              : "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`animate-fade-in-up mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur sm:text-sm ${badgeClasses}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Trusted, Scalable, Locally Engineered Solutions
          </div>

          <h1
            className={`animate-fade-in-up animation-delay-200 mb-6 font-poppins text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl ${titleColor}`}
          >
            Custom Software Development
            <span className="mt-2 block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              Company in Ethiopia
            </span>
          </h1>

          <p
            className={`animate-fade-in-up animation-delay-400 mx-auto mb-4 max-w-3xl text-lg leading-relaxed sm:text-xl ${subtitleColor}`}
          >
            As a leading software company in Ethiopia, Entro Ethiopia provides
            comprehensive digital solutions including{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              <Link href="/custom-software-development" className="hover:underline">
                custom software development
              </Link>
              ,{" "}
              <Link href="/web-development" className="hover:underline">
                web platforms
              </Link>
              ,{" "}
              <Link href="/ai-solutions" className="hover:underline">
                AI solutions
              </Link>
              ,{" "}
              <Link href="/erp-systems" className="hover:underline">
                ERP systems
              </Link>
              , education technology platforms, healthcare management, and car
              service management
            </span>
            .
          </p>

          <p
            className={`animate-fade-in-up animation-delay-600 mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg ${descriptionColor}`}
          >
            Entro Ethiopia delivers innovative, locally-developed software
            solutions that transform businesses through automation, AI-powered
            systems, and intelligent management platforms.
          </p>

          <div
            className={`animate-fade-in-up animation-delay-800 mb-9 flex items-center justify-center gap-2 font-medium ${taglineColor}`}
          >
            <span className="text-xl text-teal-500">→</span>
            <span className="text-base sm:text-lg">
              Innovation. Excellence. Local Expertise.
            </span>
          </div>

          <div className="animate-fade-in-up animation-delay-1000 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-5 sm:text-lg ${primaryButton}`}
            >
              Get a Demo
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 sm:px-10 sm:py-5 sm:text-lg ${secondaryButton}`}
            >
              Contact Us
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>

          {/* Trust stats */}
          <div
            className={`animate-fade-in-up animation-delay-1000 mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border ${dividerColor} sm:grid-cols-4`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`px-4 py-5 ${isDark ? "bg-white/[0.03]" : "bg-white/60"} backdrop-blur`}
              >
                <div
                  className={`text-2xl font-bold sm:text-3xl ${statValueColor}`}
                >
                  {stat.value}
                </div>
                <div
                  className={`mt-1 text-xs font-medium uppercase tracking-wider sm:text-sm ${statLabelColor}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

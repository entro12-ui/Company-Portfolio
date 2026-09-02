"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Clock,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "6+", label: "Flagship products" },
  { value: "10+", label: "Industries served" },
  { value: "100%", label: "Locally engineered" },
  { value: "24/7", label: "Support & care" },
];

const trustedBy = [
  { name: "duey.ai", logo: "/duey.ai.png" },
  { name: "Danat Dental Clinic", logo: "/healthcare-client-logo.png" },
  { name: "Operation Kilimanjaro", logo: "/operation-kilimanjaro-logo.png" },
  { name: "Parka", logo: "/Parka.png" },
  { name: "Vallintine", logo: "/vallintine.png" },
];

const assurances = [
  { icon: ShieldCheck, label: "Security-first builds" },
  { icon: Clock, label: "Delivery on schedule" },
  { icon: BadgeCheck, label: "Post-launch support" },
];

function DashboardMock() {
  return (
    <div className="relative">
      {/* Glow behind the panel */}
      <div
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-teal-500/25 via-cyan-500/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-2.5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900/90">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-slate-400">
              entro · delivery console
            </span>
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Uptime", value: "99.9%", accent: "text-emerald-300" },
                { label: "Releases", value: "128", accent: "text-teal-300" },
                { label: "Avg. response", value: "< 2h", accent: "text-cyan-300" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-white/8 bg-white/[0.04] p-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    {kpi.label}
                  </p>
                  <p className={`mt-1 text-lg font-bold ${kpi.accent}`}>
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-300">
                  Project velocity
                </p>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  +38%
                </span>
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[38, 52, 44, 63, 58, 74, 69, 88, 82, 96].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-teal-500/25 to-teal-400"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Module list */}
            <div className="space-y-2">
              {[
                { name: "Patient records module", progress: 100, state: "Live" },
                { name: "AI reporting assistant", progress: 76, state: "In build" },
                { name: "Payments integration", progress: 42, state: "In build" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-white/8 bg-white/[0.03] px-3.5 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-xs font-medium text-slate-200">
                      {item.name}
                    </p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        item.state === "Live"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-teal-400/10 text-teal-300"
                      }`}
                    >
                      {item.state}
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="animate-float absolute -left-4 top-1/3 hidden rounded-xl border border-white/12 bg-ink-800/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-400/15">
            <BrainCircuit className="h-4 w-4 text-teal-300" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">AI-assisted</p>
            <p className="text-[10px] text-slate-400">Built into the workflow</p>
          </div>
        </div>
      </div>

      <div className="animate-float animation-delay-2000 absolute -right-3 bottom-10 hidden rounded-xl border border-white/12 bg-ink-800/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15">
            <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">Data secured</p>
            <p className="text-[10px] text-slate-400">Role-based & audited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines-invert absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[130px]" />
        <div className="animate-aurora animation-delay-2000 absolute -bottom-52 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-600/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-teal-200 backdrop-blur sm:text-[13px]">
              <Sparkles className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
              Software · Web · AI · ERP — engineered in Addis Ababa
            </div>

            <h1 className="animate-fade-in-up animation-delay-200 mt-7 text-balance text-4xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-[3.5rem]">
              Custom software development
              <span className="mt-2 block bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                that moves your organization forward
              </span>
            </h1>

            <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Entro Ethiopia is a software company in Addis Ababa building web
              platforms, AI solutions and ERP systems for schools, clinics,
              government bodies and growing businesses — designed around how your
              team actually works, and supported long after launch.
            </p>

            <div className="animate-fade-in-up animation-delay-600 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_44px_-18px_rgba(20,184,166,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_56px_-20px_rgba(20,184,166,1)]"
              >
                Book a free consultation
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-white/[0.12]"
              >
                <Play className="h-4 w-4 text-teal-300" aria-hidden="true" />
                See our work
              </Link>
            </div>

            <ul className="animate-fade-in-up animation-delay-800 mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {assurances.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Icon className="h-4 w-4 text-teal-400" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="animate-fade-in-up animation-delay-600 relative lg:pl-4">
            <DashboardMock />
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-1000 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:mt-20 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-950/60 px-5 py-6 backdrop-blur">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[13px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 sm:mt-14">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Trusted by teams across Ethiopia and abroad
          </p>
          <div className="mask-fade-x marquee-paused mt-7 overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 sm:gap-16">
              {[...trustedBy, ...trustedBy, ...trustedBy].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/95 px-4 opacity-80 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
                >
                  <span className="relative h-10 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain object-center"
                      sizes="160px"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

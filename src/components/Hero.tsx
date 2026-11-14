"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Clock,
  Cpu,
  MapPin,
  Play,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  { value: "7", label: "Purpose-built products" },
  { value: "5", label: "Core service lines" },
  { value: "Addis Ababa", label: "Local engineering team" },
  { value: "End to end", label: "Build, install & support" },
];

// width/height are each logo's native pixel size, so logos are never upscaled (which blurs them).
const trustedBy = [
  { name: "duey.ai", logo: "/duey.ai.png", width: 199, height: 53 },
  { name: "Danat Dental Clinic", logo: "/healthcare-client-logo.png", width: 945, height: 362 },
  { name: "Operation Kilimanjaro", logo: "/operation-kilimanjaro-logo.png", width: 270, height: 90 },
  { name: "Parka", logo: "/Parka.png", width: 90, height: 88 },
  { name: "Vallintine", logo: "/vallintine.png", width: 119, height: 91 },
  { name: "New Generation Human Resource & Logistics", logo: "/new-generation-hr-logistics.png", width: 86, height: 90 },
  { name: "Sharja Trading", logo: "/sharja-trading-logo.png", width: 198, height: 68 },
];

const TRUSTED_PER_PAGE = 1;

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
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-teal-500/25 via-teal-300/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-2.5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900/90">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
            <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-slate-400">
              concept preview · connected operations
            </span>
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Business systems", value: "ERP · AI", accent: "text-teal-300" },
                { label: "Connected hardware", value: "CCTV+", accent: "text-teal-200" },
                { label: "Delivery", value: "Build · Install", accent: "text-teal-100" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-white/8 bg-white/[0.04] p-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    {kpi.label}
                  </p>
                  <p className={`mt-1 text-base font-bold sm:text-lg ${kpi.accent}`}>
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-300">
                  One view across your operations
                </p>
                <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] font-semibold text-teal-200">
                  Unified
                </span>
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[38, 52, 44, 63, 58, 74, 69, 88, 82, 96].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-teal-700/25 to-teal-400"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Service list */}
            <div className="space-y-2">
              {[
                { name: "Business software · ERP", progress: 82, state: "Systems" },
                { name: "CCTV · Access · GPS", progress: 68, state: "Hardware" },
                { name: "Web · AI · Integrations", progress: 54, state: "Digital" },
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
                        item.state === "Systems"
                          ? "bg-teal-400/10 text-teal-200"
                          : "bg-teal-400/10 text-teal-300"
                      }`}
                    >
                      {item.state}
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
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
            <Cpu className="h-4 w-4 text-teal-300" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">Software + hardware</p>
            <p className="text-[10px] text-slate-400">One accountable team</p>
          </div>
        </div>
      </div>

      <div className="animate-float animation-delay-2000 absolute -right-3 bottom-10 hidden rounded-xl border border-white/12 bg-ink-800/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-400/15">
            <Camera className="h-4 w-4 text-teal-200" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">Security systems</p>
            <p className="text-[10px] text-slate-400">CCTV · Access · GPS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const trustedPages = Math.ceil(trustedBy.length / TRUSTED_PER_PAGE);
  const [trustedPage, setTrustedPage] = useState(0);

  useEffect(() => {
    if (trustedPages <= 1) return;
    const id = window.setInterval(() => {
      setTrustedPage((prev) => (prev + 1) % trustedPages);
    }, 4000);
    return () => window.clearInterval(id);
  }, [trustedPages]);

  const visibleTrusted = trustedBy.slice(
    trustedPage * TRUSTED_PER_PAGE,
    trustedPage * TRUSTED_PER_PAGE + TRUSTED_PER_PAGE,
  );

  return (
    <section className="hero-mesh relative isolate overflow-hidden dark:bg-ink-950 dark:bg-none">
      {/* Ambient background: clean brand mesh in light mode; grid + aurora in dark mode */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines-invert absolute inset-0 hidden dark:block" />
        <div className="animate-aurora absolute -top-40 left-1/4 hidden h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-[130px] dark:block" />
        <div className="animate-aurora animation-delay-2000 absolute -bottom-52 right-0 hidden h-[32rem] w-[32rem] rounded-full bg-teal-600/20 blur-[130px] dark:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur sm:text-[13px] dark:border-white/15 dark:bg-white/[0.06] dark:text-teal-200">
              <MapPin className="h-3.5 w-3.5 text-teal-600 dark:text-teal-300" aria-hidden="true" />
              Entro Ethiopia · Software & systems engineering
            </div>

            <h1 className="animate-fade-in-up animation-delay-200 mt-7 text-balance text-4xl font-bold leading-[1.07] text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
              Technology that fits the way
              <span className="mt-2 block bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-teal-200 dark:to-teal-100">
                your organization works.
              </span>
            </h1>

            <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
              We design and deliver custom software, business platforms and
              connected hardware for organizations across Ethiopia. One local
              team takes you from discovery through deployment and support.
            </p>

            <div className="animate-fade-in-up animation-delay-600 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_44px_-18px_rgba(20,184,166,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_56px_-20px_rgba(20,184,166,0.9)]"
              >
                Discuss your project
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-teal-400/40 dark:hover:bg-white/[0.12]"
              >
                <Play className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                Explore our work
              </Link>
            </div>

            <ul className="animate-fade-in-up animation-delay-800 mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {assurances.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                >
                  <Icon className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
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

        {/* Capability snapshot */}
        <div className="animate-fade-in-up animation-delay-1000 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:mt-20 sm:grid-cols-4 dark:border-white/10 dark:bg-white/[0.06]">
          {capabilities.map((stat) => (
            <div key={stat.label} className="bg-white/90 px-5 py-6 backdrop-blur dark:bg-ink-950/60">
              <div className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[13px] dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar — dotted carousel on small; marquee from md up */}
        <div className="mt-12 sm:mt-14">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected teams we have worked with
          </p>

          <div className="mt-7 md:hidden">
            <div key={trustedPage} className="animate-fade-in-up">
              {visibleTrusted.map((client) => (
                <div
                  key={client.name}
                  className="mx-auto flex h-28 max-w-xs items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm dark:border-white/10"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    priority
                    unoptimized
                    className="h-auto max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {Array.from({ length: trustedPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTrustedPage(index)}
                  aria-label={`Trusted clients page ${index + 1}`}
                  aria-current={index === trustedPage ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === trustedPage
                      ? "w-7 bg-teal-500 dark:bg-teal-400"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/25 dark:hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mask-fade-x marquee-paused mt-7 hidden overflow-hidden md:block">
            <div className="animate-marquee flex w-max items-center gap-6 [will-change:transform] lg:gap-8">
              {[...trustedBy, ...trustedBy, ...trustedBy].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/10"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    unoptimized
                    className="h-auto max-h-16 w-auto max-w-full object-contain"
                  />
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

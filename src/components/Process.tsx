import {
  CalendarCheck,
  FileText,
  Headset,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/Button";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  timeline: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

const steps: Step[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    timeline: "Week 1",
    description:
      "We sit with the people doing the work, map the current process end to end, and identify exactly where time and money are leaking.",
    iconBg: "bg-sky-500/15 border-sky-400/30",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: FileText,
    step: "02",
    title: "Scope & design",
    timeline: "Weeks 2–3",
    description:
      "You get wireframes, a technical architecture and a written scope with fixed pricing — before a single line of production code is written.",
    iconBg: "bg-violet-500/15 border-violet-400/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & review",
    timeline: "Ongoing sprints",
    description:
      "We ship in two-week cycles. Every cycle ends with working software you can click through, so there are no surprises at the end.",
    iconBg: "bg-amber-500/15 border-amber-400/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Headset,
    step: "04",
    title: "Launch & support",
    timeline: "Day one onward",
    description:
      "Data migration, staff training, handover documentation and a support agreement — because go-live is the start of the relationship, not the end.",
    iconBg: "bg-emerald-500/15 border-emerald-400/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

const commitments = [
  "Fixed scope and fixed price before we start",
  "A demo you can use at the end of every sprint",
  "You own the source code and the data",
  "Staff training and written documentation included",
  "Named support contact, not a ticket queue",
];

export default function Process() {
  return (
    <Section id="process" className="bg-white dark:bg-ink-950">
      <SectionHeading
        eyebrow="How we work"
        title="A process built to remove the risk from custom software"
        description="Most failed software projects fail for the same reasons: unclear scope, invisible progress and no plan for after launch. Here is how we handle each one."
      />

      <div className="mt-14 flex flex-row gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-5 lg:overflow-visible">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal
              key={step.step}
              delay={index * 90}
              className="flex w-[min(82vw,18rem)] shrink-0 flex-col sm:w-[17rem] lg:w-auto lg:min-w-0 lg:flex-1"
            >
              <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-300 hover:border-teal-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-400/40">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${step.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 ${step.iconColor}`}
                    aria-hidden="true"
                  />
                </span>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[11px] font-bold tracking-[0.2em] ${step.iconColor}`}
                  >
                    {step.step}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-white/[0.06] dark:text-slate-400">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={160} className="mt-10">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-7 shadow-[var(--shadow-soft)] sm:p-8 dark:border-white/10 dark:from-white/[0.06] dark:to-white/[0.02]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
                <CalendarCheck
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                What you get, in writing
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Every engagement includes these commitments as part of the
                contract.
              </p>
              <CtaButton
                href="/contact"
                size="md"
                withArrow
                className="mt-6"
              >
                Get a project estimate
              </CtaButton>
            </div>

            <ul className="grid flex-1 gap-3 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-teal-600 dark:text-teal-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

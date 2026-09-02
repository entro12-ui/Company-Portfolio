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
};

const steps: Step[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    timeline: "Week 1",
    description:
      "We sit with the people doing the work, map the current process end to end, and identify exactly where time and money are leaking.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Scope & design",
    timeline: "Weeks 2–3",
    description:
      "You get wireframes, a technical architecture and a written scope with fixed pricing — before a single line of production code is written.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & review",
    timeline: "Ongoing sprints",
    description:
      "We ship in two-week cycles. Every cycle ends with working software you can click through, so there are no surprises at the end.",
  },
  {
    icon: Headset,
    step: "04",
    title: "Launch & support",
    timeline: "Day one onward",
    description:
      "Data migration, staff training, handover documentation and a support agreement — because go-live is the start of the relationship, not the end.",
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
    <Section
      id="process"
      className="bg-white dark:bg-ink-950"
    >
      <SectionHeading
        eyebrow="How we work"
        title="A process built to remove the risk from custom software"
        description="Most failed software projects fail for the same reasons: unclear scope, invisible progress and no plan for after launch. Here is how we handle each one."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        {/* Steps */}
        <ol className="relative space-y-4">
          <span
            className="absolute left-[27px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-teal-400 via-teal-400/40 to-transparent sm:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={index * 90} as="li">
                <div className="group relative flex gap-5 rounded-3xl border border-transparent p-4 transition-colors duration-300 hover:border-slate-200 hover:bg-slate-50/70 sm:p-5 dark:hover:border-white/10 dark:hover:bg-white/[0.03]">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-500/20 bg-white shadow-[0_10px_26px_-14px_rgba(13,148,136,0.8)] dark:border-teal-400/20 dark:bg-ink-900">
                    <Icon
                      className="h-6 w-6 text-teal-600 dark:text-teal-400"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="pt-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-teal-600 dark:text-teal-400">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-white/[0.06] dark:text-slate-400">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* Commitments */}
        <Reveal delay={160}>
          <div className="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-[var(--shadow-soft)] dark:border-white/10 dark:from-white/[0.06] dark:to-white/[0.02]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
              <CalendarCheck className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              What you get, in writing
            </h3>
            <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Every engagement includes these commitments as part of the
              contract.
            </p>
            <ul className="mt-6 space-y-3.5">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
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
            <CtaButton
              href="/contact"
              size="md"
              withArrow
              className="mt-8 w-full"
            >
              Get a project estimate
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

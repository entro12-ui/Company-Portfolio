import {
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
  description: string;
  iconBg: string;
  iconColor: string;
};

const steps: Step[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We map your current process and find where time is lost.",
    iconBg: "bg-sky-500/15 border-sky-400/30",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: FileText,
    step: "02",
    title: "Scope & price",
    description: "You get a clear written scope and fixed price before build.",
    iconBg: "bg-violet-500/15 border-violet-400/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build",
    description: "We ship in short cycles so you can review working software.",
    iconBg: "bg-amber-500/15 border-amber-400/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Headset,
    step: "04",
    title: "Launch & support",
    description: "Training, handover, and ongoing support after go-live.",
    iconBg: "bg-emerald-500/15 border-emerald-400/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-white dark:bg-ink-950">
      <SectionHeading
        eyebrow="Process"
        title="Four clear steps"
        description="No vague timelines. You always know what happens next."
        action={
          <CtaButton href="/contact" size="md" withArrow>
            Get an estimate
          </CtaButton>
        }
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.step} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${step.iconBg}`}
                  >
                    <Icon
                      className={`h-4 w-4 ${step.iconColor}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className={`text-[11px] font-bold tracking-[0.18em] ${step.iconColor}`}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

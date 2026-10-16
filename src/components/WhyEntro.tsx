import {
  BadgeCheck,
  Handshake,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/content/company";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: MapPin,
    title: "Local in Addis Ababa",
    description:
      "Meet us in person, train your staff on site, and get support that understands Ethiopian operations.",
  },
  {
    icon: Handshake,
    title: "Clear price before we start",
    description:
      "Fixed scope and fixed price in writing. Changes only happen when you approve them.",
  },
  {
    icon: ShieldCheck,
    title: "You own the system",
    description:
      "Secure builds with role-based access — and the code and data belong to you.",
  },
];

export default function WhyEntro() {
  return (
    <Section
      id="why-entro"
      className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-ink-900"
    >
      <SectionHeading
        eyebrow="Why Entro"
        title="Easy to trust, easy to work with"
        description="Three commitments that matter after launch — not just at signing."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={index * 70} className="group">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-white shadow-[var(--shadow-soft)] dark:border-teal-400/20 dark:bg-white/[0.05]">
                  <Icon
                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-12">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left dark:border-white/10 dark:bg-white/[0.03]">
          <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white">
            <BadgeCheck
              className="h-5 w-5 text-teal-600 dark:text-teal-400"
              aria-hidden="true"
            />
            Registered software development PLC
          </span>
          <span className="hidden h-5 w-px bg-slate-200 sm:block dark:bg-white/10" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            TIN {company.tin}
          </span>
          <span className="hidden h-5 w-px bg-slate-200 sm:block dark:bg-white/10" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {company.city}
          </span>
        </div>
      </Reveal>
    </Section>
  );
}

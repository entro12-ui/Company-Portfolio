import {
  BadgeCheck,
  Handshake,
  Headset,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
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
    title: "A local team you can actually meet",
    description:
      "We are based in Addis Ababa. We run workshops in your office, train your staff in person, and understand the operating realities you work in.",
  },
  {
    icon: Users,
    title: "Senior engineers on your project",
    description:
      "The people who scope your system are the people who build it. No handoff to a junior team once the contract is signed.",
  },
  {
    icon: ShieldCheck,
    title: "Security and ownership by default",
    description:
      "Role-based access, audit trails and encrypted data on every build — and the source code and data belong to you, not to us.",
  },
  {
    icon: Handshake,
    title: "Pricing you can plan around",
    description:
      "Fixed scope, fixed price, written down before work starts. If the scope changes, you approve the change and the cost before we proceed.",
  },
  {
    icon: TrendingUp,
    title: "Built to grow with you",
    description:
      "Multi-branch, multi-user and cloud or on-premise from day one, so the system you buy this year still fits three years from now.",
  },
  {
    icon: Headset,
    title: "Support that answers",
    description:
      "A named contact, 24/7 availability for critical issues, and a maintenance plan that keeps the system healthy after go-live.",
  },
];

export default function WhyEntro() {
  return (
    <Section
      id="why-entro"
      className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-ink-900"
    >
      <SectionHeading
        eyebrow="Why teams choose us"
        title="Software is easy to buy and hard to trust. We build for the trust part."
        description="Anyone can promise a system. These are the specific commitments that decide whether it still works — and still gets supported — two years from now."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal
              key={reason.title}
              delay={index * 70}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-500/20 bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:-translate-y-1 dark:border-teal-400/20 dark:bg-white/[0.05]">
                  <Icon
                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-bold leading-snug text-slate-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 dark:text-slate-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={140} className="mt-14">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left dark:border-white/10 dark:bg-white/[0.03]">
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
            {company.address}, {company.city}
          </span>
        </div>
      </Reveal>
    </Section>
  );
}

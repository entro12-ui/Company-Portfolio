import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Car,
  Dumbbell,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Package,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconBg: string;
  iconColor: string;
};

const industries: Industry[] = [
  {
    icon: GraduationCap,
    title: "Schools & universities",
    description:
      "Admissions, academics, finance and parent communication in one platform.",
    href: "/products/edustack-schoolhub",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & clinics",
    description:
      "Patient records, appointments, lab, pharmacy and billing with AI support.",
    href: "/solutions-for-clinics",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Package,
    title: "Retail & distribution",
    description:
      "Stock control across branches and warehouses with real profitability reporting.",
    href: "/products/control-inventory",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Car,
    title: "Auto service & garages",
    description:
      "Vehicles, service history, parts and automated mileage-based reminders.",
    href: "/products/car-service",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: Building2,
    title: "Property & housing",
    description:
      "Units, tenants, rent collection, maintenance and portfolio dashboards.",
    href: "/products/property-management",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    description:
      "Program tracking, beneficiary data, document workflows and donor reporting.",
    href: "/solutions-for-government",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: BriefcaseBusiness,
    title: "SMEs & professional services",
    description:
      "Replace spreadsheets and manual reporting with systems your team will use.",
    href: "/solutions-for-smes",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Hotel,
    title: "Hotels & apartments",
    description:
      "Bookings, tenant records, billing and day-to-day service workflows.",
    href: "/contact",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Factory,
    title: "Manufacturing & warehousing",
    description:
      "Production planning, inventory visibility and operational reporting.",
    href: "/contact",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Dumbbell,
    title: "Fitness & wellness",
    description:
      "Memberships, class schedules, trainer programmes and progress tracking.",
    href: "/products/fitmind-ai",
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
];

export default function Industries() {
  return (
    <Section id="industries" className="bg-white dark:bg-ink-950">
      <SectionHeading
        eyebrow="Industries"
        title="Deep enough in your sector to skip the explaining"
        description="We have already built for these operating models, which means discovery starts from informed questions instead of a blank page."
      />

      <div className="mt-14 flex flex-row gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-4 lg:overflow-visible">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Reveal
              key={industry.title}
              delay={index * 50}
              className="flex h-full w-[min(72vw,15.5rem)] shrink-0 flex-col sm:w-[14.5rem] lg:w-auto lg:min-w-0 lg:flex-1"
            >
              <Link
                href={industry.href}
                className="ring-gradient group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[var(--shadow-lifted)] sm:p-6 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-400/40"
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${industry.iconBg} transition-transform duration-300 group-hover:-translate-y-0.5`}
                  >
                    <Icon
                      className={`h-5 w-5 ${industry.iconColor}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[15px] font-bold leading-snug text-slate-900 dark:text-white">
                        {industry.title}
                      </h3>
                      <ArrowUpRight
                        className={`mt-0.5 h-4 w-4 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 ${industry.iconColor}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-10 text-center">
        <p className="text-[15px] text-slate-600 dark:text-slate-400">
          Working in a sector that is not listed?{" "}
          <Link
            href="/contact"
            className="font-semibold text-teal-700 underline-offset-4 hover:underline dark:text-teal-400"
          >
            Tell us about your process
          </Link>{" "}
          — most of our platforms started exactly that way.
        </p>
      </Reveal>
    </Section>
  );
}

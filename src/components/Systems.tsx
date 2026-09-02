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
};

const industries: Industry[] = [
  {
    icon: GraduationCap,
    title: "Schools & universities",
    description:
      "Admissions, academics, finance and parent communication in one platform.",
    href: "/products/edustack-schoolhub",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & clinics",
    description:
      "Patient records, appointments, lab, pharmacy and billing with AI support.",
    href: "/solutions-for-clinics",
  },
  {
    icon: Package,
    title: "Retail & distribution",
    description:
      "Stock control across branches and warehouses with real profitability reporting.",
    href: "/products/control-inventory",
  },
  {
    icon: Car,
    title: "Auto service & garages",
    description:
      "Vehicles, service history, parts and automated mileage-based reminders.",
    href: "/products/car-service",
  },
  {
    icon: Building2,
    title: "Property & housing",
    description:
      "Units, tenants, rent collection, maintenance and portfolio dashboards.",
    href: "/products/property-management",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    description:
      "Program tracking, beneficiary data, document workflows and donor reporting.",
    href: "/solutions-for-government",
  },
  {
    icon: BriefcaseBusiness,
    title: "SMEs & professional services",
    description:
      "Replace spreadsheets and manual reporting with systems your team will use.",
    href: "/solutions-for-smes",
  },
  {
    icon: Hotel,
    title: "Hotels & apartments",
    description:
      "Bookings, tenant records, billing and day-to-day service workflows.",
    href: "/contact",
  },
  {
    icon: Factory,
    title: "Manufacturing & warehousing",
    description:
      "Production planning, inventory visibility and operational reporting.",
    href: "/contact",
  },
  {
    icon: Dumbbell,
    title: "Fitness & wellness",
    description:
      "Memberships, class schedules, trainer programmes and progress tracking.",
    href: "/products/fitmind-ai",
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

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.title} delay={index * 50} className="h-full">
              <Link
                href={industry.href}
                className="ring-gradient group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[var(--shadow-lifted)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-400/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 transition-colors duration-300 group-hover:bg-teal-500/20">
                  <Icon
                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-[15px] font-bold leading-snug text-slate-900 dark:text-white">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {industry.description}
                </p>
                <ArrowUpRight
                  className="mt-auto h-4 w-4 translate-y-1 pt-0 text-teal-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-teal-400"
                  aria-hidden="true"
                />
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

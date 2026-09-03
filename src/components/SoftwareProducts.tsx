import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Car,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Package,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Product = {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  iconBg: string;
  iconColor: string;
  bulletColor: string;
};

const products: Product[] = [
  {
    id: "edustack-schoolhub",
    icon: GraduationCap,
    title: "EduStack SchoolHub",
    category: "Education",
    description:
      "School management for KG–12 schools and academies: administration, academics, finance, communication and AI-supported learning in one system.",
    highlights: [
      "Student, registrar, finance and HR in one place",
      "Multi-branch schools with shared reporting",
      "AI academic insights and teaching support",
    ],
    iconBg: "bg-emerald-500/20 border-emerald-400/30",
    iconColor: "text-emerald-300",
    bulletColor: "bg-emerald-400",
  },
  {
    id: "medicare-ai",
    icon: HeartPulse,
    title: "MediCare AI",
    category: "Healthcare",
    description:
      "Hospital and clinic operations from patient registration through billing, with AI-assisted clinical decision support built in.",
    highlights: [
      "Records, lab, pharmacy, beds and billing",
      "AI clinical support and 24/7 patient chatbot",
      "Performance visibility for management",
    ],
    iconBg: "bg-rose-500/20 border-rose-400/30",
    iconColor: "text-rose-300",
    bulletColor: "bg-rose-400",
  },
  {
    id: "control-inventory",
    icon: Package,
    title: "Control Inventory",
    category: "Operations",
    description:
      "End-to-end inventory, sales and reporting for branches, warehouses and retail operations.",
    highlights: [
      "Stock movement across every location",
      "Sales workflows and transaction records",
      "Profitability reporting and smart alerts",
    ],
    iconBg: "bg-amber-500/20 border-amber-400/30",
    iconColor: "text-amber-300",
    bulletColor: "bg-amber-400",
  },
  {
    id: "car-service",
    icon: Car,
    title: "Car Service Management",
    category: "Mobility",
    description:
      "A complete digital workshop: customers, vehicles, appointments, parts inventory and automated service reminders by SMS and email.",
    highlights: [
      "Customers, vehicles and service history",
      "Appointments and parts control",
      "Mileage-based reminders that drive repeat work",
    ],
    iconBg: "bg-sky-500/20 border-sky-400/30",
    iconColor: "text-sky-300",
    bulletColor: "bg-sky-400",
  },
  {
    id: "property-management",
    icon: Building2,
    title: "Property Management",
    category: "Real estate",
    description:
      "Digital property operations for units, tenants, billing, maintenance and portfolio-level reporting.",
    highlights: [
      "Units, tenants and lease operations",
      "Billing, rent follow-up and maintenance",
      "Occupancy and performance dashboards",
    ],
    iconBg: "bg-violet-500/20 border-violet-400/30",
    iconColor: "text-violet-300",
    bulletColor: "bg-violet-400",
  },
  {
    id: "fitmind-ai",
    icon: Dumbbell,
    title: "FitMind AI",
    category: "Consumer",
    description:
      "AI-generated weekly fitness and nutrition plans that members can save, follow and track over time.",
    highlights: [
      "Personalized workout and nutrition plans",
      "Progress tracking and saved programmes",
      "Downloadable plans and audio guidance",
    ],
    iconBg: "bg-orange-500/20 border-orange-400/30",
    iconColor: "text-orange-300",
    bulletColor: "bg-orange-400",
  },
];

export default function SoftwareProducts() {
  return (
    <Section
      id="products"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines-invert absolute inset-0" />
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-teal-600/12 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-700/12 blur-[120px]" />
      </div>

      <div className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Our platforms"
          title="Products already running real operations"
          description="Six proven platforms you can deploy in weeks instead of months — each one configurable to your processes, and each one built and maintained by the same team that supports it."
        />

        <div className="mt-14 flex flex-row gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-5 lg:overflow-visible">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal
                key={product.id}
                delay={index * 70}
                className="flex h-full w-[min(85vw,20rem)] shrink-0 flex-col sm:w-[18.5rem] lg:w-auto lg:min-w-0 lg:flex-1"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="ring-gradient group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.07] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${product.iconBg}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${product.iconColor}`}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:px-3 sm:text-[11px]">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white sm:mt-6 sm:text-xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-5">
                    {product.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <span
                          className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${product.bulletColor}`}
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-teal-300">
                    View platform
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] px-7 py-8 sm:px-10 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Need something none of these cover?
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-400">
                Most of our work starts as a conversation about a process that
                is costing you time. We scope it, price it honestly, and build
                only what earns its place.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Scope a custom build
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

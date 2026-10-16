import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Package,
  PartyPopper,
  Sparkles,
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
    title: "ኢዚስቶክ · EasyStock",
    category: "Inventory & Sales",
    description:
      "Easy inventory and sales system for shops, warehouses and multi-branch businesses — stock, POS, purchases and profit reports in one place.",
    highlights: [
      "Stock movement across every location",
      "Sales / POS and purchase workflows",
      "Profitability reporting and low-stock alerts",
    ],
    iconBg: "bg-amber-500/20 border-amber-400/30",
    iconColor: "text-amber-300",
    bulletColor: "bg-amber-400",
  },
  {
    id: "guzo",
    icon: Car,
    title: "ጉዞ · Guzo",
    category: "Automotive",
    description:
      "Automotive service and garage management — customers, vehicles, appointments, parts inventory and automated service reminders by SMS and email.",
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
    id: "nibret",
    icon: Building2,
    title: "ንብረት · Nibret",
    category: "Property",
    description:
      "Property and real estate management for buildings, apartments and commercial units — tenants, rent billing, maintenance and occupancy.",
    highlights: [
      "Units, tenants and lease operations",
      "Rent collection and follow-up",
      "Maintenance tickets and portfolio dashboards",
    ],
    iconBg: "bg-violet-500/20 border-violet-400/30",
    iconColor: "text-violet-300",
    bulletColor: "bg-violet-400",
  },
  {
    id: "wubet",
    icon: Sparkles,
    title: "ውበት · Wubet",
    category: "Salon · Barbershop · Spa",
    description:
      "Salon, barbershop and spa management — appointments, staff, services, memberships and payments in one simple system.",
    highlights: [
      "Booking for salon, barbershop and spa",
      "Staff, services, packages and memberships",
      "Payments, client history and reminders",
    ],
    iconBg: "bg-pink-500/20 border-pink-400/30",
    iconColor: "text-pink-300",
    bulletColor: "bg-pink-400",
  },
  {
    id: "enku",
    icon: PartyPopper,
    title: "እንቁ · Enku",
    category: "Celebrations",
    description:
      "Every celebration deserves something special — weddings, birthdays, graduations, anniversaries, engagements and corporate events.",
    highlights: [
      "Event planning for weddings, birthdays and more",
      "Vendors, budgets, guests and timelines",
      "Corporate events and anniversary packages",
    ],
    iconBg: "bg-fuchsia-500/20 border-fuchsia-400/30",
    iconColor: "text-fuchsia-300",
    bulletColor: "bg-fuchsia-400",
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
          eyebrow="Products"
          title="Ready-to-use platforms"
          description="Pick a product that fits your business — or ask us to build something custom."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.id} delay={index * 50} className="h-full">
                <Link
                  href={`/products/${product.id}`}
                  className="ring-gradient group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-6"
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${product.iconBg}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${product.iconColor}`}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-white sm:text-lg">
                          {product.title}
                        </h3>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-300"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        {product.category}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                        {product.description}
                      </p>
                    </div>
                  </div>
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

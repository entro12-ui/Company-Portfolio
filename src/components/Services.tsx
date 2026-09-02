import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  CodeXml,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TechStackCarousel from "@/components/TechStackCarousel";

type Service = {
  icon: LucideIcon;
  title: string;
  href: string;
  linkLabel: string;
  description: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    icon: CodeXml,
    title: "Custom Software Development",
    href: "/custom-software-development",
    linkLabel: "How we build custom software",
    description:
      "When off-the-shelf tools force your team to work around them, we build the system that works the way you already do.",
    deliverables: [
      "Discovery & process mapping",
      "Web and mobile applications",
      "Legacy system modernization",
      "Integrations with existing tools",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    href: "/web-development",
    linkLabel: "Explore web development",
    description:
      "Marketing sites, portals and web apps that load fast, rank well and turn visitors into enquiries.",
    deliverables: [
      "Next.js and React front ends",
      "SEO and performance engineering",
      "Content management",
      "Accessibility and responsive design",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    href: "/ai-solutions",
    linkLabel: "See our AI capabilities",
    description:
      "Practical AI that removes repetitive work — assistants, document processing and decision support wired into your operations.",
    deliverables: [
      "AI assistants and chatbots",
      "Document & report automation",
      "Clinical and business decision support",
      "Model integration and evaluation",
    ],
  },
  {
    icon: Layers,
    title: "ERP & Business Systems",
    href: "/erp-systems",
    linkLabel: "Explore ERP systems",
    description:
      "One source of truth for finance, inventory, HR and operations — with the reporting management actually needs.",
    deliverables: [
      "Inventory and supply chain",
      "Finance and billing workflows",
      "HR and payroll modules",
      "Executive dashboards",
    ],
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-gradient-to-b from-white via-slate-50 to-white dark:from-ink-950 dark:via-ink-900 dark:to-ink-950"
    >
      <SectionHeading
        eyebrow="What we do"
        title="Four disciplines, one accountable team"
        description="Strategy, design, engineering and support under one roof — so nothing gets lost between vendors and no one has to chase an answer."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 90}>
              <Link
                href={service.href}
                className="ring-gradient card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-[0_12px_28px_-14px_rgba(13,148,136,0.9)]">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600 dark:text-slate-600 dark:group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-[1.35rem] dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-2.5 border-t border-slate-100 pt-6 sm:grid-cols-2 dark:border-white/10">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-7 text-sm font-semibold text-teal-700 dark:text-teal-400">
                  {service.linkLabel}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-14">
        <TechStackCarousel />
      </Reveal>
    </Section>
  );
}

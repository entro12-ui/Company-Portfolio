import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  CodeXml,
  Cpu,
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
  {
    icon: Cpu,
    title: "Hardware Systems & Integration",
    href: "/hardware-systems",
    linkLabel: "Explore hardware systems",
    description:
      "We install and integrate CCTV, door access, GPS tracking, and attendance hardware — then connect everything to one management platform.",
    deliverables: [
      "CCTV camera installation & NVR/DVR setup",
      "Door access control (RFID, biometric, facial)",
      "GPS vehicle tracking & fleet dashboards",
      "Attendance machines + HR/payroll sync",
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
        eyebrow="Services"
        title="Software and hardware under one team"
        description="Build, install, integrate, and support — without juggling vendors."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 60} className="h-full">
              <Link
                href={service.href}
                className="ring-gradient group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 sm:p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600 dark:text-slate-600 dark:group-hover:text-teal-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100} className="mt-12">
        <TechStackCarousel />
      </Reveal>
    </Section>
  );
}

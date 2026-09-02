import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const reviews = [
  {
    quote:
      "Entro Ethiopia delivered our MediCare system for Danat Dental Clinic, with practical workflows, clear usability, and reliable support for day-to-day healthcare operations.",
    name: "Clinic Administration",
    organization: "Danat Dental Clinic",
    logoSrc: "/healthcare-client-logo.png",
  },
  {
    quote:
      "Entro Ethiopia helped us replace manual reporting with a practical system our staff could use from day one. Our monthly reporting is now faster and more accurate.",
    name: "Operations Manager",
    organization: "Media Reporting Agency, California, USA",
    logoSrc: "/vallintine.png",
  },
  {
    quote:
      "Entro Ethiopia developed practical tools for student use, including a humanizer workflow and an AI integration system tailored to our platform needs.",
    name: "Product Team",
    organization: "duey.ai",
    logoSrc: "/duey.ai.png",
  },
  {
    quote:
      "The team understood our workflow quickly and delivered a system that matched how our business actually runs. Support after launch has also been reliable.",
    name: "General Manager",
    organization: "SME Client, Iceland",
    logoSrc: "/Parka.png",
  },
  {
    quote:
      "Entro Ethiopia built a booking system tailored to our operation flow. It made reservations easier to manage and improved day-to-day coordination.",
    name: "Operations Team",
    organization: "Operation Kilimanjaro",
    logoSrc: "/operation-kilimanjaro-logo.png",
  },
  {
    quote:
      "Before the new system, reporting took days. Now our team generates clear reports in minutes and management gets faster updates.",
    name: "Operations Officer",
    organization: "Distribution Business, Ethiopia",
  },
  {
    quote:
      "The solution reduced repeated manual work and improved the speed of our internal coordination. The onboarding process was very smooth.",
    name: "Project Coordinator",
    organization: "NGO Program Team, Ethiopia",
  },
  {
    quote:
      "Entro Ethiopia designed a practical web-based workflow that matched our daily operations and worked well for both staff and management.",
    name: "Managing Director",
    organization: "Service Company, Addis Ababa",
  },
  {
    quote:
      "The software rollout was structured and the support team stayed responsive after launch. We saw immediate improvements in data accuracy.",
    name: "HR Manager",
    organization: "SME Group, Ethiopia",
  },
];

const clientProjects = [
  { name: "Wewalo Pharmacy", project: "Inventory System", location: "Mekelle" },
  { name: "Lemelem Clinic", project: "MediCare AI", location: "Ethiopia" },
  { name: "Kelebet Clinic", project: "MediCare AI", location: "Addis Ababa" },
  {
    name: "Marbez Restaurant",
    project: "Digital Solutions",
    location: "Ethiopia",
  },
  {
    name: "Chillina Chiffon",
    project: "Digital Solutions",
    location: "Ethiopia",
  },
  {
    name: "Happy Decor",
    project: "Booking & AI Digitalization",
    location: "Addis Ababa",
  },
  { name: "Meey Gold", project: "Digital Solutions", location: "Adama" },
  {
    name: "Hibret Building",
    project: "Property Management",
    location: "Addis Ababa",
  },
];

export default function PastClientReview() {
  return (
    <Section
      id="clients"
      className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-ink-900"
    >
      <SectionHeading
        align="left"
        eyebrow="Client results"
        title="The work speaks, but our clients say it better"
        description="Feedback from the organizations we have supported with software systems, from single clinics in Addis Ababa to product teams abroad."
        action={
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
          >
            View full portfolio
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal
            key={`${review.name}-${review.organization}`}
            delay={index * 60}
            className="h-full"
          >
            <figure className="ring-gradient relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]">
              <Quote
                className="h-7 w-7 shrink-0 text-teal-500/30"
                aria-hidden="true"
              />
              <blockquote className="mt-4 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                {review.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-6 dark:border-white/10">
                {review.logoSrc ? (
                  <span className="relative h-10 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 dark:border-white/10">
                    <Image
                      src={review.logoSrc}
                      alt={`${review.organization} logo`}
                      fill
                      className="object-contain object-center"
                      sizes="80px"
                      quality={100}
                    />
                  </span>
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-700 dark:text-teal-300">
                    {getInitials(review.organization)}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {review.name}
                  </span>
                  <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                    {review.organization}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Ongoing projects marquee */}
      <div className="mt-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Recent and ongoing projects
        </p>
        <div className="mask-fade-x marquee-paused mt-7 overflow-hidden">
          <div className="animate-marquee flex w-max gap-4">
            {[...clientProjects, ...clientProjects].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="w-60 shrink-0 rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-xs font-bold text-teal-700 dark:text-teal-300">
                    {getInitials(client.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {client.name}
                    </span>
                    <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                      {client.location}
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-xs font-medium text-teal-700 dark:text-teal-400">
                  {client.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

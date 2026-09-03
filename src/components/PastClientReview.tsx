"use client";

import { useEffect, useState } from "react";
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

const accentColors = [
  { quote: "text-rose-500", soft: "bg-rose-500/10", text: "text-rose-700 dark:text-rose-300" },
  { quote: "text-teal-500", soft: "bg-teal-500/10", text: "text-teal-700 dark:text-teal-300" },
  { quote: "text-sky-500", soft: "bg-sky-500/10", text: "text-sky-700 dark:text-sky-300" },
  { quote: "text-amber-500", soft: "bg-amber-500/10", text: "text-amber-700 dark:text-amber-300" },
  { quote: "text-violet-500", soft: "bg-violet-500/10", text: "text-violet-700 dark:text-violet-300" },
  { quote: "text-emerald-500", soft: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-300" },
  { quote: "text-orange-500", soft: "bg-orange-500/10", text: "text-orange-700 dark:text-orange-300" },
  { quote: "text-cyan-500", soft: "bg-cyan-500/10", text: "text-cyan-700 dark:text-cyan-300" },
  { quote: "text-fuchsia-500", soft: "bg-fuchsia-500/10", text: "text-fuchsia-700 dark:text-fuchsia-300" },
];

type Review = {
  quote: string;
  name: string;
  organization: string;
  logoSrc?: string;
};

const reviews: Review[] = [
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

const projectColors = [
  { badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300", label: "text-rose-700 dark:text-rose-300" },
  { badge: "bg-teal-500/15 text-teal-700 dark:text-teal-300", label: "text-teal-700 dark:text-teal-300" },
  { badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300", label: "text-sky-700 dark:text-sky-300" },
  { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300", label: "text-amber-700 dark:text-amber-300" },
  { badge: "bg-violet-500/15 text-violet-700 dark:text-violet-300", label: "text-violet-700 dark:text-violet-300" },
  { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300", label: "text-emerald-700 dark:text-emerald-300" },
  { badge: "bg-orange-500/15 text-orange-700 dark:text-orange-300", label: "text-orange-700 dark:text-orange-300" },
  { badge: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300", label: "text-cyan-700 dark:text-cyan-300" },
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

function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  const accent = accentColors[index % accentColors.length];

  return (
    <figure className="ring-gradient relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 sm:p-7 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-start gap-3.5">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.soft}`}
        >
          <Quote className={`h-5 w-5 ${accent.quote}`} aria-hidden="true" />
        </span>
        <blockquote className="min-w-0 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7 dark:text-slate-300">
          {review.quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-6 dark:border-white/10">
        {review.logoSrc ? (
          <span className="relative h-12 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-200/70 bg-transparent p-1.5 dark:border-white/20 dark:bg-white/5">
            <Image
              src={review.logoSrc}
              alt={`${review.organization} logo`}
              fill
              className="object-contain object-center"
              sizes="112px"
              quality={100}
            />
          </span>
        ) : (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${accent.soft} ${accent.text}`}
          >
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
  );
}

function CarouselDots({
  total,
  page,
  onChange,
  label,
}: {
  total: number;
  page: number;
  onChange: (index: number) => void;
  label: string;
}) {
  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index)}
          aria-label={`${label} page ${index + 1}`}
          aria-current={index === page ? "true" : undefined}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            index === page
              ? "w-7 bg-teal-600 dark:bg-teal-400"
              : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

export default function PastClientReview() {
  const [page, setPage] = useState(0);
  const totalPages = reviews.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => window.clearInterval(id);
  }, [totalPages]);

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

      {/* Small screen: dotted carousel (1 review per slide) */}
      <div className="mt-14 md:hidden">
        <div key={page} className="animate-fade-in-up">
          <ReviewCard review={reviews[page]} index={page} />
        </div>
        <CarouselDots
          total={totalPages}
          page={page}
          onChange={setPage}
          label="Client review"
        />
      </div>

      {/* Medium / large: grid */}
      <div className="mt-14 hidden gap-5 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal
            key={`${review.name}-${review.organization}`}
            delay={index * 60}
            className="h-full"
          >
            <ReviewCard review={review} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          Recent and ongoing projects
        </p>
        <div className="mt-7 flex flex-row gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mask-fade-x md:overflow-hidden">
          <div className="flex w-max gap-3 md:animate-marquee md:gap-4">
            {[...clientProjects, ...clientProjects].map((client, index) => {
              const color = projectColors[index % projectColors.length];
              return (
                <div
                  key={`${client.name}-${index}`}
                  className="w-52 shrink-0 rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:w-56 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${color.badge}`}
                    >
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
                  <p className={`mt-3 text-xs font-medium ${color.label}`}>
                    {client.project}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

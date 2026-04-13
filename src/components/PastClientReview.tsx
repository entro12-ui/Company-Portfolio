"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      "Entro Ethiopia helped us replace manual reporting with a practical system our staff could use from day one. Our monthly reporting is now faster and more accurate.",
    name: "Operations Manager",
    organization: "Media Reporting Agency, California, USA",
    logoSrc: "/vallintine.png",
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
      "Entro Ethiopia delivered our MediCare system for Danat Dental Clinic, with practical workflows, clear usability, and reliable support for day-to-day healthcare operations.",
    name: "Clinic Administration",
    organization: "Danat Dental Clinic",
    logoSrc: "/healthcare-client-logo.png",
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
      "The solution reduced repeated manual work and improved the speed of our internal coordination. The onboarding process was very smooth.",
    name: "Project Coordinator",
    organization: "NGO Program Team, Ethiopia",
  },
  {
    quote:
      "Before the new system, reporting took days. Now our team generates clear reports in minutes and management gets faster updates.",
    name: "Operations Officer",
    organization: "Distribution Business, Ethiopia",
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
  {
    quote:
      "Entro Ethiopia built a booking system tailored to our operation flow. It made reservations easier to manage and improved day-to-day coordination.",
    name: "Operations Team",
    organization: "Operation Kilimanjaro",
    logoSrc: "/operation-kilimanjaro-logo.png",
  },
];

export default function PastClientReview() {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);
  const [activePage, setActivePage] = useState(0);
  const startIndex = activePage * cardsPerPage;
  const visibleReviews = reviews.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Trust & Results
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Past Client Review
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Feedback from organizations we have supported with software systems
            and digital solutions.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center">
            <p className="text-sm font-medium text-gray-600">
              {activePage + 1} / {totalPages}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <article
                key={`${review.name}-${review.organization}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  {review.logoSrc ? (
                    <div className="relative h-14 w-28 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
                      <Image
                        src={review.logoSrc}
                        alt={`${review.organization} logo`}
                        fill
                        className="object-contain object-center"
                        sizes="112px"
                        quality={100}
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-sm font-bold text-teal-700">
                      {getInitials(review.organization)}
                    </div>
                  )}
                </div>
                <p className="mb-4 leading-7 text-gray-700">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.organization}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActivePage(index)}
                aria-label={`Go to reviews page ${index + 1}`}
                className={`h-3 w-3 cursor-pointer rounded-full transition ${
                  index === activePage
                    ? "scale-110 bg-teal-700 ring-2 ring-teal-200"
                    : "bg-slate-400 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-gradient-to-r from-slate-700 to-teal-700 px-5 py-3 font-semibold text-white transition hover:from-slate-800 hover:to-teal-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

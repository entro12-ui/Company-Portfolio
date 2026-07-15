"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

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

const clientProjects = [
  { name: "Wewalo Pharmacy", project: "Inventory System", location: "Mekelle" },
  { name: "Lemelem Clinic", project: "MediCare AI", location: "Ethiopia" },
  { name: "Kelebet Clinic", project: "MediCare AI", location: "Addis Ababa" },
  { name: "Marbez Restaurant", project: "Digital Solutions", location: "Ethiopia" },
  { name: "Chillina Chiffon", project: "Digital Solutions", location: "Ethiopia" },
  {
    name: "Happy Decor",
    project: "Booking & AI Business Digitalization",
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const sectionBg = isDark
    ? "bg-gradient-to-b from-[#05070f] via-[#0a1120] to-[#05070f]"
    : "bg-gradient-to-b from-cyan-50/50 via-white to-slate-50";
  const badgeClass = isDark ? "text-teal-400" : "text-teal-700";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const paragraphClass = isDark ? "text-gray-300" : "text-gray-600";
  const pageCounterClass = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-slate-200";
  const logoBorderClass = isDark
    ? "border-gray-600 bg-gray-800/50"
    : "border-slate-200 bg-white";
  const fallbackIconBg = isDark
    ? "bg-teal-900/50 text-teal-300"
    : "bg-teal-100 text-teal-700";
  const quoteClass = isDark ? "text-gray-300" : "text-gray-700";
  const reviewerNameClass = isDark ? "text-white" : "text-gray-900";
  const reviewerOrgClass = isDark ? "text-gray-400" : "text-gray-600";
  const dotActiveClass = isDark
    ? "bg-teal-500 ring-teal-800/50"
    : "bg-teal-700 ring-teal-200";
  const dotInactiveClass = isDark
    ? "bg-gray-600 hover:bg-gray-500"
    : "bg-slate-400 hover:bg-slate-500";
  const buttonClass = isDark
    ? "bg-gradient-to-r from-slate-800 to-teal-800 hover:from-slate-900 hover:to-teal-900 text-white"
    : "bg-gradient-to-r from-slate-700 to-teal-700 hover:from-slate-800 hover:to-teal-800 text-white";

  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);
  const [activePage, setActivePage] = useState(0);
  const startIndex = activePage * cardsPerPage;
  const visibleReviews = reviews.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section
      className={`px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-8 ${sectionBg}`}
    >
      <style>{`
        @keyframes clientMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .client-marquee-track {
          animation: clientMarquee 32s linear infinite;
        }
        .client-marquee-wrap:hover .client-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .client-marquee-track {
            animation: none;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${badgeClass}`}
          >
            Trust & Results
          </p>
          <h2 className={`text-3xl font-bold sm:text-4xl ${headingClass}`}>
            Past Client Review
          </h2>
          <p className={`mx-auto mt-4 max-w-3xl ${paragraphClass}`}>
            Feedback from organizations we have supported with software systems
            and digital solutions.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-6xl">
          <div className="mb-5 text-center">
            <h3 className={`text-2xl font-bold ${headingClass}`}>
              Clients We Work With
            </h3>
            <p className={`mt-2 text-sm ${paragraphClass}`}>
              Recent and ongoing software projects across Ethiopia
            </p>
          </div>
          <div className="client-marquee-wrap group relative overflow-hidden">
            {/* Edge fade masks */}
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${isDark ? "from-[#0a1120]" : "from-white"} to-transparent`}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${isDark ? "from-[#0a1120]" : "from-white"} to-transparent`}
            />
            <div className="client-marquee-track flex w-max gap-4 py-2">
              {[...clientProjects, ...clientProjects].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className={`w-56 flex-shrink-0 rounded-2xl border p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400 ${cardBg}`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${fallbackIconBg}`}
                  >
                    {getInitials(client.name)}
                  </div>
                  <h4 className={`font-semibold ${reviewerNameClass}`}>
                    {client.name}
                  </h4>
                  <p className={`mt-1 text-xs font-medium ${badgeClass}`}>
                    {client.project}
                  </p>
                  <p className={`mt-1 text-xs ${reviewerOrgClass}`}>
                    {client.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center">
            <p className={`text-sm font-medium ${pageCounterClass}`}>
              {activePage + 1} / {totalPages}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <article
                key={`${review.name}-${review.organization}`}
                className={`rounded-2xl border p-6 shadow-sm transition-colors duration-300 ${cardBg}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  {review.logoSrc ? (
                    <div
                      className={`relative h-14 w-28 overflow-hidden rounded-lg border p-1 shadow-sm ${logoBorderClass}`}
                    >
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
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${fallbackIconBg}`}
                    >
                      {getInitials(review.organization)}
                    </div>
                  )}
                </div>
                <p className={`mb-4 leading-7 ${quoteClass}`}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className={`font-semibold ${reviewerNameClass}`}>
                  {review.name}
                </p>
                <p className={`text-sm ${reviewerOrgClass}`}>
                  {review.organization}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActivePage(index)}
                aria-label={`Go to reviews page ${index + 1}`}
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-200 ${
                  index === activePage
                    ? `scale-110 ${dotActiveClass}`
                    : `${dotInactiveClass}`
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className={`inline-flex rounded-xl px-5 py-3 font-semibold transition-all duration-300 transform hover:-translate-y-1 ${buttonClass}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Entro Ethiopia Software & AI Projects",
  description:
    "Explore Entro Ethiopia's portfolio including Danat Dental Clinic website development, Operation Kilimanjaro SEO/GEO optimization, and AI automation for Valintine Advisors.",
};

const portfolioItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Entro Ethiopia Portfolio Projects",
  itemListElement: [
    {
      "@type": "CreativeWork",
      name: "Danat Dental Clinic Website Development",
      description:
        "Website development and booking system integration for Danat Dental Clinic in Ethiopia.",
    },
    {
      "@type": "CreativeWork",
      name: "Operation Kilimanjaro SEO & GEO Optimization",
      description:
        "SEO, Generative Engine Optimization, and booking system development for Operation Kilimanjaro.",
    },
    {
      "@type": "CreativeWork",
      name: "Valintine Advisors AI Integration",
      description:
        "AI integration and automation for media visualization and reporting systems.",
    },
  ],
};

const caseStudies = [
  {
    name: "Danat Dental Clinic",
    subtitle: "Website Development & Booking System Integration",
    overview:
      "Danat Dental Clinic required a modern, professional website that would improve their online presence and allow patients to book appointments easily.",
    challenges: [
      "Limited online visibility",
      "Manual appointment scheduling",
      "No centralized booking system",
      "Poor mobile user experience",
    ],
    solution:
      "We designed and developed a responsive, SEO-ready website tailored to healthcare service needs.",
    deliverables: [
      "Modern, mobile-friendly website",
      "Integrated online booking system",
      "Appointment scheduling workflow",
      "Optimized service pages",
      "Improved site structure for search indexing",
    ],
    impact: [
      "Improved patient booking process",
      "Reduced manual scheduling workload",
      "Enhanced online credibility",
      "Increased digital visibility",
    ],
  },
  {
    name: "Operation Kilimanjaro",
    subtitle: "Website SEO/GEO Optimization & Booking System Development",
    overview:
      "Operation Kilimanjaro required improved digital visibility and a structured booking system to manage client reservations efficiently.",
    challenges: [
      "Low search visibility",
      "Weak AI discoverability",
      "Manual booking coordination",
      "Disorganized content structure",
    ],
    solution:
      "We implemented advanced SEO and Generative Engine Optimization (GEO) strategies alongside a structured booking system.",
    deliverables: [
      "Technical SEO optimization",
      "GEO-focused content restructuring",
      "Structured data implementation",
      "Booking system integration",
      "Performance and crawl improvements",
    ],
    impact: [
      "Improved search engine visibility",
      "Enhanced AI-driven discoverability",
      "More efficient booking management",
      "Stronger digital authority",
    ],
  },
  {
    name: "Valintine Advisors",
    subtitle: "AI Integration & Automation for Media Visualization & Reporting",
    overview:
      "Valintine Advisors required enhanced automation and AI integration to improve their media visualization and reporting processes.",
    challenges: [
      "Manual data aggregation",
      "Time-consuming report preparation",
      "Inconsistent data visualization",
      "Limited automation",
    ],
    solution:
      "We developed AI-driven automation systems to improve reporting workflows and data interpretation.",
    deliverables: [
      "AI-powered data integration",
      "Automated reporting workflows",
      "Media data visualization system",
      "Performance tracking dashboards",
      "Process optimization tools",
    ],
    impact: [
      "Reduced reporting time",
      "Increased accuracy",
      "Improved decision-making visibility",
      "Automated recurring processes",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <JsonLd data={portfolioItemListSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Case Studies
            </p>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Portfolio &amp; Case Studies
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              At Entro Ethiopia, we focus on building practical, scalable
              technology solutions that solve real business challenges. Below are
              selected projects that demonstrate our expertise in web
              development, SEO/GEO optimization, AI integration, and automation.
            </p>
          </header>

          <div className="mt-8 space-y-8">
            {caseStudies.map((study) => (
              <section
                key={study.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
              >
                <h2 className="text-3xl font-bold text-gray-900">{study.name}</h2>
                <p className="mt-2 text-lg font-semibold text-teal-700">
                  {study.subtitle}
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Project Overview
                    </h3>
                    <p className="mt-2 leading-8 text-gray-700">{study.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Challenges</h3>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      {study.challenges.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Solution Delivered by Entro Ethiopia
                    </h3>
                    <p className="mt-2 leading-8 text-gray-700">{study.solution}</p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Key Deliverables
                      </h3>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        {study.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
                      <ul className="mt-2 space-y-2 text-gray-700">
                        {study.impact.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Approach to Every Project
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Discovery & Requirement Analysis",
                "System Architecture Planning",
                "Development & Testing",
                "Deployment & Integration",
                "Ongoing Optimization & Support",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-gray-900">
              We focus on building systems that are:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Scalable",
                "Secure",
                "SEO-ready",
                "AI-optimized",
                "Designed for local business realities",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Industries We Serve
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Healthcare",
                "Tourism & Booking Services",
                "Consulting & Advisory Firms",
                "SMEs",
                "NGOs",
                "Government Institutions",
              ].map((industry) => (
                <li key={industry} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" />
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-3 text-3xl font-bold">
              Ready to discuss your project?
            </h2>
            <p className="mb-6 text-white/90">
              Contact Entro Ethiopia to explore how we can design a solution
              tailored to your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
            >
              Start Your Project Consultation
            </Link>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

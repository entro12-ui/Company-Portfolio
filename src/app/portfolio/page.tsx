import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import OrgChart from "@/components/OrgChart";
import { afsOrganogram } from "@/content/afsOrganogram";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Entro Ethiopia Software & AI Projects",
  description:
    "Explore Entro Ethiopia's portfolio including websites, SEO/GEO optimization, AI automation, and smart organizational design for client operations.",
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
    {
      "@type": "CreativeWork",
      name: "AFS Automotive Fleet Services Organogram",
      description:
        "Responsive, data-driven organizational chart design for AFS Automotive Fleet Services International PLC.",
    },
  ],
};

const caseStudies = [
  {
    name: "Danat Dental Clinic",
    subtitle: "Website Development & Booking System Integration",
    accent: "from-cyan-600 to-blue-700",
    chip: "Healthcare",
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
    outcome: ["Patient Booking", "Mobile UX", "Online Visibility"],
  },
  {
    name: "Operation Kilimanjaro",
    subtitle: "Website SEO/GEO Optimization & Booking System Development",
    accent: "from-teal-600 to-cyan-700",
    chip: "Tourism & Booking",
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
    outcome: ["SEO Growth", "GEO Visibility", "Booking Flow"],
  },
  {
    name: "Valintine Advisors",
    subtitle: "AI Integration & Automation for Media Visualization & Reporting",
    accent: "from-violet-600 to-indigo-700",
    chip: "Consulting & Advisory",
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
    outcome: ["AI Automation", "Reporting Speed", "Decision Support"],
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <JsonLd data={portfolioItemListSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Case Studies
            </p>
            <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
              Our Portfolio &amp; Case Studies
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-slate-200">
              At Entro Ethiopia, we build practical, scalable systems that solve
              real business challenges. These selected projects highlight our
              work in web development, SEO/GEO optimization, AI integration, and
              automation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Web Development",
                "SEO & GEO",
                "AI Integration",
                "Automation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-8 space-y-8">
            {caseStudies.map((study) => (
              <section
                key={study.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className={`bg-gradient-to-r ${study.accent} px-8 py-7 text-white sm:px-10`}>
                  <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    {study.chip}
                  </div>
                  <h2 className="text-3xl font-bold">{study.name}</h2>
                  <p className="mt-2 text-lg text-white/90">{study.subtitle}</p>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {study.outcome.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-gray-900">Project Overview</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{study.overview}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-gray-900">Challenges</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700">
                        {study.challenges.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-slate-700" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-teal-100 bg-teal-50/40 p-5">
                      <h3 className="text-lg font-semibold text-teal-800">Key Deliverables</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700">
                        {study.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-cyan-100 bg-cyan-50/40 p-5">
                      <h3 className="text-lg font-semibold text-cyan-800">Impact</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700">
                        {study.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600" />
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

          <section className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-xl sm:p-10">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Org Structure Design
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  AFS Automotive Fleet Services International PLC
                </h2>
                <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-200">
                  We translated a static corporate organogram into a structured,
                  web-friendly layout that is easier to maintain, easier to read
                  on any screen, and ready to evolve as teams change.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Responsive Layout",
                  "Data-Driven Structure",
                  "Corporate Governance",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <OrgChart chart={afsOrganogram} />
          </section>

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

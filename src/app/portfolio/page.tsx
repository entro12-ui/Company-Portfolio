import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";

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
      name: "Wewalo Pharmacy Inventory System",
      description: "Pharmacy inventory management system for Wewalo Pharmacy in Mekelle.",
    },
    {
      "@type": "CreativeWork",
      name: "Lemelem Clinic MediCare AI",
      description: "MediCare AI implementation for Lemelem Clinic.",
    },
    {
      "@type": "CreativeWork",
      name: "Kelebet Clinic MediCare AI",
      description: "MediCare AI implementation for Kelebet Clinic in Addis Ababa.",
    },
    {
      "@type": "CreativeWork",
      name: "Marbez Restaurant Digital Solutions",
      description: "Business digital solutions for Marbez Restaurant.",
    },
    {
      "@type": "CreativeWork",
      name: "Chillina Chiffon Digital Solutions",
      description: "Business digital solutions for Chillina Chiffon.",
    },
    {
      "@type": "CreativeWork",
      name: "Happy Decor Booking and AI Digitalization",
      description:
        "Booking system and AI-powered business digitalization for Happy Decor in Addis Ababa.",
    },
    {
      "@type": "CreativeWork",
      name: "Meey Gold Digital Solutions",
      description: "Business digital solutions for Meey Gold in Adama.",
    },
    {
      "@type": "CreativeWork",
      name: "Hibret Building Property Management System",
      description: "Property management system for Hibret Building in Addis Ababa.",
    },
    {
      "@type": "CreativeWork",
      name: "AFS Automotive Fleet Services Website Design",
      description:
        "Modern, responsive company website design and development for AFS Automotive Fleet Services International PLC.",
    },
    {
      "@type": "CreativeWork",
      name: "AFS Car Service Management System",
      description:
        "Car Service Management System for AFS covering customers, vehicles, appointments, service history, inventory, and automated service alerts.",
    },
    {
      "@type": "CreativeWork",
      name: "AFS Automotive Fleet Services",
      description:
        "Responsive, data-driven organizational chart design for AFS Automotive Fleet Services International PLC.",
    },
  ],
};

const caseStudies = [
  {
    name: "Danat Dental Clinic",
    subtitle: "Website Development & Booking System Integration",
    accent: "from-ink-900 via-ink-800 to-teal-900",
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
    accent: "from-ink-900 via-ink-800 to-cyan-900",
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
    accent: "from-ink-900 via-ink-800 to-teal-800",
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

const additionalProjects = [
  {
    name: "Wewalo Pharmacy",
    service: "Pharmacy Inventory System",
    location: "Mekelle",
    status: "Delivered",
    icon: "💊",
  },
  {
    name: "Lemelem Clinic",
    service: "MediCare AI",
    location: "Ethiopia",
    status: "In Progress",
    icon: "🏥",
  },
  {
    name: "Kelebet Clinic",
    service: "MediCare AI",
    location: "Addis Ababa",
    status: "In Progress",
    icon: "🩺",
  },
  {
    name: "Marbez Restaurant",
    service: "Business Digital Solutions",
    location: "Ethiopia",
    status: "Client Project",
    icon: "🍽️",
  },
  {
    name: "Chillina Chiffon",
    service: "Business Digital Solutions",
    location: "Ethiopia",
    status: "Client Project",
    icon: "👗",
  },
  {
    name: "Happy Decor",
    service: "Booking System & AI-Powered Business Digitalization",
    location: "Addis Ababa",
    status: "Client Project",
    icon: "✨",
  },
  {
    name: "Meey Gold",
    service: "Business Digital Solutions",
    location: "Adama",
    status: "Client Project",
    icon: "💎",
  },
  {
    name: "Hibret Building",
    service: "Property Management System",
    location: "Addis Ababa",
    status: "Client Project",
    icon: "🏢",
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <JsonLd data={portfolioItemListSchema} />

      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/portfolio", label: "Portfolio" },
        ]}
        eyebrow="Case studies"
        title="Selected work, and what it changed for the client"
        description="We build practical, scalable systems that solve real business problems. These projects show the work in web development, SEO and GEO optimization, AI integration and automation."
      >
        <div className="flex flex-wrap gap-2">
          {["Web Development", "SEO & GEO", "AI Integration", "Automation"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-slate-200"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </PageHero>

      <article className="px-4 pb-16 pt-14 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <section
                key={study.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div
                  className={`bg-gradient-to-r ${study.accent} px-8 py-7 text-white sm:px-10`}
                >
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
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Project Overview
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-gray-300">
                        {study.overview}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Challenges
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {study.challenges.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-slate-700 dark:bg-gray-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Solution
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-teal-100 bg-teal-50/40 p-5 dark:border-teal-900/50 dark:bg-teal-950/30">
                      <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400">
                        Key Deliverables
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {study.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-cyan-100 bg-cyan-50/40 p-5 dark:border-cyan-900/50 dark:bg-cyan-950/30">
                      <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-400">
                        Impact
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {study.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-500" />
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

          <section className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-teal-50/50 p-8 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 sm:p-10">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Recent &amp; Ongoing Work
              </p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                More Client Projects
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-gray-300">
                Software systems and digital solutions delivered or currently
                being developed for organizations across Ethiopia.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {additionalProjects.map((project) => (
                <article
                  key={project.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-600"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="text-3xl" aria-hidden>
                      {project.icon}
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-teal-700 dark:text-teal-400">
                    {project.service}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 dark:text-gray-400">
                    {project.location}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* AFS Project Section */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-xl transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:p-10">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 dark:text-cyan-400">
                  Website, Systems &amp; Org Design
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  AFS Automotive Fleet Services International PLC
                </h2>
                <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-200 dark:text-gray-300">
                  A complete engagement for AFS: we designed and built their
                  website, delivered a Car Service Management System for their
                  auto service operations, and translated their corporate
                  organogram into a structured, responsive, web-friendly layout.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Website Design",
                  "Car Service Management System",
                  "Org Structure Design",
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

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Website Design",
                  description:
                    "A modern, responsive company website that presents AFS services, brand, and facility professionally online.",
                  icon: "🌐",
                  href: "/afs",
                  cta: "View AFS Gallery",
                },
                {
                  title: "Car Service Management System",
                  description:
                    "A complete digital system to manage customers, vehicles, appointments, service history, inventory, and automated service alerts.",
                  icon: "🚗",
                  href: "/products/car-service",
                  cta: "View the Product",
                },
                {
                  title: "Organizational Structure Design",
                  description:
                    "A responsive, data-driven organogram that is easy to maintain, read on any screen, and ready to evolve as teams change.",
                  icon: "🏢",
                  href: "/afc",
                  cta: "View Organogram",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-200 dark:text-gray-300">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 hover:underline"
                  >
                    {item.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Our Approach to Every Project
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Discovery & Requirement Analysis",
                "System Architecture Planning",
                "Development & Testing",
                "Deployment & Integration",
                "Ongoing Optimization & Support",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-700 dark:bg-gray-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-gray-900 dark:text-white">
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
                  className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 dark:border-teal-900/50 dark:bg-teal-950/50 dark:text-teal-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Industries We Serve
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Healthcare",
                "Tourism & Booking Services",
                "Consulting & Advisory Firms",
                "SMEs",
                "NGOs",
                "Government Institutions",
              ].map((industry) => (
                <li key={industry} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600 dark:bg-teal-500" />
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Section */}
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
              className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700"
            >
              Start Your Project Consultation
            </Link>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

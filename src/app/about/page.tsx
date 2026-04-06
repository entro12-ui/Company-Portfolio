import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Entro Ethiopia | Software Company in Ethiopia",
  description:
    "Learn about Entro Ethiopia, a software company in Addis Ababa delivering custom software, web development, AI solutions, ERP systems, and support.",
  alternates: {
    canonical: "https://www.entroethiopia.com/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              About Entro Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              If you want to learn about Entro Ethiopia, this page explains who
              we are, what we build, and how we help organizations across Addis
              Ababa and Ethiopia grow with practical technology. Entro Ethiopia
              is a local software company delivering custom software, web
              platforms, AI solutions, ERP systems, and integrated business
              tools designed for real operational needs.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                About Entro Ethiopia: local expertise with practical delivery
              </h2>
              <p className="mb-4 text-gray-700">
                We combine software strategy, product design, development, and
                long-term support to build systems that solve measurable
                business problems. Our team focuses on solutions that are easy
                to use, scalable over time, and aligned with the realities of
                Ethiopian organizations.
              </p>
              <p className="text-gray-700">
                Instead of one-size-fits-all tools, we create platforms that
                match your workflow, reporting requirements, approval process,
                and growth plans.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What we build
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>Custom business software for operations and automation</li>
                <li>Modern websites and web applications</li>
                <li>AI-enabled tools for service delivery and decision support</li>
                <li>ERP and business systems for multi-team coordination</li>
                <li>Integrated software and hardware solutions where needed</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">
                Why organizations choose Entro Ethiopia
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li>Local understanding of business, NGO, clinic, and public-sector workflows</li>
                <li>Clear delivery process from discovery through support</li>
                <li>Practical technology choices that fit budget and scale</li>
                <li>Long-term partnership mindset instead of one-off delivery</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Industries we support
              </h2>
              <p className="mb-4 text-gray-700">
                We work with SMEs, NGOs, clinics, service businesses, and
                institutions that need better digital systems for efficiency,
                visibility, and growth.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "SMEs",
                  "NGOs",
                  "Clinics",
                  "Service Businesses",
                  "Government Projects",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Explore our services</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              See how Entro Ethiopia can support your next digital project with
              custom software, web development, AI solutions, or ERP systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/custom-software-development"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Custom Software
              </Link>
              <Link
                href="/web-development"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Web Development
              </Link>
              <Link
                href="/ai-solutions"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                AI Solutions
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Entro Ethiopia
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

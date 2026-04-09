import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Entro Ethiopia | Local Software Company in Addis Ababa",
  description:
    "Entro Ethiopia is a local software company in Addis Ababa building custom software, websites, AI and ERP systems for SMEs, NGOs, clinics and government.",
  alternates: {
    canonical: "https://www.entroethiopia.com/about",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Entro Ethiopia",
  url: "https://www.entroethiopia.com/about",
  description:
    "Learn about Entro Ethiopia, a software development company in Addis Ababa providing custom software, web development, AI solutions and ERP systems.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={aboutPageSchema} />
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
              We are a local software company based in Addis Ababa, Ethiopia.
              Entro Ethiopia designs and builds practical software solutions for
              organizations that need systems that actually work in local
              conditions, not imported complexity.
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Vision, Mission, and Our Team
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article
                id="vision"
                className="scroll-mt-28 rounded-2xl border border-teal-100 bg-teal-50/40 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-teal-800">Vision</h3>
                <p className="leading-relaxed text-gray-700">
                  To become a trusted local technology partner that helps
                  Ethiopian organizations grow through practical and dependable
                  digital solutions.
                </p>
              </article>

              <article
                id="mission"
                className="scroll-mt-28 rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-cyan-800">Mission</h3>
                <p className="leading-relaxed text-gray-700">
                  To design and deliver custom software, web, AI, and ERP
                  systems that solve real local challenges, improve operations,
                  and create measurable impact for our clients.
                </p>
              </article>

              <article
                id="our-team"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Our Team
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Our team combines product thinking, engineering, and local
                  domain knowledge to build software that is easy to use,
                  reliable in local conditions, and supported with close
                  collaboration.
                </p>
              </article>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What we do
              </h2>
              <div className="space-y-3 text-gray-700">
                {[
                  "Custom Software Development",
                  "Web Development & Web Applications",
                  "AI Solutions (including MediCare AI)",
                  "ERP & Business Management Systems",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Who we serve
              </h2>
              <div className="space-y-3 text-gray-700">
                {[
                  "SMEs (small and medium businesses)",
                  "NGOs",
                  "Clinics and Hospitals",
                  "Government institutions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-slate-800" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">
                Why local matters
              </h2>
              <p className="mb-4 text-gray-200">
                We understand Ethiopian business processes, connectivity
                challenges, and user skills. Our systems:
              </p>
              <div className="space-y-3 text-gray-200">
                {[
                  "Work with intermittent internet (offline modes where needed)",
                  "Use simple interfaces staff can learn quickly",
                  "Are priced for local budgets",
                  "Come with local support and training (in Amharic/English)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our approach
              </h2>
              <div className="space-y-4 text-gray-700">
                {[
                  "Listen first, code second - we start with your workflow, not our template",
                  "Build in phases - you see working software early, not after 6 months",
                  "Train your team - we don't just deliver and disappear",
                  "Support locally - call us, we respond",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our promise
              </h2>
              <p className="text-lg font-medium text-gray-800">
                No unnecessary complexity. No vendor lock-in. No support tickets
                that go unanswered.
              </p>
            </section>

            <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Team profiles
              </h2>
              <p className="text-gray-700">
                We will add Team Profiles here when available.
              </p>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Talk to our team</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              See how Entro Ethiopia can support your next digital project with
              custom software, web development, AI solutions, or ERP systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Talk to Our Team
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

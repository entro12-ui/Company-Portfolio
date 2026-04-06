import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Software Development in Ethiopia | Entro Ethiopia",
  description:
    "Entro Ethiopia builds custom software for SMEs, NGOs, clinics and government in Addis Ababa. Tailored web apps, business systems and automation solutions.",
  alternates: {
    canonical: "https://www.entroethiopia.com/custom-software-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Entro Ethiopia",
  },
  areaServed: {
    "@type": "Country",
    name: "Ethiopia",
  },
  description:
    "Custom software development for SMEs, NGOs, clinics and government in Ethiopia",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does custom software take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most business applications take 4-12 weeks depending on complexity. We deliver in phases so you start using core features early.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We train your team and provide documentation. Support is available after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate with accounting software, payroll, Excel, and other tools you already use.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We implement role-based access, data encryption, and can deploy on-premise or in the cloud based on your requirement.",
      },
    },
  ],
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <PageShell>
        <JsonLd data={serviceSchema} />
        <article className="px-4 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Custom software development Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Custom Software Development in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              We build software that fits your business, not the other way
              around. Entro Ethiopia designs and develops custom web
              applications, business systems, and automation tools for SMEs,
              NGOs, clinics, and government institutions in Addis Ababa and
              across Ethiopia.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What we build
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Business process automation systems",
                  "Workflow management applications",
                  "Data management dashboards",
                  "Reporting and analytics tools",
                  "Integration with existing systems like accounting, payroll, and inventory",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Why custom software?
              </h2>
              <p className="text-gray-700">
                Off-the-shelf software forces you to change your process.
                Custom software is built around your process, so your team works
                faster with fewer errors.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our process
              </h2>
              <ol className="space-y-3 text-gray-700">
                {[
                  "Discovery - we map your current workflow and pain points",
                  "Design - we design screens your team will actually use",
                  "Development - we build in iterations, you see progress weekly",
                  "Deploy & Support - we train your team and provide ongoing support",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Industries we serve</h2>
              <ul className="space-y-3 text-gray-200">
                {[
                  "SMEs",
                  "NGOs",
                  "Clinics & Hospitals",
                  "Government offices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Why choose Entro Ethiopia
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Locally developed in Addis Ababa and aligned to your context",
                  "Practical solutions, not complex technology",
                  "Training and support included",
                  "Works online and offline where needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Frequently asked questions
              </h2>
              <div className="space-y-5 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    How long does custom software take to build?
                  </h3>
                  <p>
                    Most business applications take 4-12 weeks depending on
                    complexity. We deliver in phases so you start using core
                    features early.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do you provide training?
                  </h3>
                  <p>
                    Yes. We train your team and provide documentation. Support
                    is available after launch.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can you integrate with our existing system?
                  </h3>
                  <p>
                    Yes. We integrate with accounting software, payroll, Excel,
                    and other tools you already use.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is my data secure?
                  </h3>
                  <p>
                    Yes. We implement role-based access, data encryption, and
                    can deploy on-premise or in the cloud based on your
                    requirement.
                  </p>
                </div>
              </div>
            </section>
          </div>

            <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">
              Plan your software project with Entro Ethiopia
            </h2>
            <p className="mb-6 max-w-3xl text-white/90">
              If you need a dependable partner for software design,
              development, rollout, and support, we can help you define the
              right solution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Request a Free Consultation
              </Link>
              <Link
                href="/web-development"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Web Development
              </Link>
            </div>
            </section>
          </div>
        </article>
      </PageShell>
      <JsonLd data={faqSchema} />
    </>
  );
}

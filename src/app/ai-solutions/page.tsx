import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI Solutions Company in Ethiopia | Entro Ethiopia",
  description:
    "Practical AI solutions for Ethiopian businesses: MediCare AI for clinics, automation, data insights and smart systems for SMEs and government.",
  alternates: {
    canonical: "https://www.entroethiopia.com/ai-solutions",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Solutions",
  name: "AI Solutions for Business in Ethiopia",
  description:
    "Entro Ethiopia is an AI solutions company in Ethiopia building AI-enabled tools for automation, support, analytics, and workflow improvement.",
  provider: {
    "@type": "Organization",
    name: "Entro Ethiopia",
    url: "https://www.entroethiopia.com/",
  },
  areaServed: "Ethiopia",
  url: "https://www.entroethiopia.com/ai-solutions",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need expensive infrastructure for AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our solutions run on standard servers or cloud infrastructure, and we optimize them for local conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is MediCare AI only for big hospitals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It works for small clinics, medium hospitals, and health centers.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core functions work offline. AI features require internet connection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you train staff on AI tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide full training and support.",
      },
    },
  ],
};

export default function AiSolutionsPage() {
  return (
    <>
      <PageShell>
        <JsonLd data={serviceSchema} />
        <article className="px-4 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              AI solutions company Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              AI Solutions for Business in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Practical artificial intelligence that solves real problems.
              Entro Ethiopia builds AI-powered systems for clinics, businesses,
              and organizations in Addis Ababa and Ethiopia, not experimental
              demos, but working tools.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our AI products &amp; solutions
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "MediCare AI - Healthcare management with AI features for clinics and hospitals",
                  "Data analysis and reporting automation",
                  "Document processing automation",
                  "Smart notifications (SMS/Email)",
                  "Predictive alerts",
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
                MediCare AI (featured)
              </h2>
              <p className="text-gray-700">
                MediCare AI helps clinics manage patients, appointments,
                records, and billing with AI-assisted features. It is designed
                for Ethiopian healthcare workflows and built to support daily
                operations with practical automation.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Benefits
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Reduce manual work",
                  "Faster decisions with data insights",
                  "Fewer errors in repetitive tasks",
                  "24/7 automated alerts and reminders",
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

            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Use cases</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Clinics: patient flow, appointments, records",
                  "SMEs: sales reports, inventory alerts",
                  "Service centers: service reminders",
                  "NGOs: beneficiary data management",
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
                Privacy &amp; security
              </h2>
              <p className="text-gray-700">
                Your data stays in Ethiopia. We can deploy on-premise or on a
                private cloud, with role-based permissions to protect
                sensitive business and healthcare information.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Frequently asked questions
              </h2>
              <div className="space-y-5 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do I need expensive infrastructure for AI?
                  </h3>
                  <p>
                    No. Our solutions run on standard servers or cloud
                    infrastructure, and we optimize them for local conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is MediCare AI only for big hospitals?
                  </h3>
                  <p>
                    No. It works for small clinics, medium hospitals, and
                    health centers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can AI work offline?
                  </h3>
                  <p>
                    Core functions work offline. AI features require internet
                    connection.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do you train staff on AI tools?
                  </h3>
                  <p>Yes. We provide full training and support.</p>
                </div>
              </div>
            </section>
          </div>

            <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">
              Bring AI into your operations with clarity
            </h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Entro Ethiopia can help you identify the right AI opportunities
              and turn them into practical systems your team can use.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Book a Demo
              </Link>
              <Link
                href="/erp-systems"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore ERP Systems
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

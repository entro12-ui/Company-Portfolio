import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Government Software Solutions in Ethiopia | Entro Ethiopia",
  description:
    "Custom software for government offices in Ethiopia: document management, citizen services, reporting and workflow automation.",
  alternates: {
    canonical: "https://www.entroethiopia.com/solutions-for-government",
  },
};

export default function SolutionsForGovernmentPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Solutions for Government
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Software Solutions for Government in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Digital systems for public service delivery. Entro Ethiopia
              builds secure, practical software for government offices in
              Ethiopia, including document management, citizen service portals,
              workflow automation, and reporting systems.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Solutions we provide
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Document Management System",
                  "Citizen Service Portal",
                  "Workflow Automation (approvals, routing)",
                  "Asset/Inventory Management",
                  "HR & Payroll",
                  "Custom Reporting Dashboards",
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
                Key features
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Role-based access (strict permissions)",
                  "Audit logs (who did what, when)",
                  "Amharic/English interface",
                  "On-premise deployment option",
                  "Integration with existing systems",
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
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Security</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Data stays in Ethiopia (on-premise possible)",
                  "User authentication",
                  "Encrypted data storage",
                  "Backup and recovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Implementation
              </h2>
              <p className="text-gray-700">
                We work with your IT team and provide training for staff and
                administrators. Documentation is included to support rollout and
                long-term use.
              </p>
            </section>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Frequently asked questions
              </h2>
              <div className="grid gap-6 md:grid-cols-2 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can you deploy in our data center?
                  </h3>
                  <p>Yes. On-premise deployment is available.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Does it support Amharic?
                  </h3>
                  <p>Yes. Amharic and English interface.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is there training?
                  </h3>
                  <p>Yes. Training for end users and administrators.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do you provide support?
                  </h3>
                  <p>Yes. Local support contract is available.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Plan your government system</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Contact Entro Ethiopia about secure, scalable systems for public
              sector workflows and information services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Request Government Project Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

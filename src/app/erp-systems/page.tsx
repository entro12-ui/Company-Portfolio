import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ERP Software in Ethiopia | Entro Ethiopia",
  description:
    "ERP and business management systems for SMEs, NGOs and government in Ethiopia. Inventory, HR, sales, finance in one system.",
  alternates: {
    canonical: "https://www.entroethiopia.com/erp-systems",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ERP Software",
  name: "ERP & Business Systems in Ethiopia",
  description:
    "Entro Ethiopia delivers ERP software in Ethiopia for organizations that need stronger workflows, reporting, approvals, and business control.",
  provider: {
    "@type": "Organization",
    name: "Entro Ethiopia",
    url: "https://www.entroethiopia.com/",
  },
  areaServed: "Ethiopia",
  url: "https://www.entroethiopia.com/erp-systems",
};

export default function ErpSystemsPage() {
  return (
    <PageShell>
      <JsonLd data={serviceSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              ERP software Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              ERP &amp; Business Systems in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              One system for your entire operation. Entro Ethiopia builds ERP
              and business management systems that connect your sales,
              inventory, HR, finance, and operations, built for Ethiopian
              businesses.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Modules we offer
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Inventory & Stock Management",
                  "Sales & Invoicing",
                  "HR & Payroll",
                  "Finance & Accounting",
                  "Procurement & Purchasing",
                  "Reporting & Dashboards",
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
                Why local ERP?
              </h2>
              <p className="text-gray-700">
                International ERP is expensive and complex. Our system is built
                for local business processes, tax requirements, and user skills.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Benefits
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "All data in one place (no more Excel files)",
                  "Real-time stock and sales reports",
                  "Payroll calculated automatically",
                  "User permissions (staff see only what they need)",
                  "Works online and offline",
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
              <h2 className="mb-4 text-2xl font-bold">Deployment options</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Cloud hosting (we manage)",
                  "On-premise (in your office)",
                  "Hybrid",
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
                Who uses it
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "SMEs (trading, distribution, service)",
                  "NGOs (project tracking, inventory)",
                  "Clinics (stock, billing)",
                  "Government offices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-slate-800" />
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
                    Can we start with one module?
                  </h3>
                  <p>
                    Yes. Most clients start with Inventory and Sales, then add
                    HR or Payroll later.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    How long to implement?
                  </h3>
                  <p>
                    2-6 weeks depending on modules and data migration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do you migrate our Excel data?
                  </h3>
                  <p>Yes. We migrate your existing data.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is training included?
                  </h3>
                  <p>Yes. We train admins and users.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">
              Improve business control with the right system
            </h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Speak with Entro Ethiopia about ERP software, internal systems,
              and business process improvements for your organization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Discuss ERP Requirements
              </Link>
              <Link
                href="/custom-software-development"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Custom Software
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

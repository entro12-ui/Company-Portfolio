import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ERP Software Ethiopia | Entro Ethiopia",
  description:
    "Entro Ethiopia delivers ERP software in Ethiopia for organizations that need better operations, reporting, approvals, and business control.",
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
              Entro Ethiopia provides ERP software in Ethiopia for organizations
              that need stronger process control, clearer reporting, and better
              coordination across departments. We build and tailor ERP and
              business systems that connect workflows, reduce manual work, and
              give leaders better visibility into finance, operations, service
              delivery, and performance.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Why ERP software in Ethiopia is valuable
              </h2>
              <p className="text-gray-700">
                When teams operate across multiple spreadsheets, emails, and
                isolated processes, errors and delays increase. ERP systems
                bring structure, visibility, and consistency to everyday work.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Core capabilities
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>Workflow and approval management</li>
                <li>Operational reporting and dashboards</li>
                <li>Department coordination and role-based access</li>
                <li>Document, record, and process tracking</li>
                <li>Business rules tailored to your organization</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Best use cases
              </h2>
              <p className="text-gray-700">
                ERP and business systems are especially effective for
                organizations with multiple teams, repeated approvals, complex
                reporting needs, inventory or service coordination, and
                expanding operational scale.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Implementation with long-term value</h2>
              <p className="text-gray-200">
                We plan ERP systems around adoption, usability, and future
                growth so your investment supports stronger operations over
                time, not just a short-term software rollout.
              </p>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Improve business control with the right system</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Speak with Entro Ethiopia about ERP software, internal systems,
              and business process improvements for your organization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Contact Entro Ethiopia
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

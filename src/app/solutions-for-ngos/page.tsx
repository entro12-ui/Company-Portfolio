import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Solutions for NGOs in Ethiopia | Entro Ethiopia",
  description:
    "Custom software for NGOs in Ethiopia: beneficiary management, project tracking, reporting and donor reporting systems.",
  alternates: {
    canonical: "https://www.entroethiopia.com/solutions-for-ngos",
  },
};

export default function SolutionsForNgosPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Solutions for NGOs
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Software Solutions for NGOs in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Manage projects, beneficiaries, and reports in one system. Entro
              Ethiopia builds custom software for NGOs in Ethiopia to track
              projects, beneficiaries, activities, inventory, and generate donor
              reports without complex international systems.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                NGO challenges we solve
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Beneficiary registration and tracking",
                  "Project activity monitoring",
                  "Stock/inventory distribution",
                  "Donor reporting (automatic reports)",
                  "Multiple project management",
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
                System features
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Beneficiary database with photos/ID",
                  "Activity logging by field staff (mobile friendly)",
                  "Distribution tracking",
                  "Custom report generator (export to Excel/PDF)",
                  "User roles (field staff, manager, admin)",
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
              <h2 className="mb-4 text-2xl font-bold">Why NGOs work with us</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "We understand field conditions (offline capable)",
                  "Reports match donor formats",
                  "Local language support",
                  "Training for field teams",
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
                Data security
              </h2>
              <p className="text-gray-700">
                Beneficiary data is protected with role-based access control,
                and the system can be deployed on your server if required.
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
                    Can field staff use it on phone?
                  </h3>
                  <p>
                    Yes. Mobile-friendly interface for data collection.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can we export for donors?
                  </h3>
                  <p>
                    Yes. One-click Excel/PDF reports filtered by
                    project/date/location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Does it work offline?
                  </h3>
                  <p>
                    Yes. Field data saves locally and syncs when online.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Discuss your NGO workflow needs</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Contact Entro Ethiopia for systems that improve visibility,
              coordination, and service delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Discuss NGO System Requirements
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

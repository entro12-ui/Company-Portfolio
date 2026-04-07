import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Solutions for SMEs in Ethiopia | Entro Ethiopia",
  description:
    "Affordable software for SMEs in Ethiopia: inventory, sales, invoicing, HR and payroll systems built for local businesses in Addis Ababa.",
  alternates: {
    canonical: "https://www.entroethiopia.com/solutions-for-smes",
  },
};

export default function SolutionsForSmesPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Solutions for SMEs
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Software Solutions for SMEs in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Stop using Excel. Start using a system built for your business.
              Entro Ethiopia builds affordable software for small and medium
              businesses in Addis Ababa and Ethiopia, including inventory,
              sales, invoicing, HR, and payroll that fits your budget and staff
              skills.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Common SME problems we solve
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  `"I don't know my real stock" -> Inventory system with alerts`,
                  `"Invoicing takes too long" -> One-click invoices and receipts`,
                  `"Payroll is manual" -> Automated payroll and payslips`,
                  `"I have data in 5 Excel files" -> One dashboard, all reports`,
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
                Solutions for SMEs
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Inventory & Sales System",
                  "Invoicing & Billing",
                  "HR & Payroll",
                  "Simple POS (Point of Sale)",
                  "Website + Basic e-commerce",
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
              <h2 className="mb-4 text-2xl font-bold">Why SMEs choose us</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Affordable (pay once or monthly)",
                  "Simple (your staff can use it after 1 day training)",
                  "Local support (we answer the phone)",
                  "No expensive licenses",
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
                Pricing approach
              </h2>
              <p className="text-gray-700">
                We start with what you need now. Add modules later as you grow.
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
                    I&apos;m a small shop, do I need software?
                  </h3>
                  <p>
                    If you struggle with stock, sales tracking, or invoices,
                    yes. Our systems start simple.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can my staff use it?
                  </h3>
                  <p>
                    Yes. We design for users who are not IT experts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    What if internet is down?
                  </h3>
                  <p>
                    Core functions work offline and sync when internet returns.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Plan the right SME solution</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Talk to Entro Ethiopia about digital tools that support growth,
              visibility, and day-to-day efficiency.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Get SME Solution Demo
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Clinic Management Software in Ethiopia | MediCare AI",
  description:
    "MediCare AI: Clinic and hospital management software in Ethiopia. Patient records, appointments, billing and AI features for clinics.",
  alternates: {
    canonical: "https://www.entroethiopia.com/solutions-for-clinics",
  },
};

export default function SolutionsForClinicsPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Solutions for Clinics
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Clinic Management Software in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Run your clinic efficiently with MediCare AI. MediCare AI by
              Entro Ethiopia is a clinic and hospital management system built
              for Ethiopian healthcare facilities, with patient records,
              appointments, billing, inventory, and AI-assisted features.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Modules
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Patient Registration & Records",
                  "Appointments & Queue Management",
                  "Billing & Invoicing",
                  "Pharmacy/Inventory",
                  "Lab Results",
                  "Reports & Analytics",
                  "AI Features (appointment predictions, alerts)",
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
                Benefits for clinics
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Faster patient service (less paper)",
                  "Accurate billing",
                  "Stock alerts (no drug stockouts)",
                  "Patient history in seconds",
                  "Daily/Monthly reports",
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
              <h2 className="mb-4 text-2xl font-bold">AI features</h2>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Appointment no-show prediction",
                  "Automated SMS reminders to patients",
                  "Inventory reorder alerts",
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
                Who uses MediCare AI
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Private clinics",
                  "Health centers",
                  "Medium hospitals",
                  "Specialist clinics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-slate-800" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Data privacy
              </h2>
              <p className="text-gray-700">
                Patient data is encrypted with role-based access for doctors,
                nurses, and reception staff. The system can also run on-premise
                when needed.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Frequently asked questions
              </h2>
              <div className="space-y-5 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do I need internet all the time?
                  </h3>
                  <p>
                    No. Core functions work offline. Syncs when online.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is it hard to learn?
                  </h3>
                  <p>
                    No. Reception staff learn in 1 day. We provide training.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can it print receipts?
                  </h3>
                  <p>
                    Yes. It prints receipts, prescriptions, and lab requests.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Is my patient data safe?
                  </h3>
                  <p>
                    Yes. Only authorized staff can access it. Backup is
                    included.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">See what fits your clinic</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Speak with Entro Ethiopia about digital solutions that improve
              patient flow, reporting, and day-to-day clinic operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Book MediCare AI Demo
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

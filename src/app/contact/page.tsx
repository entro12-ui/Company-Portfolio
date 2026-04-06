import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Entro Ethiopia | Software & Technology Consultation",
  description:
    "Contact Entro Ethiopia for custom software, web development, AI solutions, and ERP systems in Addis Ababa and across Ethiopia today.",
  alternates: {
    canonical: "https://www.entroethiopia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Contact Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact Entro Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Use this page to contact Entro Ethiopia about custom software,
              websites, AI solutions, ERP systems, or digital transformation
              projects. We work with SMEs, NGOs, clinics, and institutions in
              Addis Ababa and across Ethiopia, and we are ready to discuss your
              goals, timeline, and technical requirements.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                How to contact Entro Ethiopia
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href="tel:+251979113638"
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
                    Phone
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    +251 979 113 638
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Call us for urgent project discussions and consultations.
                  </p>
                </a>
                <a
                  href="mailto:entro12@entroethiopia.com"
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
                    Email
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    entro12@entroethiopia.com
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Share your requirements and we will respond with next steps.
                  </p>
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Office and business details
                </h2>
                <p className="text-gray-700">
                  Megnagna, Hibret Bldg, Office No. H7-702, Addis Ababa,
                  Ethiopia
                </p>
                <p className="mt-3 text-gray-700">TIN: 0095875999</p>
              </div>
            </section>

            <aside className="space-y-8">
              <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
                <h2 className="mb-4 text-2xl font-bold">What to include in your enquiry</h2>
                <ul className="space-y-3 text-gray-200">
                  <li>Your organization and industry</li>
                  <li>The problem you want to solve</li>
                  <li>Required features or systems</li>
                  <li>Timeline and budget expectations</li>
                  <li>Preferred contact method</li>
                </ul>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Explore related services
                </h2>
                <div className="space-y-3">
                  <Link
                    href="/custom-software-development"
                    className="block rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    href="/web-development"
                    className="block rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/ai-solutions"
                    className="block rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    AI Solutions
                  </Link>
                  <Link
                    href="/erp-systems"
                    className="block rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                  >
                    ERP Systems
                  </Link>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

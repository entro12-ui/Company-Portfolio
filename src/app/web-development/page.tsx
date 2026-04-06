import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Web Development Company in Ethiopia | Entro Ethiopia",
  description:
    "Professional website and web app development in Addis Ababa. Fast, mobile-friendly websites for SMEs, NGOs, clinics and government.",
  alternates: {
    canonical: "https://www.entroethiopia.com/web-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  name: "Web Development Company in Ethiopia",
  description:
    "Entro Ethiopia is a web development company in Ethiopia building business websites, portals, and web applications for growth and visibility.",
  provider: {
    "@type": "Organization",
    name: "Entro Ethiopia",
    url: "https://www.entroethiopia.com/",
  },
  areaServed: "Ethiopia",
  url: "https://www.entroethiopia.com/web-development",
};

export default function WebDevelopmentPage() {
  return (
    <PageShell>
      <JsonLd data={serviceSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Web development company Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Web Development Company in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Entro Ethiopia is a web development company in Ethiopia creating
              fast, modern, and conversion-focused websites for businesses,
              NGOs, clinics, and institutions. We build websites and web
              applications that strengthen credibility, improve user experience,
              and help organizations generate enquiries, manage services, and
              support growth online.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Why choose a web development company in Ethiopia
              </h2>
              <p className="text-gray-700">
                A local development partner understands market context,
                communication needs, audience expectations, and the practical
                goals behind your digital presence. That leads to better
                structure, better messaging, and better results.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What we deliver
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Corporate websites and landing pages",
                  "Service websites for clinics, NGOs, and SMEs",
                  "Customer portals and internal web platforms",
                  "Responsive user experiences for mobile and desktop",
                  "SEO-ready technical structure and content layout",
                ].map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:bg-teal-50"
                  >
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition duration-300 group-hover:bg-teal-700 group-hover:text-white">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                What your website should achieve
              </h2>
              <p className="text-gray-700">
                A strong website should clearly explain your offer, build trust,
                guide users to action, and support marketing, operations, or
                customer service. We design around those outcomes from day one.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Build for visibility and growth</h2>
              <p className="text-gray-200">
                From homepage messaging to technical implementation, our web
                development work supports search visibility, credibility, and
                conversions without sacrificing speed or usability.
              </p>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Start your next website project</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Talk to Entro Ethiopia about a new website, a redesign, or a
              business web application that supports your goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Request a Consultation
              </Link>
              <Link
                href="/ai-solutions"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore AI Solutions
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

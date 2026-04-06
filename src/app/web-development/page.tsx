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
              Modern websites and web applications that work on any device.
              Entro Ethiopia designs and develops professional websites and web
              apps for businesses and organizations in Addis Ababa and Ethiopia.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Services
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Business websites",
                  "E-commerce websites",
                  "Web applications (portals, dashboards)",
                  "Website redesign and optimization",
                  "Domain, hosting and maintenance",
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
                Features of our websites
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Mobile-friendly (works on phone, tablet, desktop)",
                  "Fast loading",
                  "Easy to update (admin panel)",
                  "Secure (SSL, backups)",
                  "SEO ready structure",
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

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Technologies
              </h2>
              <p className="text-gray-700">
                We build with modern frameworks like React that are fast,
                scalable, and well suited for professional websites and web
                applications.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Our process</h2>
              <ol className="space-y-3 text-slate-200">
                {[
                  "Plan - we define goals, pages, content",
                  "Design - you approve the look before coding",
                  "Develop - we build and test",
                  "Launch & Train - we launch and show you how to update",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Who we work with
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "SMEs (company websites, service pages)",
                  "NGOs (project sites, donation pages)",
                  "Clinics (appointment pages, service info)",
                  "Government (information portals)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-600" />
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
                    How much does a website cost in Ethiopia?
                  </h3>
                  <p>
                    Depends on pages and features. Basic business website starts
                    from [TADE PRICE], e-commerce and web apps are quoted after
                    requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Can I update the website myself?
                  </h3>
                  <p>
                    Yes. We provide an easy admin panel to change text, images,
                    and add pages.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Do you provide hosting?
                  </h3>
                  <p>Yes. We can host, or deploy on your server.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Will my website appear on Google?
                  </h3>
                  <p>
                    Yes. We build with SEO structure including titles, headings,
                    and sitemap support, and we can submit the site to Google.
                  </p>
                </div>
              </div>
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
                Get a Website Quote
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

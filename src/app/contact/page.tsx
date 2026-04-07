import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Entro Ethiopia | Get a Quote for Software Development",
  description:
    "Contact Entro Ethiopia in Addis Ababa for custom software, web development, AI and ERP systems. Call, WhatsApp or fill the form.",
  alternates: {
    canonical: "https://www.entroethiopia.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Entro Ethiopia",
  url: "https://www.entroethiopia.com/contact",
};

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={contactPageSchema} />
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
              Let&apos;s discuss your software requirements.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactInquiryForm />

            <aside className="space-y-8">
              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Get in touch
                </h2>
                <div className="space-y-5 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                      Phone
                    </p>
                    <a
                      href="tel:+251979113638"
                      className="mt-1 inline-block text-lg font-bold text-gray-900 hover:text-teal-700"
                    >
                      +251 979 113 638
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                      Email
                    </p>
                    <a
                      href="mailto:entro12@entroethiopia.com"
                      className="mt-1 inline-block text-lg font-bold text-gray-900 hover:text-teal-700"
                    >
                      entro12@entroethiopia.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                      Address
                    </p>
                    <p className="mt-1 text-gray-700">Addis Ababa, Ethiopia</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                      Hours
                    </p>
                    <p className="mt-1 text-gray-700">
                      Monday - Friday, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">What happens next</h2>
                <ol className="space-y-4 text-gray-200">
                  {[
                    "We contact you within 24 hours",
                    "We schedule a free 30-minute consultation",
                    "You get a clear proposal (no hidden costs)",
                  ].map((item, index) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Alternative
                </h2>
                <p className="mb-4 text-gray-700">
                  Prefer a direct chat? Reach us on WhatsApp for a quick response.
                </p>
                <a
                  href="https://wa.me/251979113638"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  WhatsApp us directly
                </a>
              </section>
            </aside>
          </div>

          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-8 py-6">
              <h2 className="text-2xl font-bold text-gray-900">Location</h2>
              <p className="mt-2 text-gray-600">
                Addis Ababa, Ethiopia
              </p>
            </div>
            <iframe
              title="Map of Addis Ababa, Ethiopia"
              src="https://maps.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&z=13&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Explore related services
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/custom-software-development"
                className="rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Custom Software Development
              </Link>
              <Link
                href="/web-development"
                className="rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Web Development
              </Link>
              <Link
                href="/ai-solutions"
                className="rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                AI Solutions
              </Link>
              <Link
                href="/erp-systems"
                className="rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                ERP System
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

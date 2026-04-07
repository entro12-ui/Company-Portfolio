import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | Entro Ethiopia",
  description:
    "Read the Privacy Policy for Entro Ethiopia covering how we collect, use, store, and protect personal and business information.",
  alternates: {
    canonical: "https://www.entroethiopia.com/privacy-policy",
  },
};

const bulletClassName = "flex items-start gap-3 leading-relaxed";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Legal
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
              This Privacy Policy explains how Entro Ethiopia collects, uses,
              stores, and protects personal and business information through its
              website, enquiries, and service interactions.
            </p>
          </header>

          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Information We Collect
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Name and organization details",
                  "Phone number and email address",
                  "Service interests and enquiry information",
                  "Other business details you choose to share with us",
                ].map((item) => (
                  <li key={item} className={bulletClassName}>
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
                2. How We Use Information
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "To respond to enquiries and service requests",
                  "To prepare proposals, consultations, and project discussions",
                  "To improve our website, communication, and service delivery",
                  "To maintain internal records related to legitimate business enquiries",
                ].map((item) => (
                  <li key={item} className={bulletClassName}>
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. Cookies and Analytics
              </h2>
              <p className="leading-8 text-gray-700">
                Our website may use cookies, analytics tools, and tracking
                technologies such as Google services and Meta technologies to
                understand website usage, improve performance, and support
                marketing measurement. These tools may collect technical
                information such as browser type, device information, and page
                interaction data.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Data Sharing
              </h2>
              <p className="leading-8 text-gray-700">
                We do not sell your personal information. We may share limited
                information with trusted service providers or technical partners
                where necessary to operate our website, manage communication, or
                deliver requested services, subject to reasonable confidentiality
                and security expectations.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Data Security
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Reasonable technical safeguards against unauthorized access",
                  "Organizational measures to reduce misuse or disclosure",
                  "Controlled handling of business enquiry information",
                  "Acknowledgement that no online system can be guaranteed fully secure",
                ].map((item) => (
                  <li key={item} className={bulletClassName}>
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-slate-800" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Data Retention
              </h2>
              <p className="leading-8 text-gray-700">
                We retain enquiry and communication data only for as long as is
                reasonably necessary for business follow-up, legal compliance,
                internal recordkeeping, or service delivery purposes.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Your Rights
              </h2>
              <p className="leading-8 text-gray-700">
                You may contact us to request updates or corrections to
                information you have submitted to us, subject to applicable
                legal, operational, or recordkeeping requirements.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Contact
              </h2>
              <p className="leading-8 text-gray-700">
                For privacy-related questions, please contact Entro Ethiopia at{" "}
                <span className="font-medium text-gray-900">
                  entro12@entroethiopia.com
                </span>{" "}
                or call{" "}
                <span className="font-medium text-gray-900">
                  +251 979 113 638
                </span>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

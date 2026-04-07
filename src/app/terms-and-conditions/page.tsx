import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms and Conditions | Entro Ethiopia",
  description:
    "Read the Terms and Conditions for using the Entro Ethiopia website, content, enquiries, and related communications.",
  alternates: {
    canonical: "https://www.entroethiopia.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Legal
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
              These Terms and Conditions govern the use of the Entro Ethiopia
              website and related communications, enquiries, and informational
              content.
            </p>
          </header>

          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Website Use
              </h2>
              <p className="leading-8 text-gray-700">
                By accessing this website, you agree to use it only for lawful
                purposes and in a way that does not interfere with the website,
                its content, its availability, or the rights of other users.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Informational Content
              </h2>
              <p className="leading-8 text-gray-700">
                The content on this website is provided for general information
                about Entro Ethiopia, its services, and its areas of expertise.
                While we aim to keep the content accurate and up to date, we do
                not guarantee that all information is complete, current, or free
                from errors at all times.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. No Automatic Client Relationship
              </h2>
              <p className="leading-8 text-gray-700">
                Use of this website or submission of an enquiry does not by
                itself create a formal client relationship, service agreement,
                or contractual commitment unless separately agreed in writing.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Intellectual Property
              </h2>
              <p className="leading-8 text-gray-700">
                Unless otherwise stated, the website content, branding, design,
                text, graphics, and original materials are the property of
                Entro Ethiopia or are used with appropriate permission. You may
                not copy, reproduce, modify, or distribute substantial portions
                of the site content for commercial purposes without prior
                written permission.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. External Links
              </h2>
              <p className="leading-8 text-gray-700">
                This website may include links to third-party platforms or
                services. Entro Ethiopia is not responsible for the content,
                security, policies, or practices of external websites.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Limitation of Liability
              </h2>
              <p className="leading-8 text-gray-700">
                Entro Ethiopia is not liable for direct or indirect losses
                arising solely from use of this website, temporary unavailability,
                technical issues, or reliance on general informational content,
                except where liability cannot be excluded by applicable law.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Changes to the Website or Terms
              </h2>
              <p className="leading-8 text-gray-700">
                We may update or modify website content, services, navigation,
                or these Terms and Conditions at any time without prior notice.
                Continued use of the website indicates acceptance of the updated
                terms.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Governing Principles
              </h2>
              <p className="leading-8 text-gray-700">
                These Terms and Conditions are intended to be interpreted in a
                reasonable and commercially practical way consistent with the
                laws and regulatory environment applicable to operations in
                Ethiopia.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. Contact
              </h2>
              <p className="leading-8 text-gray-700">
                For questions regarding these Terms and Conditions, please
                contact Entro Ethiopia at `entro12@entroethiopia.com` or
                `+251 979 113 638`.
              </p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

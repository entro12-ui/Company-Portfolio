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
          {/* Header */}
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
              Legal
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These Terms and Conditions govern the use of the Entro Ethiopia
              website and related communications, enquiries, and informational
              content.
            </p>
          </header>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                1. Website Use
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                By accessing this website, you agree to use it only for lawful
                purposes and in a way that does not interfere with the website,
                its content, its availability, or the rights of other users.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                2. Informational Content
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                The content on this website is provided for general information
                about Entro Ethiopia, its services, and its areas of expertise.
                While we aim to keep the content accurate and up to date, we do
                not guarantee that all information is complete, current, or free
                from errors at all times.
              </p>
            </section>

            {/* Section 3 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                3. No Automatic Client Relationship
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                Use of this website or submission of an enquiry does not by
                itself create a formal client relationship, service agreement,
                or contractual commitment unless separately agreed in writing.
              </p>
            </section>

            {/* Section 4 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                4. Intellectual Property
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                Unless otherwise stated, the website content, branding, design,
                text, graphics, and original materials are the property of Entro
                Ethiopia or are used with appropriate permission. You may not
                copy, reproduce, modify, or distribute substantial portions of
                the site content for commercial purposes without prior written
                permission.
              </p>
            </section>

            {/* Section 5 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                5. External Links
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                This website may include links to third-party platforms or
                services. Entro Ethiopia is not responsible for the content,
                security, policies, or practices of external websites.
              </p>
            </section>

            {/* Section 6 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                6. Limitation of Liability
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                Entro Ethiopia is not liable for direct or indirect losses
                arising solely from use of this website, temporary
                unavailability, technical issues, or reliance on general
                informational content, except where liability cannot be excluded
                by applicable law.
              </p>
            </section>

            {/* Section 7 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                7. Changes to the Website or Terms
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                We may update or modify website content, services, navigation,
                or these Terms and Conditions at any time without prior notice.
                Continued use of the website indicates acceptance of the updated
                terms.
              </p>
            </section>

            {/* Section 8 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                8. Governing Principles
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                These Terms and Conditions are intended to be interpreted in a
                reasonable and commercially practical way consistent with the
                laws and regulatory environment applicable to operations in
                Ethiopia.
              </p>
            </section>

            {/* Section 9 */}
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                9. Contact
              </h2>
              <p className="leading-8 text-gray-700 dark:text-gray-300">
                For questions regarding these Terms and Conditions, please
                contact Entro Ethiopia at{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  entro12@entroethiopia.com
                </span>{" "}
                or
                <span className="font-medium text-gray-900 dark:text-white">
                  {" "}
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

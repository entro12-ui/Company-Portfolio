import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI Solutions Company Ethiopia | Entro Ethiopia",
  description:
    "Entro Ethiopia is an AI solutions company in Ethiopia building practical AI tools, assistants, automation, and decision support systems.",
  alternates: {
    canonical: "https://www.entroethiopia.com/ai-solutions",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Solutions",
  name: "AI Solutions for Business in Ethiopia",
  description:
    "Entro Ethiopia is an AI solutions company in Ethiopia building AI-enabled tools for automation, support, analytics, and workflow improvement.",
  provider: {
    "@type": "Organization",
    name: "Entro Ethiopia",
    url: "https://www.entroethiopia.com/",
  },
  areaServed: "Ethiopia",
  url: "https://www.entroethiopia.com/ai-solutions",
};

export default function AiSolutionsPage() {
  return (
    <PageShell>
      <JsonLd data={serviceSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              AI solutions company Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              AI Solutions for Business in Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              Entro Ethiopia is an AI solutions company in Ethiopia helping
              organizations apply artificial intelligence in practical ways. We
              build AI-enabled tools for automation, decision support, service
              workflows, and customer interaction so businesses can reduce
              manual work, improve response quality, and make faster,
              data-informed decisions.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Why work with an AI solutions company in Ethiopia
              </h2>
              <p className="text-gray-700">
                Successful AI projects start with clear business problems. We
                focus on use cases that create operational value, not just
                experimentation, and we adapt solutions to the needs of local
                teams and service environments.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                AI use cases we support
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>AI assistants and chatbots</li>
                <li>Knowledge search and internal support tools</li>
                <li>Workflow automation and document handling</li>
                <li>Decision support for specialized operations</li>
                <li>AI features inside custom software platforms</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our implementation approach
              </h2>
              <p className="text-gray-700">
                We begin with process analysis, define measurable outcomes, and
                build AI features around quality, usability, and business
                control. This keeps the solution practical, safe, and easier to
                adopt across teams.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">Best fit for AI projects</h2>
              <p className="mb-4 text-gray-200">
                AI solutions are especially valuable where teams manage high
                information volume, repeated customer questions, approvals,
                analysis, or complex service workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Healthcare", "SMEs", "NGOs", "Service teams", "Operations"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">Bring AI into your operations with clarity</h2>
            <p className="mb-6 max-w-3xl text-white/90">
              Entro Ethiopia can help you identify the right AI opportunities
              and turn them into practical systems your team can use.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Talk to Our Team
              </Link>
              <Link
                href="/erp-systems"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore ERP Systems
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Team | Entro Ethiopia",
  description:
    "Meet the team behind Entro Ethiopia and our approach to delivering local-first software products.",
};

export default function OurTeamPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Team
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Our team combines product thinking, engineering, and local domain
              knowledge to build software that is easy to use, reliable in local
              conditions, and supported with close collaboration.
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

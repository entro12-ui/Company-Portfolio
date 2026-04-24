import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.entroethiopia.com/vision",
  },
  title: "Vision | Entro Ethiopia",
  description:
    "Learn the vision of Entro Ethiopia and our long-term direction for digital transformation.",
};

export default function VisionPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-white shadow-xl sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Our Vision
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              To become a trusted local technology partner that helps Ethiopian
              organizations grow through practical and dependable digital
              solutions.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

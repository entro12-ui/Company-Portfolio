import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mission | Entro Ethiopia",
  description:
    "Explore the mission of Entro Ethiopia and how we deliver practical software solutions.",
};

export default function MissionPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-8 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Mission
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              To design and deliver custom software, web, AI, and ERP systems
              that solve real local challenges, improve operations, and create
              measurable impact for our clients.
            </p>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

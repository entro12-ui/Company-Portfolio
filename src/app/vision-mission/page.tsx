import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.entroethiopia.com/vision-mission",
  },
  title: "Vision & Mission | Entro Ethiopia",
  description:
    "Explore Entro Ethiopia's vision and mission for practical, scalable, and locally relevant technology solutions.",
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 sm:pt-28">
        <article className="px-4 pb-8 sm:pb-10">
          <div className="mx-auto max-w-5xl">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-white shadow-xl sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                About Entro Ethiopia
              </p>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
                Vision &amp; Mission
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
                Our direction and purpose are focused on creating practical
                impact through local-first software and digital systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Practical", "Scalable", "Local-first"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h2 className="mb-3 text-2xl font-semibold text-teal-800">
                  Vision
                </h2>
                <p className="leading-relaxed text-gray-700">
                  To become a trusted local technology partner that helps
                  Ethiopian organizations grow through practical and dependable
                  digital solutions.
                </p>
              </section>

              <section className="rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h2 className="mb-3 text-2xl font-semibold text-cyan-800">
                  Mission
                </h2>
                <p className="leading-relaxed text-gray-700">
                  To design and deliver custom software, web, AI, and ERP
                  systems that solve real local challenges, improve operations,
                  and create measurable impact for our clients.
                </p>
              </section>
            </div>

            <section className="mt-8 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
              <h2 className="mb-3 text-3xl font-bold">Work with our team</h2>
              <p className="mb-6 text-white/90">
                Let&apos;s design practical software solutions aligned with your
                business goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                Talk to Our Team
              </Link>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/content/company";

const callAgenda = [
  "We listen to the process you want to fix — no pitch deck",
  "We tell you honestly whether software is the right answer",
  "You leave with a rough scope, timeline and price range",
];

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines-invert absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-teal-500/22 blur-[130px]" />
        <div className="animate-aurora animation-delay-2000 absolute -bottom-40 right-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-600/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Free consultation
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
            Tell us what is slowing your team down.
            <span className="block bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              We will tell you what it takes to fix it.
            </span>
          </h2>

          <ul className="mt-8 space-y-3.5">
            {callAgenda.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-7 text-slate-300"
              >
                <span
                  className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400/15"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-teal-300"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_44px_-18px_rgba(20,184,166,0.95)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book your consultation
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-white/[0.12]"
            >
              <Phone className="h-4 w-4 text-teal-300" aria-hidden="true" />
              Call {company.phone}
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Typical reply time under two hours during working days.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-7 backdrop-blur-xl sm:p-8">
            <h3 className="text-lg font-bold text-white">
              Reach us directly
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Prefer to skip the form? Every one of these reaches the team that
              would actually work on your project.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={company.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-teal-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/15">
                  <Phone className="h-4 w-4 text-teal-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Phone
                  </span>
                  <span className="block truncate text-sm font-semibold text-white">
                    {company.phone}
                  </span>
                </span>
              </a>

              <a
                href={company.emailHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-teal-400/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/15">
                  <Mail className="h-4 w-4 text-teal-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <span className="block truncate text-sm font-semibold text-white">
                    {company.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/15">
                  <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Office
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {company.address}
                  </span>
                  <span className="block text-xs text-slate-400">
                    {company.city}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/15">
                  <Clock className="h-4 w-4 text-teal-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Support
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    24/7 for existing clients
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines-invert absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-500/18 blur-[130px]" />
        <div className="animate-aurora animation-delay-2000 absolute -bottom-48 right-1/4 h-[24rem] w-[24rem] rounded-full bg-cyan-600/18 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-teal-300"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>

        {description ? (
          <div className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </div>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

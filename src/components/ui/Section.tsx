import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Tone = "light" | "dark";

export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const ring =
    tone === "dark"
      ? "border-white/15 bg-white/[0.06] text-teal-300"
      : "border-teal-600/20 bg-teal-50 text-teal-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-teal-300";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur ${ring} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className = "",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  align?: "center" | "left";
  className?: string;
  action?: ReactNode;
}) {
  const titleColor =
    tone === "dark" ? "text-white" : "text-slate-900 dark:text-white";
  const descColor =
    tone === "dark"
      ? "text-slate-300"
      : "text-slate-600 dark:text-slate-400";

  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "text-left items-start";

  return (
    <div
      className={
        action
          ? `flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`
          : className
      }
    >
      <Reveal className={`flex flex-col gap-4 ${alignment}`}>
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <h2
          className={`text-balance text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`max-w-2xl text-base leading-7 sm:text-lg ${descColor}`}>
            {description}
          </p>
        ) : null}
      </Reveal>
      {action ? <Reveal delay={120} className="shrink-0">{action}</Reveal> : null}
    </div>
  );
}

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>{children}</div>
    </section>
  );
}

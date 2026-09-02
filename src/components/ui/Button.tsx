import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-teal-500 via-teal-500 to-cyan-600 text-white shadow-[0_14px_34px_-14px_rgba(13,148,136,0.9)] hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-16px_rgba(13,148,136,0.95)]",
  secondary:
    "border border-slate-300/80 bg-white/85 text-slate-900 backdrop-blur hover:-translate-y-0.5 hover:border-teal-400 hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-teal-400/50 dark:hover:bg-white/[0.12]",
  ghost:
    "text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300",
  inverse:
    "bg-white text-slate-900 shadow-[0_14px_34px_-16px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 hover:bg-slate-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base sm:px-8 sm:py-4",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  external = false,
}: CtaButtonProps) {
  const classes = buttonStyles({ variant, size, className });
  const content = (
    <>
      {children}
      {withArrow ? <ArrowIcon /> : null}
    </>
  );

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import {
  company,
  companyLinks,
  industryLinks,
  productLinks,
  serviceLinks,
} from "@/content/company";

type NavLinkItem = {
  href: string;
  label: string;
  description?: string;
};

type NavGroup = {
  label: string;
  items: readonly NavLinkItem[];
  columns: 1 | 2;
  footer?: { href: string; label: string };
};

const navGroups: NavGroup[] = [
  {
    label: "Services",
    items: serviceLinks,
    columns: 1,
    footer: { href: "/contact", label: "Discuss a project" },
  },
  {
    label: "Products",
    items: productLinks,
    columns: 2,
    footer: { href: "/portfolio", label: "See them in action" },
  },
  {
    label: "Industries",
    items: industryLinks,
    columns: 1,
  },
  {
    label: "Company",
    items: companyLinks,
    columns: 1,
  },
];

function DesktopDropdown({ group }: { group: NavGroup }) {
  const pathname = usePathname();
  const isActive = group.items.some((item) => pathname === item.href);

  return (
    <div className="group relative">
      <button
        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "text-teal-700 dark:text-teal-300"
            : "text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-white"
        }`}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
          aria-hidden="true"
        />
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div
          className={`translate-y-2 rounded-2xl border border-slate-200/80 bg-white/95 p-2.5 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0 dark:border-white/10 dark:bg-ink-900/95 ${
            group.columns === 2 ? "w-[38rem]" : "w-[22rem]"
          }`}
        >
          <div
            className={`grid gap-1 ${group.columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/item rounded-xl px-3.5 py-3 transition-colors hover:bg-teal-50 dark:hover:bg-white/[0.06]"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-teal-600 opacity-0 transition-all duration-200 group-hover/item:opacity-100 dark:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                {item.description ? (
                  <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>

          {group.footer ? (
            <Link
              href={group.footer.href}
              className="mt-1 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 dark:bg-white/[0.04] dark:text-teal-300 dark:hover:bg-white/[0.08]"
            >
              {group.footer.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-1 dark:border-white/10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-slate-900 dark:text-white"
        aria-expanded={isOpen}
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 pb-3">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="block rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden border-b border-white/10 bg-ink-950 text-white lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
          <div className="flex items-center gap-6 text-slate-300">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
              {company.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
              {company.city}
            </span>
          </div>
          <p className="flex items-center gap-2 font-medium text-slate-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
            </span>
            Accepting new projects for this quarter
          </p>
        </div>
      </div>

      {/* Main bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/85"
            : "border-b border-transparent bg-white/95 backdrop-blur-sm dark:bg-ink-950/95"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 dark:ring-white/15">
              <Image
                src="/logo.png"
                alt="Entro Ethiopia"
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
                quality={100}
                unoptimized
                priority
              />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[15px] font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                Entro Ethiopia
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-teal-700 dark:text-teal-400">
                Software · Web · AI
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-teal-700 dark:text-teal-300"
                  : "text-slate-700 hover:text-teal-700 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              Home
            </Link>
            {navGroups.map((group) => (
              <DesktopDropdown key={group.label} group={group} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-teal-400 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-teal-400/50 dark:hover:text-white"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <Link
              href="/contact"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(13,148,136,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgba(13,148,136,0.95)] sm:inline-flex"
            >
              Start a Project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors dark:border-white/10 dark:text-white lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-full overflow-y-auto border-b border-slate-200 bg-white px-5 pb-8 pt-4 shadow-2xl transition-all duration-300 dark:border-white/10 dark:bg-ink-950 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block border-b border-slate-200 py-3.5 text-base font-semibold text-slate-900 dark:border-white/10 dark:text-white"
          >
            Home
          </Link>
          {navGroups.map((group) => (
            <MobileAccordion
              key={group.label}
              group={group}
              onNavigate={() => setIsMenuOpen(false)}
            />
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-3.5 text-sm font-semibold text-white"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="mt-5 grid gap-2 text-sm">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-slate-700 dark:bg-white/[0.04] dark:text-slate-300"
            >
              <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-slate-700 dark:bg-white/[0.04] dark:text-slate-300"
            >
              <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

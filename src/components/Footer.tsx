import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import {
  company,
  companyLinks,
  industryLinks,
  productLinks,
  serviceLinks,
} from "@/content/company";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/business-card", label: "Business Card" },
];

const socials = [
  {
    href: company.socials.facebook,
    label: "Facebook",
    icon: <FaFacebookF className="h-4 w-4" />,
  },
  {
    href: company.socials.instagram,
    label: "Instagram",
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    href: company.socials.tiktok,
    label: "TikTok",
    icon: <FaTiktok className="h-4 w-4" />,
  },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-ink-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-teal-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Closing CTA */}
        <div className="flex flex-col items-center gap-6 border-b border-white/10 py-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build something your team will actually use.
            </h2>
            <p className="mt-2 text-[15px] text-slate-400">
              Free consultation, honest scoping, and a clear price before any
              commitment.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-18px_rgba(20,184,166,0.95)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-white/15">
                <Image
                  src="/logo.png"
                  alt="Entro Ethiopia"
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                  quality={100}
                  unoptimized
                />
              </span>
              <span>
                <span className="block text-lg font-bold leading-tight text-white">
                  {company.name}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-teal-400">
                  Software Development PLC
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              We build custom software, web platforms, AI solutions and ERP
              systems for schools, clinics, NGOs, government institutions and
              growing businesses across Ethiopia — and support them long after
              launch.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-teal-400" aria-hidden="true" />
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-teal-400" aria-hidden="true" />
                {company.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-400"
                  aria-hidden="true"
                />
                <span>
                  {company.address}
                  <br />
                  {company.city} · TIN {company.tin}
                </span>
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <LinkColumn title="Services" links={serviceLinks} />
            <LinkColumn title="Products" links={productLinks} />
            <LinkColumn title="Industries" links={industryLinks} />
            <LinkColumn title="Company" links={companyLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

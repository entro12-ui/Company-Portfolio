"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

type SocialIconProps = {
  href: string;
  label: string;
  icon: ReactNode;
  iconClassName: string;
};

function SocialIcon({ href, label, icon, iconClassName }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center transition hover:opacity-85"
    >
      <span className={iconClassName}>{icon}</span>
    </a>
  );
}

const Footer = () => {
  return (
    <footer
      className="border-t border-slate-800 bg-slate-950 text-white"
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-18 w-28 items-center justify-center overflow-hidden rounded-xl border border-teal-300/40 bg-white px-2 shadow-[0_0_20px_rgba(45,212,191,0.18)] ring-1 ring-white/20">
                <Image
                  src="/logo.png"
                  alt="Entro Ethiopia company logo"
                  width={112}
                  height={72}
                  className="h-auto w-auto object-contain object-center"
                  sizes="112px"
                  quality={100}
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Entro Ethiopia</h2>
                <p className="text-sm text-slate-400">
                  Software Development PLC
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Entro Ethiopia is a software development company in Addis Ababa,
              Ethiopia providing{" "}
              <Link
                href="/custom-software-development"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                custom software development
              </Link>
              ,{" "}
              <Link
                href="/web-development"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                web development
              </Link>
              ,{" "}
              <Link
                href="/ai-solutions"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                AI solutions
              </Link>
              , and{" "}
              <Link
                href="/erp-systems"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                ERP systems
              </Link>{" "}
              for{" "}
              <Link
                href="/solutions-for-smes"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                SMEs
              </Link>
              ,{" "}
              <Link
                href="/solutions-for-ngos"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                NGOs
              </Link>
              , clinics, and{" "}
              <Link
                href="/solutions-for-government"
                className="text-slate-300 transition hover:text-white hover:underline"
              >
                government institutions
              </Link>
              .
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+251979113638"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm transition hover:border-teal-500/40 hover:bg-slate-900"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </span>
                <span className="font-medium text-white">+251 979 113 638</span>
              </a>
              <a
                href="mailto:entro12@entroethiopia.com"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm transition hover:border-teal-500/40 hover:bg-slate-900"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </span>
                <span className="font-medium text-white">
                  entro12@entroethiopia.com
                </span>
              </a>
            </div>

            <div className="mt-5 text-sm leading-7 text-slate-400">
              <p>Megnagna, Hibret Bldg, Office No. H7-702</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-2">TIN: 0095875999</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="transition hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link
                    href="/custom-software-development"
                    className="transition hover:text-white"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/web-development" className="transition hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/ai-solutions" className="transition hover:text-white">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/erp-systems" className="transition hover:text-white">
                    ERP &amp; Business Systems
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Industries
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/solutions-for-smes" className="transition hover:text-white">
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link href="/solutions-for-ngos" className="transition hover:text-white">
                    NGOs
                  </Link>
                </li>
                <li>
                  <Link href="/solutions-for-clinics" className="transition hover:text-white">
                    Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/solutions-for-government" className="transition hover:text-white">
                    Government
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Support
              </h3>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <a
                    href="mailto:entro12@entroethiopia.com"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/profile.php?id=61574279425487"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/entroethiopia/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@entroethiopia?_r=1&_t=ZS-95Ofst4pNzh"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+251979113638"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Call Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Project Enquiry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-card"
                    className="font-medium text-white transition hover:text-teal-300"
                  >
                    Business Card
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Social Pages
                </p>
                <div className="mt-5 flex gap-3">
                  <SocialIcon
                    href="https://web.facebook.com/profile.php?id=61574279425487"
                    label="Facebook"
                    icon={<FaFacebookF className="h-4 w-4" />}
                    iconClassName="text-[#1877F2]"
                  />
                  <SocialIcon
                    href="https://www.instagram.com/entroethiopia/"
                    label="Instagram"
                    icon={<FaInstagram className="h-4 w-4" />}
                    iconClassName="text-[#E4405F]"
                  />
                  <SocialIcon
                    href="https://www.tiktok.com/@entroethiopia?_r=1&_t=ZS-95Ofst4pNzh"
                    label="TikTok"
                    icon={<FaTiktok className="h-4 w-4" />}
                    iconClassName="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Entro Ethiopia. All rights reserved.</p>
          <p>Built for businesses across Addis Ababa and Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

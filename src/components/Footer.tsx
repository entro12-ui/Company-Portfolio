"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const footerBgClass = isDark
    ? "bg-slate-950 text-white border-slate-800"
    : "bg-gray-50 text-gray-900 border-gray-200";
  const textMutedClass = isDark ? "text-slate-400" : "text-gray-500";
  const headingClass = isDark ? "text-slate-500" : "text-gray-400";
  const linkClass = isDark
    ? "text-slate-300 hover:text-white"
    : "text-gray-600 hover:text-teal-700";
  const cardBgClass = isDark
    ? "bg-slate-900/60 border-slate-800 hover:border-teal-500/40"
    : "bg-white/80 border-gray-200 hover:border-teal-400";
  const borderClass = isDark ? "border-slate-800" : "border-gray-200";

  return (
    <footer
      className={`border-t transition-colors duration-300 ${footerBgClass}`}
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          {/* Left column */}
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
                <h2 className="text-2xl font-bold text-white">
                  Entro Ethiopia
                </h2>
                <p className={`text-sm ${textMutedClass}`}>
                  Software Development PLC
                </p>
              </div>
            </div>

            <p className={`max-w-md text-sm leading-7 ${textMutedClass}`}>
              Entro Ethiopia is a software development company in Addis Ababa,
              Ethiopia providing{" "}
              <Link
                href="/custom-software-development"
                className={`transition hover:underline ${linkClass}`}
              >
                custom software development
              </Link>
              ,{" "}
              <Link
                href="/web-development"
                className={`transition hover:underline ${linkClass}`}
              >
                web development
              </Link>
              ,{" "}
              <Link
                href="/ai-solutions"
                className={`transition hover:underline ${linkClass}`}
              >
                AI solutions
              </Link>
              , and{" "}
              <Link
                href="/erp-systems"
                className={`transition hover:underline ${linkClass}`}
              >
                ERP systems
              </Link>{" "}
              for{" "}
              <Link
                href="/solutions-for-smes"
                className={`transition hover:underline ${linkClass}`}
              >
                SMEs
              </Link>
              ,{" "}
              <Link
                href="/solutions-for-ngos"
                className={`transition hover:underline ${linkClass}`}
              >
                NGOs
              </Link>
              , schools, clinics, and{" "}
              <Link
                href="/solutions-for-government"
                className={`transition hover:underline ${linkClass}`}
              >
                government institutions
              </Link>
              .
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+251979113638"
                className={`rounded-2xl border px-4 py-3 text-sm transition ${cardBgClass}`}
              >
                <span
                  className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${headingClass}`}
                >
                  Phone
                </span>
                <span className="font-medium">+251 979 113 638</span>
              </a>
              <a
                href="mailto:entro12@entroethiopia.com"
                className={`rounded-2xl border px-4 py-3 text-sm transition ${cardBgClass}`}
              >
                <span
                  className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${headingClass}`}
                >
                  Email
                </span>
                <span className="font-medium">entro12@entroethiopia.com</span>
              </a>
            </div>

            <div className={`mt-5 text-sm leading-7 ${textMutedClass}`}>
              <p>Megnagna, Hibret Bldg, Office No. H7-702</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-2">TIN: 0095875999</p>
            </div>
          </div>

          {/* Right columns (links) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {/* Quick Links */}
            <div>
              <h3
                className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${headingClass}`}
              >
                Quick Links
              </h3>
              <ul
                className={`space-y-3 text-sm ${isDark ? "text-slate-300" : "text-gray-600"}`}
              >
                <li>
                  <Link href="/" className={`transition ${linkClass}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`transition ${linkClass}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`transition ${linkClass}`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className={`transition ${linkClass}`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className={`transition ${linkClass}`}
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3
                className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${headingClass}`}
              >
                Products
              </h3>
              <ul
                className={`space-y-3 text-sm ${isDark ? "text-slate-300" : "text-gray-600"}`}
              >
                <li>
                  <Link
                    href="/products/edustack-schoolhub"
                    className={`transition ${linkClass}`}
                  >
                    EduStack SchoolHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/medicare-ai"
                    className={`transition ${linkClass}`}
                  >
                    MediCare AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/car-service"
                    className={`transition ${linkClass}`}
                  >
                    Car Service Management System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/fitmind-ai"
                    className={`transition ${linkClass}`}
                  >
                    FitMind AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/control-inventory"
                    className={`transition ${linkClass}`}
                  >
                    Control Inventory Management System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/property-management"
                    className={`transition ${linkClass}`}
                  >
                    Property Management System
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3
                className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${headingClass}`}
              >
                Industries
              </h3>
              <ul
                className={`space-y-3 text-sm ${isDark ? "text-slate-300" : "text-gray-600"}`}
              >
                <li>
                  <Link
                    href="/solutions-for-smes"
                    className={`transition ${linkClass}`}
                  >
                    SMEs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions-for-ngos"
                    className={`transition ${linkClass}`}
                  >
                    NGOs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions-for-clinics"
                    className={`transition ${linkClass}`}
                  >
                    Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions-for-government"
                    className={`transition ${linkClass}`}
                  >
                    Government
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3
                className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${headingClass}`}
              >
                Support
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:entro12@entroethiopia.com"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/profile.php?id=61574279425487"
                    target="_blank"
                    rel="noreferrer"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/entroethiopia/"
                    target="_blank"
                    rel="noreferrer"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@entroethiopia?_r=1&_t=ZS-95Ofst4pNzh"
                    target="_blank"
                    rel="noreferrer"
                    className={`font-medium transition ${linkClass}`}
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+251979113638"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Call Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Project Enquiry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-card"
                    className={`font-medium transition ${linkClass}`}
                  >
                    Business Card
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${headingClass}`}
                >
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

        <div
          className={`mt-10 flex flex-col gap-3 border-t pt-6 text-sm ${textMutedClass} sm:flex-row sm:items-center sm:justify-between ${borderClass}`}
        >
          <p>© 2025 Entro Ethiopia. All rights reserved.</p>
          <p>Built for businesses across Addis Ababa and Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

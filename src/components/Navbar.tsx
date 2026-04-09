"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const serviceLinks = [
  {
    href: "/custom-software-development",
    label: "Custom Software Development",
  },
  { href: "/web-development", label: "Web Development" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/erp-systems", label: "ERP & Business Systems" },
];

const industryLinks = [
  { href: "/solutions-for-smes", label: "SMEs" },
  { href: "/solutions-for-ngos", label: "NGOs" },
  { href: "/solutions-for-clinics", label: "Clinics" },
  { href: "/solutions-for-government", label: "Government" },
];

const aboutLinks = [
  { href: "/vision", label: "Vision" },
  { href: "/mission", label: "Mission" },
  { href: "/our-team", label: "Our Team" },
  { href: "/blog", label: "Blogs and Insight" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  usePathname();

  return (
    <nav className="bg-white fixed w-full z-50 text-base sm:text-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative flex h-14 w-24 sm:h-16 sm:w-28 items-center justify-center overflow-hidden rounded-lg bg-white px-2 py-1 transform hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Entro Ethiopia company logo"
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 640px) 112px, 96px"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              Home
            </Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-gray-600 hover:text-teal-700 transition duration-300">
                About
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/about"
                  className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  About Overview
                </Link>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 text-gray-600 hover:text-teal-700 transition duration-300">
                Services
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 text-gray-600 hover:text-teal-700 transition duration-300">
                Industries
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-slate-700 to-teal-700 text-white px-4 py-2 rounded-lg hover:from-slate-800 hover:to-teal-800 transition duration-300 shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Blurred Backdrop */}
        <div
          className={`fixed inset-0 top-[64px] sm:top-[80px] bg-black/30 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`fixed top-16 sm:top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 transition-all duration-500 ease-out transform origin-top ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6">
            {/* Menu items with enhanced hover effects */}
            <Link
              href="/"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
              >
                <span>About</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isAboutOpen && (
                <div className="space-y-1 px-3 pb-3">
                  <Link
                    href="/about"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Overview
                  </Link>
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="space-y-1 px-3 pb-3">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
              >
                <span>Industries</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="space-y-1 px-3 pb-3">
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-teal-50 hover:text-teal-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block px-4 py-3 bg-gradient-to-r from-slate-700 to-teal-700 text-white rounded-lg transition-all duration-300 ease-out hover:from-slate-800 hover:to-teal-800 hover:shadow-lg text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

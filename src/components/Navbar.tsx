"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { href: "/products/edustack-schoolhub", label: "EduStack SchoolHub" },
  { href: "/products/medicare-ai", label: "MediCare AI" },
  { href: "/products/car-service", label: "Car Service Management System" },
  { href: "/products/fitmind-ai", label: "FitMind AI" },
  {
    href: "/products/control-inventory",
    label: "Control Inventory Management System",
  },
  {
    href: "/products/property-management",
    label: "Property Management System",
  },
];

const industryLinks = [
  { href: "/solutions-for-smes", label: "SMEs" },
  { href: "/solutions-for-ngos", label: "NGOs" },
  { href: "/solutions-for-clinics", label: "Clinics" },
  { href: "/solutions-for-government", label: "Government" },
];

const aboutLinks = [
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/our-team", label: "Our Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blogs and Insight" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  // Theme-based class helpers
  const navBgClass = isDark ? "bg-black text-white" : "bg-white text-gray-900";
  const linkBaseClass = isDark
    ? "text-gray-300 hover:text-white hover:border-teal-400"
    : "text-gray-600 hover:text-teal-700 hover:border-teal-600";
  const dropdownContainerClass = isDark
    ? "bg-gray-800 border-gray-700 text-gray-200"
    : "bg-white border-gray-200 text-gray-700";
  const dropdownLinkClass = isDark
    ? "hover:bg-gray-700 hover:text-teal-300"
    : "hover:bg-teal-50 hover:text-teal-700";
  const mobileMenuBgClass = isDark
    ? "bg-gray-900 border-gray-800 text-white"
    : "bg-white border-gray-200 text-gray-900";
  const mobileLinkClass = isDark
    ? "hover:bg-gray-800 hover:text-teal-300"
    : "hover:bg-teal-50 hover:text-teal-700";
  const borderClass = isDark ? "border-gray-700" : "border-gray-200";
  const searchInputClass = isDark
    ? "bg-gray-800/60 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
    : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-600 focus:ring-teal-600";

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center w-full h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex h-14 w-24 sm:h-16 sm:w-28 items-center justify-center overflow-hidden rounded-lg bg-white px-2 py-1 transform hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Entro Ethiopia company logo"
                  width={112}
                  height={64}
                  className="h-auto w-auto object-contain object-center"
                  sizes="(min-width: 640px) 112px, 96px"
                  quality={100}
                  unoptimized
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-6">
            {/* Main nav links */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              <Link
                href="/"
                className={`${linkBaseClass} transition duration-300 border-b-2 border-transparent hover:border-b-2`}
              >
                Home
              </Link>

              {/* About Us dropdown */}
              <div className="group relative">
                <button
                  className={`flex items-center gap-1 ${linkBaseClass} transition duration-300`}
                >
                  About Us
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
                <div
                  className={`invisible absolute left-0 top-full z-50 mt-3 w-56 rounded-2xl border ${dropdownContainerClass} p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100`}
                >
                  <Link
                    href="/about"
                    className={`block rounded-xl px-4 py-3 text-sm transition ${dropdownLinkClass}`}
                  >
                    About Overview
                  </Link>
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition ${dropdownLinkClass}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Products dropdown */}
              <div className="group relative">
                <button
                  className={`flex items-center gap-1 ${linkBaseClass} transition duration-300`}
                >
                  Products
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
                <div
                  className={`invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border ${dropdownContainerClass} p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100`}
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition ${dropdownLinkClass}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries dropdown */}
              <div className="group relative">
                <button
                  className={`flex items-center gap-1 ${linkBaseClass} transition duration-300`}
                >
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
                <div
                  className={`invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border ${dropdownContainerClass} p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100`}
                >
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition ${dropdownLinkClass}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side items: Search, Theme Toggle */}
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className={`hidden lg:block w-48 xl:w-64 rounded-full border ${searchInputClass} px-4 py-1.5 text-sm outline-none transition-all focus:ring-1`}
                />
                <button className="lg:hidden p-2 rounded-full hover:bg-white/10">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="h-5 w-5 text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              
              {/* Contact Us (outline button) */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 group"
              >
                <span className="rounded-full bg-gradient-to-r from-[#0e3b33] to-[#1a6659] px-6 py-2 text-base font-medium text-white transition-all duration-300 group-hover:from-[#1a6659] group-hover:to-[#0e3b33]">
                  Contact-us
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0e3b33] to-[#1a6659] text-white transition-all duration-300 group-hover:from-[#1a6659] group-hover:to-[#0e3b33] group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-white/10 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
                  className="h-6 w-6"
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
        {/* Backdrop */}
        <div
          className={`fixed inset-0 top-[64px] sm:top-[80px] bg-black/30 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile menu content */}
        <div
          className={`fixed top-16 sm:top-20 left-0 right-0 border-t z-50 transition-all duration-500 ease-out transform origin-top ${mobileMenuBgClass} ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6">
            {/* Search input */}
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search documentation..."
                className={`w-full rounded-lg border ${searchInputClass} px-4 py-2.5 text-sm outline-none transition-all focus:ring-1`}
              />
            </div>

            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 ${mobileLinkClass}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Us accordion */}
            <div className={`rounded-lg border ${borderClass}`}>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${mobileLinkClass}`}
              >
                <span>About Us</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
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
                    className={`block rounded-lg px-3 py-2 text-sm transition ${mobileLinkClass}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Overview
                  </Link>
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${mobileLinkClass}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products accordion */}
            <div className={`rounded-lg border ${borderClass}`}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${mobileLinkClass}`}
              >
                <span>Products</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
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
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${mobileLinkClass}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div className={`rounded-lg border ${borderClass}`}>
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${mobileLinkClass}`}
              >
                <span>Industries</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
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
                      className={`block rounded-lg px-3 py-2 text-sm transition ${mobileLinkClass}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Us */}
            <Link
              href="/contact"
              className={`block w-full text-center rounded-full border ${borderClass} px-4 py-2.5 text-sm font-medium transition-all hover:bg-white/10`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Actions row: Theme Toggle */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 rounded-full border ${borderClass} px-3 py-2 text-sm transition hover:bg-white/10`}
              >
                {isDark ? (
                  <>
                    <svg
                      className="h-4 w-4 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <span>Dark</span>
                  </>
                )}
              </button>

            
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

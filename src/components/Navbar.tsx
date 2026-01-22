"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 text-base sm:text-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transform hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Entro Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#010808]">
                Entro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              Products
            </Link>
            <Link
              href="#access-methods"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              Access Methods
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              Platform Features
            </Link>
            <Link
              href="#industries"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              Industries
            </Link>
            <Link
              href="#faq"
              className="text-gray-600 hover:text-teal-700 hover:border-b-2 hover:border-teal-600 transition duration-300"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-slate-700 to-teal-700 text-white px-4 py-2 rounded-lg hover:from-slate-800 hover:to-teal-800 transition duration-300 shadow-lg"
            >
              Contact Us
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
              href="#about"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#access-methods"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Access Methods
            </Link>
            <Link
              href="#features"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Platform Features
            </Link>
            <Link
              href="#industries"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-3 text-gray-600 rounded-lg transition-all duration-300 ease-out transform hover:pl-6 hover:pr-2 hover:bg-teal-50 hover:text-teal-700 hover:shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-3 bg-gradient-to-r from-slate-700 to-teal-700 text-white rounded-lg transition-all duration-300 ease-out hover:from-slate-800 hover:to-teal-800 hover:shadow-lg text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

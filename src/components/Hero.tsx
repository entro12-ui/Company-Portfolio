"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const sectionBg = isDark
    ? "bg-gradient-to-br from-slate-900 via-gray-900 to-cyan-950"
    : "bg-gradient-to-br from-slate-50 via-white to-cyan-50";

  const blobClasses = isDark
    ? "bg-teal-500/20 mix-blend-screen"
    : "bg-teal-200 mix-blend-multiply";

  const titleColor = isDark ? "text-white" : "text-gray-900";
  const subtitleColor = isDark ? "text-gray-300" : "text-gray-700";
  const descriptionColor = isDark ? "text-gray-400" : "text-gray-600";
  const taglineColor = isDark ? "text-gray-300" : "text-gray-700";

  // Badge styles
  const badgeBg = isDark
    ? "bg-gradient-to-r from-slate-800 to-teal-800"
    : "bg-gradient-to-r from-slate-700 to-teal-700";

  // Button styles
  const primaryButton = isDark
    ? "bg-gradient-to-r from-slate-800 to-teal-800 hover:from-slate-900 hover:to-teal-900 text-white"
    : "bg-gradient-to-r from-slate-700 to-teal-700 hover:from-slate-800 hover:to-teal-800 text-white";

  const secondaryButton = isDark
    ? "bg-gray-800 text-teal-300 border-teal-500 hover:bg-gray-700"
    : "bg-white text-teal-700 border-teal-600 hover:bg-teal-50";

  return (
    <section
      className={`relative pt-24 pb-16 sm:pt-32 sm:pb-24 ${sectionBg} min-h-[600px] overflow-hidden transition-colors duration-300`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 ${blobClasses} rounded-full filter blur-3xl opacity-15 animate-blob`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 ${blobClasses} rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-2000`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${blobClasses} rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-4000`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 ${badgeBg} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up shadow-lg`}
          >
            <span className="text-lg">🚀</span>
            <span>Trusted, Scalable, Locally Engineered Solutions</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold ${titleColor} mb-6 font-poppins leading-tight animate-fade-in-up animation-delay-200`}
          >
            Custom Software Development
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">
              Company in Ethiopia
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl ${subtitleColor} mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed`}
          >
            As a leading software company in Ethiopia, Entro Ethiopia provides
            comprehensive digital solutions including{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              <Link
                href="/custom-software-development"
                className="hover:underline"
              >
                custom software development
              </Link>
              ,{" "}
              <Link href="/web-development" className="hover:underline">
                web platforms
              </Link>
              ,{" "}
              <Link href="/ai-solutions" className="hover:underline">
                AI solutions
              </Link>
              ,{" "}
              <Link href="/erp-systems" className="hover:underline">
                ERP systems
              </Link>
              , education technology platforms, healthcare management, and car
              service management
            </span>
            .
          </p>

          <p
            className={`text-base sm:text-lg ${descriptionColor} mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600`}
          >
            Entro Ethiopia delivers innovative, locally-developed software
            solutions that transform businesses through automation, AI-powered
            systems, and intelligent management platforms for schools,
            institutions, and growing businesses.
          </p>

          {/* Key tagline */}
          <div
            className={`flex items-center justify-center gap-2 mb-8 font-medium animate-fade-in-up animation-delay-800 ${taglineColor}`}
          >
            <span className="text-teal-500 text-2xl">→</span>
            <span className="text-lg sm:text-xl">
              Innovation. Excellence. Local Expertise.
            </span>
          </div>

          <div className="flex justify-center gap-4 flex-col sm:flex-row animate-fade-in-up animation-delay-1000">
            <Link
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg ${primaryButton}`}
            >
              Get a Demo
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#contact"
              className={`group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold border-2 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg ${secondaryButton}`}
            >
              Contact Us
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

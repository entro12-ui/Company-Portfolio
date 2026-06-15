"use client";

import { useState } from "react";
import { faqItems } from "@/content/faqItems";
import { useTheme } from "@/context/ThemeContext";

const FaqItem = ({ question, answer }: (typeof faqItems)[number]) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware styles
  const borderClass = isDark ? "border-gray-700" : "border-gray-200";
  const bgClass = isDark ? "bg-gray-800" : "bg-white";
  const questionColor = isDark ? "text-white" : "text-gray-900";
  const answerColor = isDark ? "text-gray-300" : "text-gray-600";
  const iconColor = isDark
    ? "fill-gray-400 stroke-gray-400"
    : "fill-gray-600 stroke-gray-600";
  const hoverShadow = isDark
    ? "hover:shadow-lg hover:shadow-gray-900/30"
    : "hover:shadow-md";

  return (
    <div
      className={`border-b ${borderClass} ${bgClass} rounded-lg mb-4 shadow-sm transition-all duration-300 ${hoverShadow}`}
    >
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-lg sm:text-xl font-semibold ${questionColor} pr-8`}
        >
          {question}
        </h3>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.702"
            height="21.928"
            viewBox="0 0 22.702 21.928"
            className={iconColor}
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          >
            <path
              d="M11.629 12.553c4.356.341 10.018 2.844 10.018 9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506 10.506 0 0 0-7.344-3.352V0L0 9.044 11.629 18.1z"
              transform="scale(-1,1) translate(-22.702,0)"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-6 px-6" : "max-h-0"
        }`}
      >
        <p className={`${answerColor} text-base sm:text-lg leading-relaxed`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark
    ? "bg-gradient-to-br from-gray-900 to-slate-900"
    : "bg-gradient-to-br from-gray-50 to-white";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const subheadingColor = isDark ? "text-gray-300" : "text-gray-600";
  const containerBg = isDark ? "bg-gray-800/50" : "bg-white";
  const ctaTitleColor = isDark ? "text-white" : "text-gray-900";
  const ctaTextColor = isDark ? "text-gray-300" : "text-gray-600";

  // Button styles
  const phoneButton = isDark
    ? "bg-gradient-to-r from-slate-800 to-teal-800 hover:from-slate-900 hover:to-teal-900 text-white"
    : "bg-gradient-to-r from-slate-700 to-teal-700 hover:from-slate-800 hover:to-teal-800 text-white";
  const emailButton = isDark
    ? "bg-gray-800 text-teal-400 border-teal-500 hover:bg-gray-700"
    : "bg-white text-teal-700 border-teal-600 hover:bg-teal-50";

  return (
    <section
      className={`py-8 transition-colors duration-300 ${sectionBg}`}
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${headingColor}`}
          >
            Frequently Asked Questions
          </h2>
          <p className={`text-lg sm:text-xl ${subheadingColor}`}>
            Everything you need to know about our software solutions and
            services
          </p>
        </div>
        <div className={`rounded-lg ${containerBg}`}>
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 text-center">
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-4 ${ctaTitleColor}`}
          >
            Ready to Transform Your Business?
          </h3>
          <p
            className={`${ctaTextColor} mb-6 text-base sm:text-lg max-w-2xl mx-auto`}
          >
            For any additional inquiries or assistance, please contact us. Our
            team is ready to help you implement the right software solution for
            your business or institution - whether it&apos;s EduStack for
            schools, Healthcare Management, Car Service Management, Inventory
            and Property tools, or custom software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+251979113638"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1 ${phoneButton}`}
            >
              📞 +251 979 113 638
            </a>
            <a
              href="mailto:entro12@entroethiopia.com"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:-translate-y-1 ${emailButton}`}
            >
              📧 entro12@entroethiopia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

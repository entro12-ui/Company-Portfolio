"use client";

import { useState } from "react";
import { faqItems } from "@/content/faqItems";

const FaqItem = ({ question, answer }: (typeof faqItems)[number]) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-8">{question}</h3>
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
            fill="#666666"
            stroke="currentColor"
            strokeWidth="2"
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
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about our software solutions and services
          </p>
        </div>
        <div className="bg-white rounded-lg">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
            For any additional inquiries or assistance, please contact us. Our team is ready to help you implement the perfect software solution for your business - whether it&apos;s Access Control, Healthcare Management, Car Service Management, or custom software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+251979113638"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-teal-800 transition duration-300 shadow-lg"
            >
              📞 +251 979 113 638
            </a>
            <a
              href="mailto:entro12@entroethiopia.com"
              className="inline-flex items-center gap-2 bg-white text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition duration-300"
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

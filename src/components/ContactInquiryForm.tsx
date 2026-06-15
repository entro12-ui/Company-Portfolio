"use client";

import { FormEvent } from "react";
import { useTheme } from "@/context/ThemeContext";

const serviceOptions = [
  "Custom Software",
  "Web Development",
  "AI Solutions",
  "ERP System",
  "Other",
];

export default function ContactInquiryForm() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const formBg = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-slate-200";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const labelColor = isDark ? "text-gray-300" : "text-gray-700";
  const inputBg = isDark
    ? "bg-gray-900 border-gray-600 text-white"
    : "bg-white border-slate-300 text-gray-900";
  const inputFocusRing = isDark
    ? "focus:border-teal-500 focus:ring-2 focus:ring-teal-800"
    : "focus:border-teal-600 focus:ring-2 focus:ring-teal-100";
  const selectBg = isDark
    ? "bg-gray-900 border-gray-600 text-white"
    : "bg-white border-slate-300 text-gray-900";
  const helperTextColor = isDark ? "text-gray-400" : "text-gray-500";
  const buttonGradient = isDark
    ? "bg-gradient-to-r from-slate-800 to-teal-800 hover:from-slate-900 hover:to-teal-900"
    : "bg-gradient-to-r from-slate-700 to-teal-700 hover:from-slate-800 hover:to-teal-800";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get("fullName");
    const organization = formData.get("organization");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Website enquiry from ${String(fullName || "New Lead")}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${String(fullName || "")}`,
        `Organization: ${String(organization || "")}`,
        `Phone/WhatsApp: ${String(phone || "")}`,
        `Email: ${String(email || "")}`,
        `Service Interested In: ${String(service || "")}`,
        "",
        "Message:",
        String(message || ""),
      ].join("\n"),
    );

    window.location.href = `mailto:entro12@entroethiopia.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border p-8 shadow-sm transition-colors duration-300 ${formBg}`}
    >
      <h2 className={`mb-6 text-2xl font-bold ${headingColor}`}>
        Send us a message
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Full Name*
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${inputBg} ${inputFocusRing}`}
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Organization*
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${inputBg} ${inputFocusRing}`}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Phone/WhatsApp*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${inputBg} ${inputFocusRing}`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${inputBg} ${inputFocusRing}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Service Interested In*
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${selectBg} ${inputFocusRing}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className={`mb-2 block text-sm font-semibold ${labelColor}`}
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${inputBg} ${inputFocusRing}`}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-sm ${helperTextColor}`}>
          Submitting will open your email app with your enquiry details filled
          in.
        </p>
        <button
          type="submit"
          className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition ${buttonGradient}`}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

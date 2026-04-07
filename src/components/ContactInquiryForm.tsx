"use client";

import { FormEvent } from "react";

const serviceOptions = [
  "Custom Software",
  "Web Development",
  "AI Solutions",
  "ERP System",
  "Other",
];

export default function ContactInquiryForm() {
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
      `Website enquiry from ${String(fullName || "New Lead")}`
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
      ].join("\n")
    );

    window.location.href = `mailto:entro12@entroethiopia.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name*
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Organization*
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Phone/WhatsApp*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Service Interested In*
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
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
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-gray-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          Submitting will open your email app with your enquiry details filled in.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-700 to-teal-700 px-6 py-3 font-semibold text-white transition hover:from-slate-800 hover:to-teal-800"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

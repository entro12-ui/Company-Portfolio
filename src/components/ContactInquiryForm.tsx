"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { company } from "@/content/company";

const serviceOptions = [
  "Custom Software",
  "Web Development",
  "AI Solutions",
  "ERP System",
  "Mobile App",
  "Other",
];

const budgetOptions = [
  "Not sure yet",
  "Under 250,000 ETB",
  "250,000 – 750,000 ETB",
  "750,000 ETB+",
];

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-400/60";

const labelClass =
  "mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300";

export default function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const get = (key: string) => String(formData.get(key) ?? "");

    const subject = encodeURIComponent(
      `Project enquiry from ${get("fullName") || "New Lead"}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${get("fullName")}`,
        `Organization: ${get("organization")}`,
        `Phone/WhatsApp: ${get("phone")}`,
        `Email: ${get("email")}`,
        `Service Interested In: ${get("service")}`,
        `Indicative Budget: ${get("budget")}`,
        "",
        "Message:",
        get("message"),
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9 dark:border-white/10 dark:bg-white/[0.03]"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Tell us about your project
      </h2>
      <p className="mt-2 text-[15px] leading-6 text-slate-600 dark:text-slate-400">
        The more context you give us, the more useful our first reply will be.
        Every enquiry is read by an engineer, not a sales bot.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name <span className="text-teal-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Abebe Kebede"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="organization" className={labelClass}>
            Organization <span className="text-teal-600">*</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            placeholder="Company, school or clinic"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp <span className="text-teal-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+251 9.. ... ..."
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need? <span className="text-teal-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={fieldClass}
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

        <div>
          <label htmlFor="budget" className={labelClass}>
            Indicative budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue="Not sure yet"
            className={fieldClass}
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            What problem are you trying to solve?{" "}
            <span className="text-teal-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Describe the process that is costing you time today, who uses it, and what a good outcome would look like."
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-5 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <p className="flex items-start gap-2.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
            aria-hidden="true"
          />
          Your details stay with our team. Submitting opens your email app with
          everything filled in.
        </p>
        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(20,184,166,0.95)] transition-all duration-300 hover:-translate-y-0.5"
        >
          {submitted ? "Opening your email app…" : "Send enquiry"}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}

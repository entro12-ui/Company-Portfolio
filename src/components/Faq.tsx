"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquareQuote, Phone, Plus } from "lucide-react";
import { faqItems } from "@/content/faqItems";
import { company } from "@/content/company";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-teal-300 bg-white shadow-[var(--shadow-soft)] dark:border-teal-400/30 dark:bg-white/[0.05]"
          : "border-slate-200 bg-white/70 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-5 px-6 py-5 text-left"
      >
        <h3 className="text-[15px] font-semibold leading-7 text-slate-900 sm:text-base dark:text-white">
          {question}
        </h3>
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-45 bg-teal-600 text-white"
              : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
          }`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white dark:bg-ink-950">
      <SectionHeading
        eyebrow="Questions"
        title="Everything clients ask before they sign"
        description="If your question is not here, ask it directly — you will get a straight answer, not a sales call."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
        <Reveal>
          <div className="sticky top-32 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 dark:border-white/10 dark:from-white/[0.06] dark:to-white/[0.02]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
              <MessageSquareQuote
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              Still deciding?
            </h3>
            <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              A 30-minute call is usually enough to know whether we are the
              right team for your project.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-teal-400/40"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                  aria-hidden="true"
                />
                {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-teal-400/40"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                  aria-hidden="true"
                />
                <span className="truncate">{company.email}</span>
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send us a brief
            </Link>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 40}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;

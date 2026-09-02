import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { company, serviceLinks } from "@/content/company";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Entro Ethiopia | Get a Quote for Software Development",
  description:
    "Contact Entro Ethiopia in Addis Ababa for custom software, web development, AI and ERP systems. Call, WhatsApp or fill the form.",
  alternates: {
    canonical: "https://www.entroethiopia.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Entro Ethiopia",
  url: "https://www.entroethiopia.com/contact",
};

const nextSteps = [
  {
    title: "We reply within 24 hours",
    detail: "Usually much sooner during working days.",
  },
  {
    title: "A free 30-minute consultation",
    detail: "We map the problem before talking about solutions.",
  },
  {
    title: "A clear written proposal",
    detail: "Fixed scope, fixed price, no hidden costs.",
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${company.address}, ${company.city}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday, 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={contactPageSchema} />

      <PageHero
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
        eyebrow="Start a project"
        title="Let's talk about what you are trying to build"
        description="Tell us about the process you want to fix. We will tell you honestly whether software is the answer, what it would take, and what it would cost — before you commit to anything."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <a
            href="https://wa.me/251979113638"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40"
          >
            <MessageCircle className="h-4 w-4 text-teal-300" aria-hidden="true" />
            WhatsApp us
          </a>
        </div>
      </PageHero>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-ink-950">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <ContactInquiryForm />

          <aside className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] dark:border-white/10 dark:bg-white/[0.03]">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Reach us directly
              </h2>
              <div className="mt-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
                      <Icon
                        className="h-4 w-4 text-teal-600 dark:text-teal-400"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block break-words text-[15px] font-semibold text-slate-900 transition-colors hover:text-teal-700 dark:text-white dark:hover:text-teal-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[15px] font-medium text-slate-700 dark:text-slate-300">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-7 text-white">
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs font-bold text-teal-300">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[var(--shadow-soft)] dark:border-white/10 dark:bg-white/[0.03]">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Explore our services
              </h2>
              <ul className="mt-5 space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <div className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
          <div className="border-b border-slate-200 bg-white px-7 py-5 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Find us in Addis Ababa
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {company.address}, {company.city}
            </p>
          </div>
          <iframe
            title="Map of Addis Ababa, Ethiopia"
            src="https://maps.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&z=13&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageShell>
  );
}

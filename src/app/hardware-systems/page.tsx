import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Fingerprint,
  KeyRound,
  Network,
  Satellite,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "CCTV, Access Control & GPS Tracking Installation Ethiopia | Entro Ethiopia",
  description:
    "Entro Ethiopia Software Development PLC installs and integrates CCTV cameras, door access control, GPS vehicle tracking, and attendance machines in Addis Ababa and across Ethiopia — with centralized web dashboards.",
  keywords: [
    "CCTV installation Ethiopia",
    "access control system Addis Ababa",
    "GPS vehicle tracking Ethiopia",
    "attendance machine installation",
    "door access control Ethiopia",
    "NVR DVR configuration",
    "biometric attendance Ethiopia",
    "hardware systems integration Addis Ababa",
  ],
  alternates: {
    canonical: "https://www.entroethiopia.com/hardware-systems",
  },
  openGraph: {
    title: "Hardware Systems & Integration in Ethiopia | Entro Ethiopia",
    description:
      "CCTV, door access control, GPS tracking, attendance machines, and unified security platforms — installed and integrated in Ethiopia.",
    url: "https://www.entroethiopia.com/hardware-systems",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hardware Systems Integration",
  name: "CCTV, Access Control, GPS & Attendance Hardware in Ethiopia",
  description:
    "Entro Ethiopia Software Development PLC supplies, installs, and integrates CCTV cameras, door access control, GPS vehicle tracking, attendance machines, and centralized security management platforms in Addis Ababa and Ethiopia.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.entroethiopia.com/#organization",
    name: "Entro Ethiopia",
    legalName: "Entro Ethiopia Software Development PLC",
    url: "https://www.entroethiopia.com/",
  },
  areaServed: {
    "@type": "Country",
    name: "Ethiopia",
  },
  url: "https://www.entroethiopia.com/hardware-systems",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hardware systems offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CCTV Camera Installation & Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Door Access Control System Implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GPS Vehicle Tracking System Implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attendance Machine Hardware Implementation & Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Centralized System Integration",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply and install the hardware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply, install, configure, and integrate CCTV, access control, GPS, and attendance hardware with your software systems.",
      },
    },
    {
      "@type": "Question",
      name: "Can these systems work together in one dashboard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can connect CCTV, access control, GPS tracking, and attendance into one centralized web application with reports and real-time alerts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate with existing doors and networks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate with existing doors, networks, PoE switches, NVR/DVR units, and security infrastructure where compatible.",
      },
    },
    {
      "@type": "Question",
      name: "Is training and support included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We configure devices, train your team, and provide ongoing technical support.",
      },
    },
  ],
};

const offerings = [
  {
    icon: Camera,
    title: "CCTV Camera Installation & Integration",
    points: [
      "IP and analog CCTV camera installation",
      "NVR/DVR configuration and integration",
      "Remote monitoring through mobile apps and web dashboards",
      "Network configuration, PoE switches, and storage setup",
      "Integration with centralized security monitoring systems",
    ],
  },
  {
    icon: KeyRound,
    title: "Door Access Control System Implementation",
    points: [
      "RFID card, NFC, PIN, fingerprint, and facial recognition access systems",
      "Smart door locks and electronic magnetic locks",
      "Integration with existing doors and security infrastructure",
      "Centralized access management and user permissions",
      "Integration with attendance systems and web applications",
      "Real-time access logs and entry monitoring",
    ],
  },
  {
    icon: Satellite,
    title: "GPS Vehicle Tracking System Implementation",
    points: [
      "GPS tracking device installation in vehicles",
      "Real-time vehicle location tracking",
      "Fleet management dashboard integration",
      "Route history, geofencing, and speed monitoring",
      "Vehicle status monitoring and alerts",
      "GPS hardware integration with backend APIs and web applications",
    ],
  },
  {
    icon: Fingerprint,
    title: "Attendance Machine Hardware Implementation & Integration",
    points: [
      "Fingerprint, RFID, facial recognition, and biometric attendance device installation",
      "Employee registration and device configuration",
      "Integration with HR and payroll management systems",
      "Automatic attendance synchronization with centralized servers",
      "REST API integration and database synchronization",
      "Attendance reports, working hours, and employee activity monitoring",
    ],
  },
  {
    icon: Network,
    title: "Centralized System Integration",
    points: [
      "Monitor CCTV cameras from one web application",
      "Manage employee access permissions centrally",
      "Track company vehicles using GPS",
      "Record employee attendance automatically",
      "Generate security, fleet, and workforce reports",
      "Receive real-time alerts and notifications",
    ],
  },
];

export default function HardwareSystemsPage() {
  return (
    <>
      <PageShell>
        <JsonLd data={serviceSchema} />
        <article className="px-4 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <header className="mb-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Hardware systems Ethiopia
              </p>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                CCTV, Access Control &amp; GPS Hardware Systems in Ethiopia
              </h1>
              <p className="max-w-4xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Entro Ethiopia Software Development PLC is based in Megnagna,
                Addis Ababa. Beyond software, we supply, install, and integrate
                CCTV cameras, door access control, GPS vehicle tracking, and
                attendance machines — then connect them into one management
                platform your team can run from a web application.
              </p>
            </header>

            <div className="grid gap-8">
              {offerings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <section
                    key={offering.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600">
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {offering.title}
                        </h2>
                        {offering.title === "Centralized System Integration" ? (
                          <p className="mt-2 text-gray-700 dark:text-gray-300">
                            Connect all these systems into a unified management
                            platform. For example, a company could use one web
                            application to:
                          </p>
                        ) : null}
                        <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                          {offering.points.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 leading-relaxed"
                            >
                              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-400">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Why software + hardware together
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {[
                    "One team owns devices, networks, and the web platform",
                    "Hardware data flows into HR, payroll, and security systems",
                    "Fewer vendor handoffs and clearer accountability",
                    "Local installation, configuration, and ongoing support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed"
                    >
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-400">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Frequently asked questions
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Do you supply and install the hardware?
                    </h3>
                    <p>
                      Yes. We supply, install, configure, and integrate CCTV,
                      access control, GPS, and attendance hardware with your
                      software systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Can these systems work together in one dashboard?
                    </h3>
                    <p>
                      Yes. We can connect CCTV, access control, GPS tracking,
                      and attendance into one centralized web application with
                      reports and real-time alerts.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Do you integrate with existing doors and networks?
                    </h3>
                    <p>
                      Yes. We integrate with existing doors, networks, PoE
                      switches, NVR/DVR units, and security infrastructure where
                      compatible.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Is training and support included?
                    </h3>
                    <p>
                      Yes. We configure devices, train your team, and provide
                      ongoing technical support.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
              <h2 className="mb-4 text-3xl font-bold">
                Secure your operations with connected hardware
              </h2>
              <p className="mb-6 max-w-3xl text-white/90">
                Speak with Entro Ethiopia about CCTV, access control, GPS
                tracking, attendance machines, and a unified management
                platform for your organization.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700"
                >
                  Discuss hardware requirements
                </Link>
                <Link
                  href="/custom-software-development"
                  className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore custom software
                </Link>
              </div>
            </section>
          </div>
        </article>
      </PageShell>
      <JsonLd data={faqSchema} />
    </>
  );
}

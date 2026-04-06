"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const sectionHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <footer
      className="border-t border-slate-800 bg-slate-950 text-white"
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-slate-900">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Entro Ethiopia</h2>
                <p className="text-sm text-slate-400">
                  Software &amp; Hardware Development PLC
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Entro Ethiopia builds practical digital solutions for businesses,
              NGOs, clinics, and institutions across Ethiopia, including custom
              software, web platforms, AI solutions, and ERP systems.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+251979113638"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm transition hover:border-teal-500/40 hover:bg-slate-900"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </span>
                <span className="font-medium text-white">+251 979 113 638</span>
              </a>
              <a
                href="mailto:entro12@entroethiopia.com"
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm transition hover:border-teal-500/40 hover:bg-slate-900"
              >
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </span>
                <span className="font-medium text-white">
                  entro12@entroethiopia.com
                </span>
              </a>
            </div>

            <div className="mt-5 text-sm leading-7 text-slate-400">
              <p>Megnagna, Hibret Bldg, Office No. H7-702</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-2">TIN: 0095875999</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Solutions
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href={sectionHref("products")} className="transition hover:text-white">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href={sectionHref("features")} className="transition hover:text-white">
                    Platform Features
                  </Link>
                </li>
                <li>
                  <Link href={sectionHref("industries")} className="transition hover:text-white">
                    Industries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="transition hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={sectionHref("faq")} className="transition hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <Link
                    href="/custom-software-development"
                    className="transition hover:text-white"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/web-development" className="transition hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/ai-solutions" className="transition hover:text-white">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/erp-systems" className="transition hover:text-white">
                    ERP Systems
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Support
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  <a
                    href="mailto:entro12@entroethiopia.com"
                    className="transition hover:text-white"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574279425487"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+251979113638"
                    className="transition hover:text-white"
                  >
                    Call Us
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">
                    Project Enquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Entro Ethiopia. All rights reserved.</p>
          <p>Built for businesses across Addis Ababa and Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.entroethiopia.com/our-team",
  },
  title: "Our Team | Entro Ethiopia Software & AI Experts in Addis Ababa",
  description:
    "Meet the leadership team behind Entro Ethiopia - experts in custom software development, AI solutions, web development, and digital strategy in Addis Ababa.",
};

const teamMembers = [
  {
    name: "Tadesse Jemal",
    role: "Chief Executive Officer (CEO)",
    photo: "/team/Tadesse.jpeg",
    email: "tadesse@entro.co",
    linkedIn: "https://www.linkedin.com/in/tadesse-jemal/",
    upwork:
      "https://www.upwork.com/freelancers/~0105484a273db44e56?companyReference=1348537211945136129&mp_source=share",
    summary:
      "Leads Entro Ethiopia with a strategic vision focused on practical, scalable, and locally relevant technology solutions.",
    bio: "Tadesse Jemal leads Entro Ethiopia with a strategic vision focused on building practical, scalable, and locally relevant technology solutions. He oversees business strategy, partnerships, and operational growth while ensuring that every solution delivered aligns with real business needs in Ethiopia.",
  },
  {
    name: "Natnael Mekuria",
    role: "Chief Technology Officer (CTO)",
    photo: "/team/natnael.jpg",
    email: "natnael@entro.com",
    linkedIn:
      "https://www.linkedin.com/in/natnael-mekuria-36335523b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    upwork: "https://www.upwork.com/freelancers/natnaelm12",
    summary:
      "Leads technical architecture and software engineering direction for custom software, AI, ERP, and scalable web systems.",
    bio: "Natnael Mekuria is responsible for the technical architecture and software engineering direction of Entro Ethiopia. As Founder and CTO, he leads the development of custom software systems, AI-powered solutions, ERP platforms, and scalable web applications built for Ethiopian organizations.",
  },
  {
    name: "Ermias Mezgebe",
    role: "Chief Operations Officer (COO)",
    photo: "/team/ermias-mezgebe.png",
    email: "entro12@entroethiopia.com",
    phone: "+251930926317",
    linkedIn: "",
    upwork: "",
    summary:
      "Coordinates company operations, project delivery, and the workflows that connect Entro Ethiopia's teams and clients.",
    bio: "Ermias Mezgebe serves as Chief Operations Officer at Entro Ethiopia. He coordinates day-to-day operations, supports project delivery, and helps align internal teams with client requirements and company priorities.",
  },
  {
    name: "Yosef Birhanu",
    role: "Digital Marketing Manager",
    photo: "/team/yosef.jpeg",
    email: "jossybirhanu608@gmail.com",
    linkedIn: "https://www.linkedin.com/in/yosef-birhanu-47239b199",
    upwork: "https://www.upwork.com/freelancers/~01a04a21f3400a2f30",
    summary:
      "Drives SEO and Generative Engine Optimization (GEO) so solutions are discoverable across search and AI platforms.",
    bio: "Yosef Birhanu leads digital strategy, SEO, and Generative Engine Optimization (GEO) initiatives at Entro Ethiopia. He ensures that the company's solutions are discoverable across search engines and AI-driven platforms, helping businesses connect with practical software solutions.",
  },
  {
    name: "Mekides Nigatu",
    role: "Marketing Officer",
    photo: "/team/mekides-nigatu.png",
    email: "entro12@entroethiopia.com",
    phone: "+251979113638",
    linkedIn: "",
    upwork: "",
    summary:
      "Supports marketing, client communication, and brand outreach for Entro Ethiopia's software and digital solutions.",
    bio: "Mekides Nigatu serves as Marketing Officer at Entro Ethiopia. She supports marketing activities, client communication, and brand outreach, helping organizations discover software and digital solutions suited to their needs.",
  },
  {
    name: "Kidist Tafa",
    role: "Media Content Creator and Marketer",
    photo: "/team/kidist-tafa.svg",
    email: "",
    linkedIn: "",
    upwork: "",
    summary:
      "Leads creative content, storytelling, and media initiatives that communicate Entro Ethiopia's value clearly.",
    bio: "Kidist Tafa manages creative content production, brand storytelling, and digital media initiatives. She supports Entro Ethiopia's communication strategy through high-quality media content, ensuring the brand effectively communicates its technology solutions.",
  },
  {
    name: "Developer / Project Manager",
    role: "Team profile coming soon",
    photo: "/team/developer-project-manager.svg",
    email: "",
    linkedIn: "",
    upwork: "",
    summary:
      "Our development and project management team delivers projects on time and aligned with client requirements.",
    bio: "Our development and project management team works behind the scenes to ensure every software solution is delivered on time, aligned with client requirements, and built to scale.",
  },
];

const teamOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Entro Ethiopia",
  url: "https://www.entroethiopia.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.entroethiopia.com/logo.png",
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: ["https://www.linkedin.com/company/entro-ethiopia"],
  employee: [
    {
      "@type": "Person",
      name: "Tadesse Jemal",
      jobTitle: "Founder & Chief Executive Officer",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
    {
      "@type": "Person",
      name: "Natnael Mekuria",
      jobTitle: "Founder & Chief Technology Officer",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
    {
      "@type": "Person",
      name: "Ermias Mezgebe",
      jobTitle: "Chief Operations Officer",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
    {
      "@type": "Person",
      name: "Yosef Birhanu",
      jobTitle: "Digital Marketing Manager",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
    {
      "@type": "Person",
      name: "Mekides Nigatu",
      jobTitle: "Marketing Officer",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
    {
      "@type": "Person",
      name: "Kidist Tafa",
      jobTitle: "Media Content Creator",
      worksFor: {
        "@type": "Organization",
        name: "Entro Ethiopia",
      },
    },
  ],
};

export default function OurTeamPage() {
  return (
    <PageShell>
      <JsonLd data={teamOrganizationSchema} />
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 text-white shadow-xl transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300 dark:text-teal-400">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Meet the Team Behind Entro Ethiopia
            </h1>
            <p className="text-lg leading-relaxed text-slate-200 dark:text-gray-300">
              Entro Ethiopia is built by a multidisciplinary team of technology,
              digital strategy, and creative professionals dedicated to building
              practical software solutions for Ethiopian businesses and
              organizations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200 dark:text-gray-300">
              Our team combines expertise in software engineering, AI systems,
              digital marketing, and content creation to deliver modern,
              scalable solutions for SMEs, NGOs, clinics, and government
              institutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Software Engineering",
                "AI Systems",
                "Digital Strategy",
                "Content & Marketing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Leadership & Core Team */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-10">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Leadership &amp; Core Team
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Click each profile to view more details.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {teamMembers.map((member) => (
                <details
                  key={member.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg open:bg-white dark:border-gray-700 dark:bg-gray-800 dark:open:bg-gray-800"
                >
                  <summary className="list-none cursor-pointer">
                    <div className="flex items-start gap-4">
                      <Image
                        src={member.photo}
                        alt={`${member.name} profile`}
                        width={56}
                        height={56}
                        className="h-14 w-14 flex-shrink-0 rounded-xl border border-slate-200 object-cover dark:border-gray-700"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
                          {member.role}
                        </p>
                        <p className="mt-3 text-gray-700 dark:text-gray-300">
                          {member.summary}
                        </p>
                        <p className="mt-3 text-sm font-medium text-teal-700/80 group-open:text-teal-700 dark:text-teal-400/80 dark:group-open:text-teal-400">
                          {`View details`}
                        </p>
                      </div>
                    </div>
                  </summary>
                  <p className="mt-4 border-t border-slate-200 pt-4 leading-8 text-gray-700 dark:border-gray-700 dark:text-gray-300">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-200 pt-4 dark:border-gray-700">
                    {"phone" in member && member.phone ? (
                      <a
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
                      >
                        <MdPhone className="h-4 w-4" />
                        <span>{member.phone}</span>
                      </a>
                    ) : null}
                    {member.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
                      >
                        <MdEmail className="h-4 w-4" />
                        <span>{member.email}</span>
                      </a>
                    ) : null}
                    {member.linkedIn ? (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
                      >
                        <FaLinkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    ) : null}
                    {member.upwork ? (
                      <a
                        href={member.upwork}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
                      >
                        <SiUpwork className="h-4 w-4" />
                        <span>Upwork</span>
                      </a>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Our Approach
            </h2>
            <p className="mb-4 leading-8 text-gray-700 dark:text-gray-300">
              We believe technology should be:
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Practical",
                "Affordable",
                "Scalable",
                "Built for local realities",
                "Supported by real people",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600 dark:bg-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8 text-gray-700 dark:text-gray-300">
              Our team works closely with clients to understand workflows,
              challenges, and operational goals before writing a single line of
              code.
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-8 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-3 text-3xl font-bold">Want to work with us?</h2>
            <p className="mb-6 text-white/90">
              Contact our team today to discuss your software needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700"
            >
              Contact Our Team
            </Link>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Team | Entro Ethiopia Software & AI Experts in Addis Ababa",
  description:
    "Meet the leadership team behind Entro Ethiopia - experts in custom software development, AI solutions, web development, and digital strategy in Addis Ababa.",
};

const teamMembers = [
  {
    name: "Tadesse Jemal",
    role: "Chief Executive Officer (CEO)",
    summary:
      "Leads Entro Ethiopia with a strategic vision focused on practical, scalable, and locally relevant technology solutions.",
    bio: "Tadesse Jemal leads Entro Ethiopia with a strategic vision focused on building practical, scalable, and locally relevant technology solutions. He oversees business strategy, partnerships, and operational growth while ensuring that every solution delivered aligns with real business needs in Ethiopia.",
  },
  {
    name: "Natnael Mekuria",
    role: "Chief Technology Officer (CTO)",
    summary:
      "Leads technical architecture and software engineering direction for custom software, AI, ERP, and scalable web systems.",
    bio: "Natnael Mekuria is responsible for the technical architecture and software engineering direction of Entro Ethiopia. As Founder and CTO, he leads the development of custom software systems, AI-powered solutions, ERP platforms, and scalable web applications built for Ethiopian organizations.",
  },
  {
    name: "Yosef Birhanu",
    role: "Digital Marketing Manager",
    summary:
      "Drives SEO and Generative Engine Optimization (GEO) so solutions are discoverable across search and AI platforms.",
    bio: "Yosef Birhanu leads digital strategy, SEO, and Generative Engine Optimization (GEO) initiatives at Entro Ethiopia. He ensures that the company's solutions are discoverable across search engines and AI-driven platforms, helping businesses connect with practical software solutions.",
  },
  {
    name: "Kidist Tafa",
    role: "Media Content Creator and Marketer",
    summary:
      "Leads creative content, storytelling, and media initiatives that communicate Entro Ethiopia's value clearly.",
    bio: "Kidist Tafa manages creative content production, brand storytelling, and digital media initiatives. She supports Entro Ethiopia's communication strategy through high-quality media content, ensuring the brand effectively communicates its technology solutions.",
  },
  {
    name: "Developer / Project Manager",
    role: "Team profile coming soon",
    summary:
      "Our development and project management team delivers projects on time and aligned with client requirements.",
    bio: "Our development and project management team works behind the scenes to ensure every software solution is delivered on time, aligned with client requirements, and built to scale.",
  },
];

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const teamOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Entro Ethiopia",
  url: "https://www.entroethiopia.com/",
  logo: "https://www.entroethiopia.com/logo.png",
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
      name: "Yosef Birhanu",
      jobTitle: "Digital Marketing Manager",
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
          <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              About Entro Ethiopia
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Meet the Team Behind Entro Ethiopia
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Entro Ethiopia is built by a multidisciplinary team of technology,
              digital strategy, and creative professionals dedicated to building
              practical software solutions for Ethiopian businesses and
              organizations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
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
                  className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Leadership &amp; Core Team
            </h2>
            <p className="mb-6 text-gray-600">
              Click each profile to view more details.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {teamMembers.map((member) => (
                <details
                  key={member.name}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md open:bg-white"
                >
                  <summary className="list-none cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-sm font-bold text-white">
                        {initialsFromName(member.name)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                          {member.role}
                        </p>
                        <p className="mt-3 text-gray-700">{member.summary}</p>
                        <p className="mt-3 text-sm font-medium text-slate-500 group-open:text-teal-700">
                          {`View details`}
                        </p>
                      </div>
                    </div>
                  </summary>
                  <p className="mt-4 border-t border-slate-200 pt-4 leading-8 text-gray-700">
                    {member.bio}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Approach</h2>
            <p className="mb-4 leading-8 text-gray-700">
              We believe technology should be:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Practical",
                "Affordable",
                "Scalable",
                "Built for local realities",
                "Supported by real people",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8 text-gray-700">
              Our team works closely with clients to understand workflows,
              challenges, and operational goals before writing a single line of
              code.
            </p>
          </section>

          <section className="mt-8 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-3 text-3xl font-bold">Want to work with us?</h2>
            <p className="mb-6 text-white/90">
              Contact our team today to discuss your software needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
            >
              Contact Our Team
            </Link>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

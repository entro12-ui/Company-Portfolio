import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Industries from "@/components/Systems";
import SoftwareProducts from "@/components/SoftwareProducts";
import PastClientReview from "@/components/PastClientReview";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/content/faqItems";
import { blogPosts } from "@/content/blogPosts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Software Company Ethiopia | Custom Software, Web & AI Solutions | Entro Ethiopia",
  description:
    "Entro Ethiopia is a software company in Ethiopia building custom software, websites, AI solutions, and ERP systems for growing organizations.",
  alternates: {
    canonical: "https://www.entroethiopia.com/",
  },
};

const organizationSchema = {
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
  description:
    "Entro Ethiopia builds custom software, websites, AI solutions and ERP systems for SMEs, NGOs, clinics and government in Addis Ababa and Ethiopia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+251 979 113 638",
    contactType: "sales",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61574279425487",
    "[LINKEDIN_URL]",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Entro Ethiopia",
  url: "https://www.entroethiopia.com/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <PageShell>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <SoftwareProducts />
      <Industries />
      <PastClientReview />

      {/* Blog Section - Theme-aware */}
      <section className="px-4 py-10 sm:py-14 transition-colors duration-300">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Insights
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                From Our Blog
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-gray-400">
                Explore practical guides on software, web, AI, and ERP solutions
                for Ethiopian businesses and organizations.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-teal-600 px-5 py-3 font-semibold text-teal-700 transition hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950/50"
            >
              View All Blogs
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-600 dark:hover:bg-gray-750"
              >
                <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-gray-400">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700 transition hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Faq />
    </PageShell>
  );
}

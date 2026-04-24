import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Systems";
import SoftwareProducts from "@/components/SoftwareProducts";
import PastClientReview from "@/components/PastClientReview";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/content/faqItems";
import { blogPosts } from "@/content/blogPosts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Company Ethiopia | Custom Software, Web & AI Solutions | Entro Ethiopia",
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
    <main className="min-h-screen">
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <Hero />
      <SoftwareProducts />
      <Industries />
      <PastClientReview />
      <section className="bg-white px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Insights
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                From Our Blog
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Explore practical guides on software, web, AI, and ERP solutions
                for Ethiopian businesses and organizations.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-teal-600 px-5 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              View All Blogs
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white"
              >
                <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700 transition hover:text-teal-800 hover:underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyEntro from "@/components/WhyEntro";
import Industries from "@/components/Systems";
import SoftwareProducts from "@/components/SoftwareProducts";
import Process from "@/components/Process";
import PastClientReview from "@/components/PastClientReview";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { clientReviews } from "@/content/clientReviews";
import { faqItems } from "@/content/faqItems";
import { blogPosts } from "@/content/blogPosts";
import {
  buildTestimonialReviewSchema,
  companyDescription,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/content/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Software & Hardware Company Ethiopia | CCTV, AI, ERP | Entro Ethiopia",
  description: companyDescription,
  alternates: {
    canonical: "https://www.entroethiopia.com/",
  },
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
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={buildTestimonialReviewSchema(clientReviews)} />
      <Hero />
      <Services />
      <WhyEntro />
      <SoftwareProducts />
      <Industries />
      <Process />
      <PastClientReview />
      <CtaBand />

      {/* Insights */}
      <Section
        id="insights"
        className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-ink-900"
      >
        <SectionHeading
          align="left"
          eyebrow="Insights"
          title="Practical writing on software, hardware and AI"
          description="Guides drawn from real projects with Ethiopian businesses and institutions — written for decision makers, not developers."
          action={
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
            >
              Read all articles
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => {
            const accents = [
              "text-teal-700 dark:text-teal-400",
              "text-sky-700 dark:text-sky-400",
              "text-violet-700 dark:text-violet-400",
              "text-amber-700 dark:text-amber-400",
              "text-rose-700 dark:text-rose-400",
            ];
            const accent = accents[index % accents.length];
            return (
              <Reveal key={post.slug} delay={index * 70} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="ring-gradient group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lifted)] sm:p-7 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${accent}`}
                  >
                    Article
                  </span>
                  <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {post.description}
                  </p>
                  <span className={`mt-auto pt-6 text-sm font-semibold ${accent}`}>
                    Read article →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Faq />
    </PageShell>
  );
}

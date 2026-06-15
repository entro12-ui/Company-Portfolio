import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { blogPosts } from "@/content/blogPosts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Insights & Blog | Entro Ethiopia",
  description:
    "Insights from Entro Ethiopia on custom software, web development, AI solutions, ERP systems, and practical digital transformation in Ethiopia.",
  alternates: {
    canonical: "https://www.entroethiopia.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero Header */}
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
              Insights & Blog
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Insights from Entro Ethiopia
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Explore practical articles on custom software, websites, AI
              solutions, ERP systems, and digital transformation for
              organizations in Ethiopia.
            </p>
          </header>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-teal-700 dark:hover:text-teal-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-slate-700 to-teal-700 px-5 py-3 font-semibold text-white transition hover:from-slate-800 hover:to-teal-800 dark:from-slate-800 dark:to-teal-800 dark:hover:from-slate-900 dark:hover:to-teal-900"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}

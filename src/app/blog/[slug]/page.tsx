import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";
import { blogPosts, getBlogPostBySlug } from "@/content/blogPosts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function renderRichText(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts
    .filter(Boolean)
    .map((part, index) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (!match) {
        return part;
      }

      const [, label, href] = match;

      return (
        <Link
          key={`${href}-${index}`}
          href={href}
          className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-800 hover:decoration-teal-500"
        >
          {label}
        </Link>
      );
    });
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle ?? `${post.title} | Entro Ethiopia`,
    description: post.description,
    alternates: {
      canonical: `https://www.entroethiopia.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <article className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-12 shadow-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Insights & Blog
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">{post.intro}</p>
          </header>

          <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Quick navigation
            </h2>
            <div className="flex flex-wrap gap-3">
              {post.sections.map((section) => (
                <a
                  key={section.heading}
                  href={`#${sectionId(section.heading)}`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  {section.heading}
                </a>
              ))}
              {post.faqs && (
                <a
                  href="#frequently-asked-questions"
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  Frequently Asked Questions
                </a>
              )}
            </div>
          </section>

          <div className="space-y-8">
            {post.sections.map((section) => (
              <section
                key={section.heading}
                id={sectionId(section.heading)}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-4 leading-8 text-gray-700 last:mb-0"
                  >
                    {renderRichText(paragraph)}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-3 text-gray-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 leading-relaxed">
                        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                          ✓
                        </span>
                        <span>{renderRichText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.faqs && (
            <section
              id="frequently-asked-questions"
              className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 transition open:bg-white"
                  >
                    <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-gray-900">
                      {faq.question}
                    </summary>
                    <p className="mt-4 leading-8 text-gray-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <h2 className="mb-4 text-3xl font-bold">
              {post.cta?.title ?? "Explore more insights"}
            </h2>
            <p className="mb-6 max-w-3xl text-white/90">
              {post.cta?.text ??
                "Continue exploring practical guidance from Entro Ethiopia on digital systems, software strategy, and business growth."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={post.cta?.buttonHref ?? "/blog"}
                className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:bg-slate-100"
              >
                {post.cta?.buttonLabel ?? "Back to Blog"}
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Blog
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageShell>
  );
}

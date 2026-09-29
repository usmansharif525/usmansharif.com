import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/Mdx";
import {
  getContentBySlug,
  getSlugs,
  type WorkFrontmatter,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getSlugs("work").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const item = getContentBySlug<WorkFrontmatter>("work", slug);
    return {
      title: item.frontmatter.title,
      description: item.frontmatter.summary,
    };
  } catch {
    return { title: "Case study" };
  }
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const slugs = getSlugs("work");
  if (!slugs.includes(slug)) notFound();

  const item = getContentBySlug<WorkFrontmatter>("work", slug);
  const { frontmatter, content } = item;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/work"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        ← All work
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
          {frontmatter.category}
        </span>
        <span>
          {frontmatter.client} · {frontmatter.year}
        </span>
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {frontmatter.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {frontmatter.summary}
      </p>

      {frontmatter.metrics && frontmatter.metrics.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {frontmatter.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      {frontmatter.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-10 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/Mdx";
import {
  getContentBySlug,
  getSlugs,
  type WritingFrontmatter,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getSlugs("writing").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const item = getContentBySlug<WritingFrontmatter>("writing", slug);
    return {
      title: item.frontmatter.title,
      description: item.frontmatter.summary,
    };
  } catch {
    return { title: "Writing" };
  }
}

export default async function WritingSlugPage({ params }: Props) {
  const { slug } = await params;
  const slugs = getSlugs("writing");
  if (!slugs.includes(slug)) notFound();

  const item = getContentBySlug<WritingFrontmatter>("writing", slug);
  const { frontmatter, content } = item;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/writing"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
      >
        ← All writing
      </Link>
      <time className="mt-6 block text-sm font-medium uppercase tracking-wide text-zinc-500">
        {frontmatter.date}
      </time>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {frontmatter.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {frontmatter.summary}
      </p>
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

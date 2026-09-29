import type { Metadata } from "next";
import { PostCard } from "@/components/Cards";
import { getAllContent, type WritingFrontmatter } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on software engineering, digital growth, and shipping products from Usman Sharif.",
};

export default function WritingIndexPage() {
  const posts = getAllContent<WritingFrontmatter>("writing");

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        Writing
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Notes & essays
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Thinking out loud on engineering craft, technical marketing, and building
        digital businesses.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((item) => (
          <PostCard
            key={item.slug}
            slug={item.slug}
            title={item.frontmatter.title}
            summary={item.frontmatter.summary}
            date={item.frontmatter.date}
            tags={item.frontmatter.tags}
          />
        ))}
      </div>
    </div>
  );
}

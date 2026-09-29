import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/Cards";
import { getAllContent, type WorkFrontmatter } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software and digital growth case studies from Usman Sharif.",
};

export default function WorkIndexPage() {
  const work = getAllContent<WorkFrontmatter>("work");

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        Work
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Selected case studies
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        A mix of software and growth engagements. Replace the sample entries with
        your real client work when you&apos;re ready.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {work.map((item) => (
          <CaseStudyCard
            key={item.slug}
            slug={item.slug}
            title={item.frontmatter.title}
            summary={item.frontmatter.summary}
            category={item.frontmatter.category}
            client={item.frontmatter.client}
            year={item.frontmatter.year}
          />
        ))}
      </div>
    </div>
  );
}

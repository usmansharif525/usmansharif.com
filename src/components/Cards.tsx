import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function AvailabilityBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-400 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {siteConfig.availability}
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
  href: string;
  cta: string;
};

export function ServiceCard({
  title,
  description,
  items,
  href,
  cta,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
      >
        {cta} →
      </Link>
    </div>
  );
}

type CaseStudyCardProps = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  client: string;
  year: string;
};

export function CaseStudyCard({
  slug,
  title,
  summary,
  category,
  client,
  year,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
          {category}
        </span>
        <span>
          {client} · {year}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 group-hover:underline dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{summary}</p>
    </Link>
  );
}

type PostCardProps = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags?: string[];
};

export function PostCard({ slug, title, summary, date, tags }: PostCardProps) {
  return (
    <Link
      href={`/writing/${slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <time className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {date}
      </time>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 group-hover:underline dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{summary}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

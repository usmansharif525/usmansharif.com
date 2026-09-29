import Link from "next/link";
import {
  AvailabilityBadge,
  CaseStudyCard,
  PostCard,
  ServiceCard,
} from "@/components/Cards";
import {
  getFeaturedWork,
  getLatestWriting,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

const proof = [
  { label: "Years building software", value: "10+" },
  { label: "Focus areas", value: "Build + Grow" },
  { label: "Stacks", value: "Web, SaaS, Cloud" },
  { label: "Engagements", value: "Projects & retainers" },
];

export default function HomePage() {
  const featuredWork = getFeaturedWork();
  const latestPosts = getLatestWriting(3);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <AvailabilityBadge />
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          I build software and help businesses grow online.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I&apos;m {siteConfig.name} — a software engineer with over a decade of
          experience, now also partnering with businesses on digital growth.
          Custom software stays on the table. Marketing is an added lever, not a
          replacement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact?need=software"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Build something
          </Link>
          <Link
            href="/contact?need=marketing"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Grow my business
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Two doors in
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Pick software, growth, or both — under one personal brand.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-medium text-zinc-900 underline-offset-4 hover:underline sm:inline dark:text-zinc-50"
            >
              All services →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ServiceCard
              title="Software"
              description="Custom web apps, SaaS products, APIs, integrations, and automation — engineered for clarity and longevity."
              items={[
                "Web apps & SaaS platforms",
                "APIs, integrations & automation",
                "Architecture & technical consulting",
                "Ongoing engineering partnerships",
              ]}
              href="/services#software"
              cta="Explore software"
            />
            <ServiceCard
              title="Digital growth"
              description="SEO, performance ads, funnels, and analytics — informed by how products actually get built and shipped."
              items={[
                "Technical SEO & content strategy",
                "Paid acquisition & landing pages",
                "Funnels & conversion systems",
                "Tracking, analytics & reporting",
              ]}
              href="/services#growth"
              cta="Explore growth"
            />
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {proof.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Selected work
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Software and growth case studies — side by side.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-zinc-900 underline-offset-4 hover:underline sm:inline dark:text-zinc-50"
            >
              All work →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredWork.map((item) => (
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
      </section>

      {/* Latest writing */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Latest writing
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Notes on engineering, growth, and shipping digital products.
              </p>
            </div>
            <Link
              href="/writing"
              className="hidden text-sm font-medium text-zinc-900 underline-offset-4 hover:underline sm:inline dark:text-zinc-50"
            >
              All posts →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestPosts.map((item) => (
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
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 bg-zinc-900 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Whether you need software, growth, or a bit of both — tell me what
            you&apos;re working on.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}

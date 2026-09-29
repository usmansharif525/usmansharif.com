import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development and digital growth services — build, grow, or both under one partner.",
};

const softwareServices = [
  {
    title: "Web apps & SaaS",
    body: "Product-minded engineering for customer-facing apps, internal tools, and multi-tenant platforms.",
  },
  {
    title: "APIs & integrations",
    body: "Reliable backends, third-party integrations, webhooks, and data pipelines that keep systems in sync.",
  },
  {
    title: "Automation",
    body: "Workflow automation that removes manual ops — from lead routing to reporting and billing hooks.",
  },
  {
    title: "Technical consulting",
    body: "Architecture reviews, stack decisions, and hands-on guidance when you need a senior engineer in the room.",
  },
];

const growthServices = [
  {
    title: "Technical SEO",
    body: "Site structure, Core Web Vitals, indexing, and content that ranks because the foundation is solid.",
  },
  {
    title: "Paid acquisition",
    body: "Campaign setup and landing-page systems for search and social — measured against real revenue outcomes.",
  },
  {
    title: "Funnels & conversion",
    body: "Clear journeys from attention to action: offers, pages, emails, and experiments that compound.",
  },
  {
    title: "Analytics & tracking",
    body: "Clean event schemas, attribution you can trust, and dashboards that answer “what’s working?”",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        Services
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Build. Grow. Or both.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Software engineering and digital growth sit side by side. You can hire me
        for either — or combine them into a launch package that ships the product
        and the go-to-market system together.
      </p>

      <section id="software" className="mt-16 scroll-mt-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Software
          </h2>
          <Link
            href="/contact?need=software"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Start a software project →
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Over 10 years shipping production systems. I still take on engineering
          contracts, product builds, and ongoing technical partnerships.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {softwareServices.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="growth" className="mt-16 scroll-mt-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Digital growth
          </h2>
          <Link
            href="/contact?need=marketing"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Start a growth project →
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Marketing with an engineer&apos;s bias for measurement, systems, and
          shipping. Especially useful for SaaS, e-commerce, and tech-forward
          businesses.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {growthServices.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="launch" className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-900 p-8 text-white dark:border-zinc-700 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">
            Bundle
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Launch package
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Site or product build + SEO foundation + ads/funnel setup + analytics.
            One partner from first commit to first customers — useful when you
            don&apos;t want to juggle an agency and a freelancing engineer.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
            <li>• Discovery & positioning</li>
            <li>• Build (site, app, or landing system)</li>
            <li>• SEO & content kickstart</li>
            <li>• Ads / funnel + tracking</li>
          </ul>
          <Link
            href="/contact?need=both"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Ask about a launch package
          </Link>
        </div>
      </section>
    </div>
  );
}

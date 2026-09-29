import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityBadge } from "@/components/Cards";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer with 10+ years of experience, exploring digital growth while continuing to take on software clients.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Engineer first. Growth partner too.
      </h1>
      <AvailabilityBadge className="mt-6" />

      <div className="prose-like mt-10 space-y-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
        <p>
          I&apos;m {siteConfig.name}. I&apos;ve spent more than a decade as a
          software engineer — building products, shaping architectures, and
          shipping systems that real people rely on.
        </p>
        <p>
          Lately I&apos;m exploring a digital services path — likely marketing
          and growth related — because I keep seeing the same pattern: great
          software without distribution stalls, and growth work without technical
          depth hits a ceiling.
        </p>
        <p>
          <strong className="font-semibold text-zinc-900 dark:text-zinc-50">
            That doesn&apos;t mean I&apos;m stepping away from software clients.
          </strong>{" "}
          I still take on engineering projects, product builds, and technical
          partnerships. Growth is an expansion of what I offer, not a pivot away
          from writing code.
        </p>
        <p>
          This site is my personal hub. Over time, a separate agency brand may
          live under Ventures — but the work, and the relationship, still starts
          here.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Experience", value: "10+ years" },
          { label: "Offering", value: "Software + growth" },
          { label: "Model", value: "Project & retainer" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm text-zinc-500">{item.label}</p>
            <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          How we might work together
        </h2>
        <ol className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              1. Conversation —
            </span>{" "}
            Share what you need (software, growth, or both).
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              2. Scope —
            </span>{" "}
            Clear outcomes, timeline, and engagement shape.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              3. Build & measure —
            </span>{" "}
            Ship in focused cycles with visible progress.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              4. Iterate —
            </span>{" "}
            Keep what works; improve what doesn&apos;t.
          </li>
        </ol>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Get in touch
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          See selected work
        </Link>
      </div>
    </div>
  );
}

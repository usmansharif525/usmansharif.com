import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for software development, digital growth, or a combined launch engagement.",
};

type Props = {
  searchParams: Promise<{ need?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { need } = await searchParams;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s talk about what you need.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Software, marketing, both, or you&apos;re not sure yet — use the form
            and I&apos;ll reply within 1–2 business days.
          </p>

          <div className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Email:
              </span>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                Book a call:
              </span>{" "}
              <a
                href={siteConfig.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                cal.com/usmansharif
              </a>
            </p>
            <p className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              {siteConfig.availability}. Prefer software-only work? Say so —
              that&apos;s still a core part of what I do.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <ContactForm defaultNeed={need} />
        </div>
      </div>
    </div>
  );
}

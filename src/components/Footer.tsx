import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              Software engineer & digital growth partner. Building products and
              helping businesses grow online.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Connect
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Ventures
              </p>
              <p className="mt-3 max-w-[12rem] text-sm text-zinc-500 dark:text-zinc-500">
                Agency brand coming soon.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.availability}</p>
        </div>
      </div>
    </footer>
  );
}

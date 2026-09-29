import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-7 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mb-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-4 list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-6 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-zinc-100"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props} />
  ),
};

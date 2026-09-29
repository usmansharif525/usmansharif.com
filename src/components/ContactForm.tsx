"use client";

import { useActionState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/actions/contact";
import { siteConfig } from "@/lib/site";

const initialState: ContactState = {
  success: false,
  message: "",
};

type ContactFormProps = {
  defaultNeed?: string;
};

export function ContactForm({ defaultNeed }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  const needDefault =
    defaultNeed &&
    ["software", "marketing", "both", "not-sure"].includes(defaultNeed)
      ? defaultNeed
      : "";

  if (state.success) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          placeholder="Your name"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          placeholder="you@company.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="need"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          What do you need?
        </label>
        <select
          id="need"
          name="need"
          required
          defaultValue={needDefault}
          className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="software">Software</option>
          <option value="marketing">Marketing</option>
          <option value="both">Both</option>
          <option value="not-sure">Not sure</option>
        </select>
        {state.errors?.need && (
          <p className="mt-1 text-sm text-red-600">{state.errors.need[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          placeholder="Tell me about your project, timeline, and goals..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <a
          href={siteConfig.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Or book a call
        </a>
      </div>
    </form>
  );
}

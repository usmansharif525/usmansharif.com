# usmansharif.com

Personal hub for [Usman Sharif](https://usmansharif.com) — software engineer & digital growth partner.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- MDX content in `content/work` and `content/writing`
- Contact form via server action + [Resend](https://resend.com) (optional)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` if you want contact emails delivered. Without it, submissions are logged on the server.

## Content

- Case studies: `content/work/*.mdx`
- Blog posts: `content/writing/*.mdx`

Frontmatter fields are typed in `src/lib/content.ts`. Sample entries are placeholders — replace with real clients, metrics, and photos.

## Deploy

Deploy to [Vercel](https://vercel.com). Set the same env vars in the project settings. Update social links and email in `src/lib/site.ts`.

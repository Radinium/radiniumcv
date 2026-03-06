# Mohammad Afshar — Interactive CV

A personal, web-based CV built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This project is my online resume and portfolio, including:

- Professional summary and contact links
- Work experience and education
- Categorized skills
- Publications and projects
- Print-friendly layout and Open Graph preview image

## Live Deployment

Deploy on Vercel and set:

- `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`

This ensures social metadata (Open Graph/Twitter cards) resolves correctly.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- GraphQL (Apollo + type-graphql)

## Project Structure

- `src/data/resume-data.tsx` — Main CV content
- `src/app/components/*` — UI sections (Header, Skills, Projects, Publications, etc.)
- `src/app/page.tsx` — Main CV page + metadata
- `src/app/opengraph-image.tsx` — Generated OG image
- `src/app/graphql/route.ts` — GraphQL endpoint

## Local Development

> This repository uses **Yarn** as the package manager.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Lint

```bash
yarn lint
yarn build
```

## Customize My CV Content

All core resume content is in:

- `src/data/resume-data.tsx`

Update this file to modify profile details, experience, skills, projects, publications, and references.

## Docker (Optional)

```bash
docker compose build
docker compose up -d
```

Stop:

```bash
docker compose down
```

## License

MIT

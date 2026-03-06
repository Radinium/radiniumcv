# Radinium CV

A Next.js resume/portfolio site for Mohammad Afshar.

## Tech stack

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Apollo GraphQL endpoint (`/graphql`)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Environment variables

To ensure correct social metadata URL generation in production, set:

- `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`)

If not set, the app falls back to `VERCEL_URL` (on Vercel) and then `http://localhost:3000`.

## Deploying on Vercel

1. Import the repository in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to your canonical production domain.
3. Deploy.

This avoids metadata warnings related to `metadataBase` and ensures Open Graph/Twitter image URLs are resolved correctly.

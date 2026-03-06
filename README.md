![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

# Radinium CV

Simple web app that renders a minimalist, print-friendly CV.

Built with Next.js and shadcn/ui, deployed on Vercel.

## Features

- Single resume config file: [`src/data/resume-data.tsx`](./src/data/resume-data.tsx)
- Next.js 14 + React + TypeScript + Tailwind + shadcn/ui
- Responsive layout
- Print-friendly output
- Open Graph image route for social sharing

## Getting Started Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/Radinium/radiniumcv.git
   ```

2. Move to the project directory:

   ```bash
   cd radiniumcv
   ```

3. Install dependencies (**Yarn only**):

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open [`src/data/resume-data.tsx`](./src/data/resume-data.tsx) and customize your resume.

## Vercel Deployment Notes

To avoid metadata warnings and ensure correct social URL generation, set:

- `NEXT_PUBLIC_SITE_URL` = your production site URL (for example `https://radiniumcv.vercel.app`)

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://radiniumcv.vercel.app
```

## Package Manager Consistency

This project is managed with **Yarn**. To avoid lockfile warnings, keep only:

- `yarn.lock`

Do not commit npm lockfiles (such as `package-lock.json`).

## Run with Docker

Build the container:

```bash
docker compose build
```

Run the container:

```bash
docker compose up -d
```

Stop the container:

```bash
docker compose down
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

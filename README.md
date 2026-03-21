# Udtarakviseth Lay Portfolio

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Sanity (headless CMS)
- Formspree (contact form handling)

## Current Features

- Responsive sections: Hero, About, Skills, GitHub Stats, Projects, Experience, Contact
- Theme toggle (light/dark mode)
- Animated project details modal with keyboard and focus handling
- Embedded Sanity Studio route at `/studio`
- SEO metadata + sitemap route
- Custom `not-found` page

## Project Structure

```text
src/
	app/
	components/
		layout/
		sections/
		ui/
	data/
	hooks/
	lib/
```

## Environment Variables

Use `.env.example` as the template and create `.env.local` for local development.

Required variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_FORMSPREE_ID`

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Sanity Content Management

1. Start app with `npm run dev`.
2. Open `http://localhost:3000/studio`.
3. Sign in and update documents (Project, Skill, Profile, Experience).

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - serve production build
- `npm run lint` - run ESLint

## Deployment Checklist

- [ ] Replace resume placeholder with real `resume.pdf` in `/public`
- [ ] Set all environment variables in Vercel dashboard
- [ ] Replace LinkedIn URL with real profile URL if changed
- [ ] Update `src/app/sitemap.ts` with real domain after deployment
- [ ] Log into Sanity Studio at `/studio` and add real content
- [ ] Test contact form submission end to end
- [ ] Test on mobile device before sharing with recruiters

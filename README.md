This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Content Management

This portfolio now supports a headless CMS using Sanity. That means you can update projects, profile content, and skill data from a web dashboard without editing source code.

### Log into Sanity Studio

1. Start your app with `npm run dev`.
2. Open `http://localhost:3000/studio`.
3. Sign in with your Sanity account.
4. You will see document types like Project, Skill, Profile, and Experience.

### Add a New Project

1. Go to **Project** in Studio.
2. Click **Create new document**.
3. Fill in required fields:
	- `title`
	- `slug` (generated from title)
	- `description`
	- `longDescription`
4. Add optional fields (tech, features, links, image, order, status, type).
5. Click **Publish**.
6. Reload the portfolio page to see your update.

### Toggle Open to Work Badge (No Code)

1. Open the **Profile** document in Studio.
2. Turn `openToWork` on/off.
3. Update `lookingFor` with your target internship window.
4. Publish changes.

### Update Resume URL

1. Open the **Profile** document.
2. Edit `resumeUrl` with your hosted PDF link (Google Drive, Dropbox, etc.).
3. Publish changes.

## Deployment Checklist

- [ ] Replace resume placeholder with real resume.pdf in /public
- [ ] Set all environment variables in Vercel dashboard
- [ ] Replace LinkedIn URL with real profile URL if changed
- [ ] Update sitemap.ts with real domain after deployment
- [ ] Log into Sanity Studio at /studio and add real content
- [ ] Test contact form submission end to end
- [ ] Test on mobile device before sharing with recruiters

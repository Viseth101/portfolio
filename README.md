# Udtarakviseth Lay — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, 
Tailwind CSS, and Framer Motion. Content managed via Sanity CMS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io
- **Contact form**: Formspree
- **Deployment**: Vercel

## Running locally

1. Clone the repo
   git clone https://github.com/viseth101/portfolio.git

2. Install dependencies
   npm install

3. Set up environment variables
   cp .env.example .env.local
   # Fill in your values in .env.local

4. Run the dev server
   npm run dev
   # Open http://localhost:3000

5. Run Sanity Studio (in a separate terminal)
   cd studio && npm run dev
   # Open http://localhost:3333

## Deployment
Deployed automatically to Vercel on every push to `main`.
Add your environment variables in the Vercel project settings.

## Content
All portfolio content (projects, bio, skills) is managed through 
Sanity Studio at /studio. No code changes needed to update content.
```

---

### 3. Commit Message Convention

Use this format consistently — it makes your commit history look clean and professional, which recruiters and interviewers do sometimes scroll through:
```
type: short description

feat: add hero section with typewriter animation
fix: resolve mobile navbar overflow on 375px
style: update accent color to match design system
chore: add sanity schema for projects
docs: update README with deployment steps
refactor: extract useTypewriter into custom hook
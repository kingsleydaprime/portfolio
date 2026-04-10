# kingsleydaprime — Personal Portfolio

> The personal portfolio and digital home of Kingsley Ihemelandu — Systems Engineer, Software Developer, and Founder.

Live at: [kingsleydaprime.vercel.app](https://kingsleydaprime.vercel.app)

---

## About

This is my personal portfolio site — built to showcase my work, tell my story, and connect with people worth connecting with. It is not a template. Every section, every line of copy, and every design decision was intentional.

Built with Next.js 15 and Tailwind CSS v4.

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — Hero, About snippet, Experience preview, Projects preview, Skills, Services, Volunteering, Testimonials, Others, CTA |
| `/about` | Full story, values, and currently section |
| `/projects` | Full project list with search and filters |
| `/experience` | Full work history with search and filters |
| `/education` | Academic background and coursework |
| `/kaizen` | The Kaizen Project — community impact initiative |
| `/podcast` | The Growth Podcast — episodes and platforms |

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Language** — TypeScript
- **Icons** — [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons)
- **Fonts** — Inter (body) + Playfair Display (headings) via next/font/google
- **Deployment** — [Vercel](https://vercel.com)

---

## Features

- Fully responsive — mobile first
- Multipage with Next.js App Router
- Projects page with live search and filters (type, language, year)
- Experience page with search and filters
- Testimonials carousel with auto-advance
- SEO optimized — metadata, open graph, twitter cards, sitemap, robots.txt, JSON-LD structured data
- Design tokens via CSS custom properties
- Content managed via JSON data files — no CMS needed

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── education/
│   │   ├── kaizen/
│   │   ├── podcast/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── home/               # All home sections
│   │   └── projects/           # Projects client with search/filter
│   ├── constants/              # Site-wide constants and URLs
│   └── data/                   # JSON content files
│       ├── projects.json
│       ├── experience.json
│       ├── education.json
│       ├── skills.json
│       ├── services.json
│       ├── volunteering.json
│       └── testimonials.json
└── public/
    └── images/                 # Photos and project screenshots
```

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/kingsleydaprime/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Content

All content lives in `src/data/` as JSON files. To update:

- **Add a project** — add an entry to `projects.json`
- **Add an experience** — add an entry to `experience.json`
- **Add a testimonial** — add an entry to `testimonials.json`
- **Update skills** — edit `skills.json`

No code changes needed for content updates — just edit the JSON and push.

---

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic deployment.

To deploy your own fork:

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Update `SITE_URL` in `src/constants/index.ts` to your domain

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#FAFAF8` | Page background |
| `--color-primary` | `#1B3A6B` | Navy — headings, buttons, navbar |
| `--color-accent` | `#C9921A` | Gold — eyebrows, highlights |
| `--color-text` | `#1A1A1A` | Body text |
| `--color-text-muted` | `#6B7280` | Secondary text |
| `--color-surface` | `#F0F0EC` | Alternate section background |

---

## Contact

- Email — kingsley@spectroniq.com
- LinkedIn — [kingsleydaprime](https://linkedin.com/in/kingsleydaprime)
- Twitter/X — [@kingsleydaprime](https://x.com/kingsleydaprime)
- Linktree — [kingsleydaprime](https://linktr.ee/kingsleydaprime)

---

*Built by Kingsley Ihemelandu. All rights reserved.*
# Deltivex Technologies — Website

The official marketing website for Deltivex Technologies, built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components` — modular UI components grouped by domain (common, layout, home, services, projects, team, contact)
- `src/pages` — route-level pages
- `src/data` — content (navigation, services, projects, founders) — edit these to add/update content without touching components
- `src/hooks` — shared hooks (scroll reveal, media query)
- `src/lib` — constants and utility helpers
- `src/styles` — global CSS and design tokens

## Content notes

- Project GitHub/demo links and founder social links are placeholders (`"#"`) in `src/data/` until real URLs are available — search for `TODO` in that folder.
- Project cover art and founder avatars are procedurally generated (not real screenshots/photos) since none were supplied yet. Swap in real assets by updating `ProjectCard.jsx` / `FounderCard.jsx` once available.
- The contact form UI is production-ready but currently simulates submission — connect it to a real backend or email service before launch (see `src/components/contact/ContactForm.jsx`).

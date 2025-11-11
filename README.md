# Yabsra Portfolio – React + TypeScript + Vite

Modern, fast, and responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, Ant Design, Framer Motion, and React Router. The visual identity uses a bold yellow and black theme with the Poppins font.

This README documents the site structure, tech stack, development workflow, and styling context to help you (and contributors) work efficiently.

## Overview

- Purpose: Showcase projects, services, and contact information with a polished UX.
- Theme: Yellow (`#facc15`) on black/neutral backgrounds; clean, minimal components.
- Pages: Home, About, Projects, Feedback, Contact, Services.
- Components: Navbar, Footer, ProjectCard, FeedbackForm, Loader, Services.

## Features

- Responsive layout across mobile, tablet, and desktop.
- Animated UI with Framer Motion (entrance, transitions, menus).
- Project cards with images, tags, and external links.
- Feedback form using Ant Design; input borders removed for a clean look.
- Services section highlighting value propositions with icons.
- Centralized routing with React Router.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Ant Design
- Framer Motion
- React Router

## Getting Started

Prerequisites: Node.js 18+ and npm.

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.tsx
    Footer.tsx
    ProjectCard.tsx
    FeedbackForm.tsx
    Loader.tsx
    Service.tsx
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Feedback.tsx
    Contact.tsx
    ServicePage.tsx
  data/projects.ts
  index.css
  App.tsx
  main.tsx
```

## Routing

- `Home` – hero, intro links.
- `About` – profile image and bio (with subtle animation).
- `Projects` – grid of project cards sourced from `data/projects.ts`.
- `Feedback` – Ant Design form for collecting comments.
- `Contact` – contact details and links.
- `ServicePage` – services/features section.

## Styling Context

- Tailwind configuration extends theme colors and font:

```js
// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15', // yellow
        secondary: '#111827', // near-black
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
```

- Inputs: Ant Design focus/hover borders are overridden via theme tokens and inline styles to keep inputs borderless.
  - `FeedbackForm.tsx`: `style={{ boxShadow: 'none', border: 'none' }}` on `Input` and `Input.TextArea`.
  - AntD theme tokens: `colorBorder`, `activeBorderColor`, and `hoverBorderColor` set to `transparent`.

## PostCSS Configuration Note

If you encounter an error about using `tailwindcss` directly as a PostCSS plugin, use the official wrapper:

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## Components Overview

- `Navbar.tsx` – animated, responsive navigation; yellow accents on a black background.
- `ProjectCard.tsx` – shows title, description, tags, and action buttons.
- `FeedbackForm.tsx` – vertical form with minimal, borderless inputs and yellow submit button.
- `Service.tsx` – services grid with icons, neutral dark panels, and yellow highlights.
- `Footer.tsx` – simple footer with links and attribution.

## Data Model

- `data/projects.ts` defines project interfaces and mock data used on the Projects page.

## Deployment

- Output is generated in `dist`. Deploy to Vercel, Netlify, or any static host.
- Example (Netlify): drag-and-drop `dist` or connect the repo and set build command `npm run build` and publish directory `dist`.

## Contributing

- Fork the repo and create feature branches.
- Keep changes focused; match the existing coding style.
- Open a PR describing the change and its impact.

## Acknowledgements

- Built with React, TypeScript, Vite, Tailwind CSS, Ant Design, and Framer Motion.

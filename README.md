# Prodesk Cloud — Landing Page

> Sprint 01 Deliverable · Prodesk IT — Associate Software Engineering Team

A fully responsive, accessible marketing landing page for **Prodesk Cloud**, a real-time product analytics platform. Built with semantic HTML5, modern CSS (Grid/Flexbox + Custom Properties), and vanilla JavaScript — no frameworks, no dependencies.

**Live Demo:** [Add deployment URL here]
**Repository:** [Add GitHub URL here]

---

## 📸 Preview

| Desktop | Mobile |
|---|---|
| _Add screenshot_ | _Add screenshot_ |

---

## ✨ Features

### Layout & Structure
- Fully responsive across mobile (320px), tablet (768px), and desktop (1024px+) breakpoints
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`) for SEO and accessibility
- Sticky navigation with logo, links, and a CSS-driven mobile hamburger menu
- Hero, Features, Services, Why Us, Stats, Testimonials, Pricing, FAQ, and Contact CTA sections
- Feature/Service grids that auto-collapse to a single column on mobile via CSS Grid `auto-fit`

### Interaction & Polish
- Smooth hover, focus, and active states on all interactive elements
- Keyframe fade-in-up animation on hero content load
- Google Fonts (Inter) typography scale using `rem`/`em` units throughout
- Design-token color system via CSS Custom Properties (no hardcoded hex values in components)
- Accordion-style FAQ section with proper ARIA attributes
- Dark mode toggle using `prefers-color-scheme` + manual override, persisted in `localStorage`

### Performance & Accessibility
- Explicit `width`/`height` on all images to prevent layout shift (CLS)
- `loading="lazy"` on below-the-fold images; `fetchpriority="high"` on the hero image
- WebP image format support
- Skip-to-content link for keyboard/screen-reader users
- Visible focus states (`:focus-visible`) meeting WCAG contrast guidelines
- `prefers-reduced-motion` support to disable animations for users who request it

## 🗂️ Project Structure

```
├── index.html          # Page markup (semantic sections, nav, forms)
├── style.css            # Design tokens, layout, components, responsive rules
├── script.js             # Nav toggle, theme toggle, FAQ accordion, footer year
└── assets/
    ├── icons/            # Logo / favicon
    └── images/           # Hero image, OG preview, testimonial avatars
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox |
| Behavior | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Inter) |
| Hosting | *(add: Vercel / Netlify / GitHub Pages)* |

No build tools, frameworks, or external JS libraries — pure HTML/CSS/JS.

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd prodesk-cloud-landing
   ```
2. Open `index.html` directly in a browser, or serve locally:
   ```bash
   npx serve .
   ```
3. No build step or dependencies required.

## 🎨 Design System

Colors, typography, spacing, and radii are defined as CSS Custom Properties in `style.css` under `:root`, with a light-mode override via `prefers-color-scheme` and a `.theme--dark` class for manual dark-mode toggling. This keeps the palette consistent and swappable in one place rather than scattered across components.

## 📄 License

Internal training project — Prodesk IT Sprint 01. Not licensed for external distribution.

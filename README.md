# Prodesk Cloud

## Corporate Analytics Landing Page

A modern, responsive SaaS-style landing page for Prodesk Cloud, an enterprise analytics platform. Built with HTML5, CSS3, and vanilla JavaScript, optimized for Lighthouse-oriented performance, accessibility, scalability, and clean frontend architecture.

---

## Project path

The local project path provided is:

```
D:\.idea\documents\PRODESK 3\PRODESK
```

---

## Final file structure

```
D:\.idea\documents\PRODESK 3\PRODESK
├── index.html
├── style.css
├── script.js
├── .gitignore
├── README.md
└── assets
    ├── icons
    │   └── logo.png
    └── images
        ├── hero-dashboard.webp
        ├── og-preview.webp
        ├── testimonial-1.webp
        └── testimonial-2.webp
```

This structure preserves the original README intent while aligning it with the actual asset paths and linked files referenced in the uploaded HTML. The uploaded code files were named `index-2.html`, `style-5.css`, `script-4.js`, and `file.gitignore-3`, but the README below documents the intended production names `index.html`, `style.css`, `script.js`, and `.gitignore`.

---

## 1. Project Overview

This project implements a production-quality corporate landing page designed to simulate work at a top product company. It:

- Uses only the core web stack: HTML5, CSS3, and vanilla JS, with no frameworks or CSS libraries.
- Implements a mobile-first, responsive layout across a wide viewport range, with actual breakpoints defined at 640px, 768px, 1024px, and 1440px in the stylesheet.
- Follows semantic HTML structure, accessibility-oriented patterns, and SEO-friendly metadata.
- Is structured like a production landing page with reusable components, clear sections, and maintainable styling and scripting.

---

## 2. Tech Stack

- **HTML5** — Semantic structure, metadata, navigation, forms, and page sections.
- **CSS3** — Custom design tokens, layout system, transitions, animations, card patterns, responsive breakpoints, and theme styling.
- **Vanilla JavaScript (ES6)** — Navigation behavior, FAQ accordion, dark mode handling, footer year updates, and subscribe form utilities.
- **No frameworks** — No Bootstrap, Tailwind, React, Vue, jQuery, or CSS libraries.
- **Google Fonts (Inter)** — Loaded through the HTML head as the primary typeface.

---

## 3. Features & Sections

All sections are implemented and linked through the sticky navigation.

**Sticky Navigation** (`header`, `.nav`)

- Hero (`#hero`)
- Features (`#features`)
- Services (`#services`)
- Why Choose Us / Why Prodesk (`#why`)
- Statistics (`#stats`)
- Testimonials (`#testimonials`)
- Pricing (`#pricing`)
- FAQ (`#faq`)
- Contact CTA (`#contact-cta`)
- Footer (`footer`)

### Layout & Design

- Modern SaaS-inspired visual direction with card-based sections, strong hierarchy, and polished conversion-oriented page flow.
- Reusable button styles such as `.button`, `.button--primary`, and `.button--ghost`.
- Reusable card patterns including `.card--feature`, `.card--service`, `.card--testimonial`, and `.card--pricing`.
- Hero fade-in animation, hover states, and keyboard focus states are implemented in the CSS and JS structure.

---

## 4. Architecture & File Structure

### Project root

```
project-root/
├── index.html
├── style.css
├── script.js
├── .gitignore
├── README.md
└── assets/
    ├── images/
    └── icons/
```

This is the intended clean structure of the project. In the uploaded version, the code appeared as `index-2.html`, `style-5.css`, `script-4.js`, and `file.gitignore-3`, but the implementation clearly maps to the standard production filenames shown above.

### HTML — `index.html`

- Semantic structure with `header`, `main`, `section`, `nav`, `form`, and `footer`.
- Accessibility features such as skip link, ARIA attributes, structured headings, and button semantics.
- SEO-oriented metadata including title, meta description, Open Graph tags, Twitter card tags, canonical link, theme-color, and favicon links.
- Content sections for hero, features, services, why us, stats, testimonials, pricing, FAQ, contact form, and footer subscription area.

### CSS — `style.css`

- Design tokens through CSS variables for colors, typography, spacing, radii, shadows, transitions, and layout widths.
- Responsive layout using mobile-first styling and explicit breakpoints at 640px, 768px, 1024px, and 1440px.
- Theme system with light preference handling and `.theme--dark` overrides.
- BEM-style naming and component-level styling for navigation, hero, cards, pricing, FAQ, contact form, and footer.
- Reduced-motion support for accessibility-sensitive users.

### JavaScript — `script.js`

- `initNav()` manages the mobile navigation menu, toggle state, `aria-expanded`, and resize reset behavior.
- `initThemeToggle()` resolves preferred theme, applies `.theme--dark`, syncs button state, and stores the selected theme under `prodesk-theme` in `localStorage`.
- `initFAQ()` runs the FAQ accordion and keeps only one item open at a time.
- `initFooterYear()` automatically updates the footer year from the current date.
- `initSubscribeForm()` submits the newsletter form using `fetch()` and updates button state after success.

### `.gitignore`

- Currently ignores `.DS_Store`.

### Assets

The HTML references the following assets, which should exist inside the project for the page to render correctly:

- `assets/icons/logo.png`
- `assets/images/hero-dashboard.webp`
- `assets/images/og-preview.webp`
- `assets/images/testimonial-1.webp`
- `assets/images/testimonial-2.webp`

---

## 5. Accessibility

This project follows accessibility-oriented implementation practices.

- Semantic HTML landmarks such as `header`, `main`, `section`, `footer`, and `nav`.
- ARIA usage on navigation toggle, FAQ accordion controls, footer/social areas, and theme toggle states.
- Keyboard-accessible controls through real button elements and visible focus styles.
- Skip link support for keyboard and assistive technology users.
- Reduced-motion handling via CSS media query.
- Form labels and structured control markup for contact and subscription forms.

---

## 6. Performance & Lighthouse

The project is designed as a lightweight static site with performance-friendly implementation choices.

- Single HTML entry point with one CSS file and one JavaScript file.
- Script loaded using `defer` to reduce render blocking.
- Image dimensions included in HTML for better layout stability.
- Lazy loading used for non-critical testimonial and footer images where applicable.
- Mobile-first stylesheet and minimal JavaScript footprint.

---

## 7. SEO

SEO best practices implemented in the project include:

- Descriptive page title and meta description.
- Open Graph and Twitter card metadata for social previews.
- Canonical URL and favicon declarations.
- Semantic heading structure with a single `h1` and section `h2` elements.
- Responsive layout and performance-conscious implementation that support better page quality signals.

---

## 8. Running the Project Locally

- Clone or download the repository.
- Open `index.html` directly in your browser, or serve it locally for more reliable asset and form behavior.
- Use one of the following commands:

**Python 3**

```bash
python -m http.server 3000
```

**Node.js**

```bash
npx serve .
```

Then open [http://localhost:3000](http://localhost:3000).

---

## 9. Deployment

You can deploy this project to any static hosting service. Recommended options include GitHub Pages, Netlify, and Vercel. The project does not require a build step because it is composed of static files only.

### GitHub Pages

- Push the project to a GitHub repository.
- Go to **Settings > Pages**.
- Select the main branch and root folder.
- Save and publish.

### Netlify

- Create a new site from Git.
- Connect the repository.
- Use default settings with no build command and root as the publish directory.
- Deploy the site.

### Vercel

- Import the repository as a new project.
- Use static project settings with no build command.
- Set the output directory to root if needed.
- Deploy the site.

---

## 10. Git Workflow Suggested

- Initialize Git and create a public repository.
- Use semantic commit messages such as:

```
chore: initialize project structure
feat: implement hero and features sections
feat: add responsive navigation and dark mode
feat: add faq accordion and contact form
perf: optimize layout and interactions
docs: update readme with deployment instructions
```

This commit discipline mirrors real-world engineering practices and makes the project easier to review and maintain.

---

## 11. How This Project Meets the Sprint Requirements

- **Core Web Only** — HTML5, CSS3, and vanilla JS without frameworks or CSS libraries.
- **Clean Architecture** — Semantic HTML, reusable CSS structure, and modular JavaScript responsibilities.
- **Responsive Design** — Mobile-first layout with multiple responsive breakpoints.
- **Accessibility** — Semantic landmarks, ARIA support, focus-visible styles, labels, and reduced motion support.
- **SEO Best Practices** — Metadata, social preview tags, heading structure, and mobile-friendly layout.
- **Performance Optimization** — Minimal JS, deferred loading, lightweight architecture, and asset-aware markup.
- **Dark Mode Architecture** — CSS variable-based theming with JavaScript-controlled `.theme--dark` state.
- **Interaction & Micro-Interactions** — Navigation toggle, hover/focus states, FAQ behavior, form interactions, and hero animation.
- **Scalable CSS** — Token-driven and component-based styling that can extend into a broader design system.

---

## 12. Notes for Reviewers / Interviewers

This project is intentionally structured as if it were the first slice of a larger design system.

- Blocks, elements, and tokens can be reused for additional pages such as product marketing, documentation, or blog pages.
- Dark mode and theme tokens make integration into a broader frontend system easier.
- The JavaScript architecture can be gradually wrapped or migrated later if a component framework is introduced.

---

## 13. Additional implementation notes

These notes were added from the actual codebase without removing the original README content:

- The theme preference is stored under the key `prodesk-theme`.
- The subscribe form uses asynchronous submission with `fetch()` and updates the button text to `Subscribed!` on success.
- The contact and subscription forms point to Formspree endpoints in the HTML.
- The HTML references `assets/icons/logo.png` for both favicon and brand logo usage.
- The page includes social/footer placeholders for X, LinkedIn, and GitHub.

---

## 14. Possible extensions

If you'd like to extend this project further, you can:

- Add additional FAQ items or new marketing sections.
- Integrate a production form backend or CRM workflow.
- Replace placeholder links and asset files with production-ready resources.
- Add analytics, monitoring, and form success/error UI while keeping the project lightweight.

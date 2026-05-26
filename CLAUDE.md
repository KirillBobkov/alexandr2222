# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14 static site** for psychological services (hypnotherapy, sacred amanita ceremonies, psychological transformation). The site is deployed at `https://alexandrvasilev.ru` (README references `modesta.tech`). All content is in Russian.

- **Framework**: Next.js 14.0.4 with static export (`output: 'export'`)
- **UI**: React 18.3.1 with CSS Modules
- **Language**: Mixed codebase — ~25 .js/.jsx files + ~14 .ts/.tsx files
- **Build Output**: `docs/` directory (for GitHub Pages deployment)
- **Pages**: 40+ page files — 7 main pages, 8 program pages, 20 blog posts
- **Dev Tooling**: No `tsconfig.json`, no ESLint, no Prettier. Jest configured but 0 tests written.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to docs/)
npm run start    # Start production server
npm run clean    # Remove docs directory
npm run test     # Run Jest tests (no test files exist yet)
```

## Architecture

### Static Site Generation
This is a **static site only** - no server-side rendering or API routes. The build outputs static HTML/CSS/JS to the `docs/` directory. Key implications:
- Images must be unoptimized (configured in `next.config.js`)
- Video files require custom webpack config
- All data must be available at build time
- No `getStaticProps`, `getServerSideProps`, or API routes

### Directory Structure
```
components/          # 35 component directories
  Layout/            # Layout.js, Head injection, parallax background
  Navigation/        # Responsive nav with hamburger menu (768px breakpoint)
  Footer/            # Social links, footer content
  ScrollTopButton/   # Scroll-to-top with arrow animation
  shared/            # Reusable: BaseButton, Button, FormValidator, Input,
                     # OrderForm, VisibilityManager
  Form/              # Contact form → Telegram API
  Preview/           # Hero/landing sections
  Final/             # CTA sections
  AboutMe/           # About section blocks
  Helping/           # "What I help with" section
  CirclesList/       # Circular feature list items
  Collapsible/       # Expandable accordion sections
  CourseContent/     # Course program content display
  TarifCard/         # Pricing cards + TarifModal
  TextReviews/       # Testimonial carousel (unused)
  VideoBlock/        # Single video embed wrapper
  VideoList/         # Video list container
  VideoPlayer/       # VK video iframe player
  VideoWidget/       # Video widget with modal
  StarsBackground/   # CSS starfield animation (unused)
  FractalTunnel/     # Three.js 3D visualization (unused, 1200+ lines)
  PhotoGrid/         # Image grid gallery (unused)
  SearchWidget/      # Search functionality
  SecondaryPreview/  # Secondary hero sections
  PurchaseSuccessWidget / Post-purchase success display
  ReasonCard/        # Single reason card
  ReasonCards/       # Reason cards container
  AnimatedLine/      # Animated decorative separator
  InnerQuestions/    # FAQ/inner questions section
  InnerSatisfaction/ # Client satisfaction section
  BlogCard/          # Blog post preview cards
  MetricsCode.jsx    # Yandex Metrika integration
pages/               # 40+ Next.js pages
  _app.js            # Root layout: ThemeProvider + MetricsCode
  index.js           # Homepage (heavy Schema.org JSON-LD)
  about-me.js        # About the specialist
  blog.js            # Blog listing with search (20 articles)
  ceremony.js        # Amanita ceremony (748 lines, collapsible sections)
  consultation.js    # Consultation booking (own styles, separate from Layout)
  neurotroubleshutting.js  # Hypnotherapy service page
  nonverbal-programming.js # Course sales page (TarifCard, PurchaseSuccessWidget)
  404.js             # Custom 404 page
  programs/          # 8 program pages (identical structure, different content)
  blog/              # 20 blog post pages (identical structure)
hooks/               # 4 custom React hooks
utils/               # validation.ts (phone, email, name validation)
consts/              # products.ts (6 product/program listings)
styles/              # reset.css, global.css + 7 page-level CSS modules
fonts/               # TTDaysSans typeface (duplicated in public/fonts/)
images/              # 63 files: .webp images + 1 teaser.mp4 (20MB)
public/              # robots.txt, sitemap.xml, legal documents (.txt)
```

### Component Patterns

**CSS Modules**: Each component has its own `.module.css` file for scoped styling.

**Dark Theme Only**: The site enforces dark theme through `useTheme` hook - no light theme exists.

**VisibilityManager HOC**: `components/shared/VisibilityManager.jsx` wraps `react-in-viewport` + `memo`. Provides scroll-triggered entrance animations (fade + translate from 6 directions: left, right, top, bottom, topmax, opacity). Used by 21 of 24 content components.

**FormValidator Render Props**: `components/shared/FormValidator/FormValidator.tsx` with typed interfaces (`FieldConfig`, `FormState`, `FormErrors`). Used by both `Form.jsx` (consultation) and `OrderForm.tsx` (payment).

**Layout Pattern**: Pages wrap content in Layout component:
```jsx
<Layout metaConfig={{ title, description, keywords }} schemaOrg={schemaData} seoContent={hiddenH1}>
  <Content />
</Layout>
```

**Private Sub-components**: TextBlock (in AboutMe, Helping), CircleItem (in CirclesList), QuestionItem (in InnerQuestions), PhotoItem (in PhotoGrid) are defined inside parent files.

### Dead Code (unused — safe to remove)

| File | Notes |
|------|-------|
| `components/PhotoGrid/` | Never imported anywhere |
| `components/TextReviews/` | Commented out in `nonverbal-programming.js` |
| `components/StarsBackground/` | Never imported |
| `components/FractalTunnel/` | 1200+ lines Three.js, never imported |
| `components/LineAnimation/` | Only CSS module exists, no JSX file |
| `hooks/useFormValidation.jsx` | Replaced by `FormValidator.tsx` component |
| Empty `.container { }` selectors | In AboutMe, Final, InnerSatisfaction, InnerQuestions, VideoBlock CSS modules |

### Dependencies

| Package | Version | Used? |
|---------|---------|-------|
| `next` | 14.0.4 | Core framework |
| `react`/`react-dom` | 18.3.1 | UI library |
| `react-in-viewport` | ^1.0.0-alpha.30 | VisibilityManager scroll animations |
| `react-input-mask` | ^2.0.4 | **Not imported anywhere** |
| `react-responsive-carousel` | ^3.2.23 | **Not imported anywhere** |
| `react-shaders` | ^0.0.4 | **Not imported anywhere** |
| `three` | ^0.161.0 | **Not imported anywhere** (only in FractalTunnel which is unused) |
| `jest` + `ts-jest` | ^30.x | Configured, **0 tests written** |

### API Endpoints (hardcoded — no .env files)

| Service | Endpoint | File |
|---------|----------|------|
| Telegram proxy | `https://shepsik.servemp3.com:4444/api/alexvasilev/send-message` | `Form.jsx` |
| Payment API | `https://6ce8d736a9b6.vps.myjino.ru/api/payment` | `OrderForm.tsx` |
| Yandex Metrika | Counter `100539520` | `MetricsCode.jsx` |

- No `.env` files exist — all configuration is hardcoded in source.
- Telegram proxy has no authentication — anyone who finds the endpoint could submit spam.
- Payment API has a 20-second timeout (`Promise.race`).

### Key Custom Hooks

| Hook | File | Status |
|------|------|--------|
| `useTheme` | `hooks/useTheme.jsx` | Active — forces dark theme, no-op `changeTheme` |
| `useMediaQuery` | `hooks/useMediaQuery.jsx` | Active — responsive breakpoint detection |
| `useScrollToLocation` | `hooks/useScrollToLocation.jsx` | Active — anchor/hash scroll on route change |
| `useFormValidation` | `hooks/useFormValidation.jsx` | **DEAD CODE** — replaced by FormValidator.tsx |

### SEO & Schema.org

The site heavily uses structured data for SEO:
- Schema.org JSON-LD injected via `<Script>` in Layout (WebPage, Person, Service, FAQPage, OfferCatalog, BreadcrumbList, LocalBusiness, Course, Blog)
- Kazan geocoordinates (55.7958, 49.1098) in homepage/ceremony schemas
- Yandex Metrika with webvisor, clickmap, trackLinks

**Known issues:**
- Person object "Alexander Vasiliev" duplicated ~20 times across pages
- `new Date().toISOString()` generates new timestamps on every build
- Hidden `<h1>` with keyword-stuffed text via `visibility: hidden; clip: rect(0,0,0,0)` in Layout.js (black-hat SEO)
- `inLanguage: "ru"` only on homepage, missing on other pages
- Manual `sitemap.xml`: all pages have `priority: 1.0`, duplicate root URL entries

### TypeScript Status

- **No `tsconfig.json`** — TS files compile via Next.js SWC only
- Mixed .js/.jsx/.ts/.tsx throughout `components/`
- `as any` casts in `SecondaryPreview.tsx:59` and `VideoWidget.tsx:19`
- Unsafe `formData as { name, email, phone }` cast in `OrderForm.tsx`
- No PropTypes on .jsx components

### CSS Architecture

- **Global CSS variables** in `styles/global.css`: `--accent` (#EDB834), `--accent-2` (purple), `--bg-color` (#000), `--font-color` (#fff), `--border-color` (green)
- **CSS reset**: `styles/reset.css` (New CSS Reset v1.11)
- **Font duplication**: TTDaysSans loaded via `next/font/local` in `fonts.js` AND via `@font-face` in `global.css` from `public/fonts/`
- **Duplicated gradient**: `linear-gradient(180deg, #a948b3a3 0, ...)` in both `BaseButton` and `Button` modules
- **Duplicated box-shadow**: `0px -3px 15px 0px var(--border-color)` in 6+ CSS modules
- **Duplicated `.loaded` opacity pattern**: In 6 CSS modules for image fade-in
- **Duplicated `.block` container**: `max-width: 1285px; padding: 100px 30px` in 3 modules

### Accessibility Issues

- `Input.tsx` relies on `placeholder` only — no `<label>` or `aria-label`
- `Collapsible.jsx` uses `<div onClick>` — should be `<button>`
- Disabled social links in Footer/Preview lack `tabindex="-1"` and `aria-disabled`
- `VideoPlayer.tsx` iframe has generic `title="Vk"` — should use video name
- `Form.jsx` checkbox ID derived from `type` prop — may be empty or duplicate

### Git Conventions

- Direct commits to `main` — no PRs or branching strategy
- Generic messages: "fix" (7×), "fix 2" (2×), "restyling 1-6"
- No conventional commits, no code review history

## Testing

Jest configured with `ts-jest` preset (`testEnvironment: 'node'`). **No test files exist.** Test files should use `.test.ts` or `.test.tsx` extensions.

## Important Constraints

- **Node.js >= 18** required
- Static export only — no dynamic routes or server-side features
- Images are unoptimized for static compatibility
- All content is in Russian
- Build output goes to `docs/` directory (not `out/`)
- No `.env` files — all config is hardcoded
- `react-input-mask`, `react-responsive-carousel`, `react-shaders` in `package.json` but unused

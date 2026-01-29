# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14 static site** for psychological services (neurotroubleshooting, sacred amanita ceremonies, psychological transformation). The site is deployed at `https://alexandrvasilev.ru` with content in Russian.

- **Framework**: Next.js 14 with static export (`output: 'export'`)
- **UI**: React 18.3.1 with CSS Modules
- **Language**: Mixed JS/TS/TSX files
- **Build Output**: `docs/` directory (for GitHub Pages deployment)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (outputs to docs/)
npm run start    # Start production server
npm run clean    # Remove docs directory
npm run test     # Run Jest tests
```

## Architecture

### Static Site Generation
This is a **static site only** - no server-side rendering or API routes. The build outputs static HTML/CSS/JS to the `docs/` directory. Key implications:
- Images must be unoptimized (configured in `next.config.js`)
- Video files require custom webpack config
- All data must be available at build time

### Directory Structure
```
components/
├── Layout/         # Header, Footer, Navigation, layout structure
├── shared/         # Reusable components (Buttons, Cards, Sections)
├── Form/           # Contact form with Telegram integration
├── Preview/        # Hero/landing sections
└── Final/          # CTA sections

pages/              # Next.js file-based routing (index.js, about-me.js, etc.)
hooks/              # Custom React hooks (useTheme, useMediaQuery, useFormValidation, useScrollToLocation)
utils/              # Utility functions (validation.ts)
consts/             # Constants (products.ts)
styles/             # Global CSS and CSS modules
```

### Component Patterns

**CSS Modules**: Each component has its own `.module.css` file for scoped styling.

**Dark Theme Only**: The site enforces dark theme through `useTheme` hook - no light theme exists.

**Layout Pattern**: Pages wrap content in Layout component:
```jsx
<Layout seo={seoConfig} schema={schemaData}>
  <PageContent />
</Layout>
```

**Form Integration**: Contact forms submit to Telegram bot via API.

### Key Custom Hooks

- `useTheme.jsx` - Forces dark theme (no light mode available)
- `useMediaQuery.jsx` - Responsive breakpoint detection
- `useFormValidation.jsx` - Form validation logic
- `useScrollToLocation.jsx` - Scroll/anchor navigation

### SEO & Schema.org

The site heavily uses structured data for SEO:
- Schema.org JSON-LD markup on homepage
- Local business schema (Kazan location)
- FAQ schema for common questions
- Service listings with pricing
- Russian language targeting

Schema data is passed to Layout component and injected via Next.js Head.

## Testing

Jest is configured with `ts-jest` preset for TypeScript support. Test files should use `.test.ts` or `.test.tsx` extensions.

## Important Constraints

- **Node.js >= 18** required
- Static export only - no dynamic routes or server-side features
- Images are unoptimized for static compatibility
- All content is in Russian
- Build output goes to `docs/` directory (not `out/`)

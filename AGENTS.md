# AGENTS.md

This file provides guidelines for agentic coding agents working on this repository.

## Build, Lint, and Test Commands

```bash
# Development
npm run dev              # Start development server

# Production
npm run build           # Build for production (outputs to docs/)
npm start               # Start production server

# Testing
npm test                # Run all Jest tests
npm test -- <path>      # Run tests matching a path
npm test -- --testNamePattern="<name>"  # Run tests by name

# Utilities
npm run clean           # Remove docs directory
```

**Note**: Single test execution: `npm test <test-file-path>`

## Code Style Guidelines

### File Structure
- **Components**: `components/ComponentName/ComponentName.tsx` with `ComponentName.module.css`
- **Pages**: `pages/page-name.js` (export default function)
- **Hooks**: `hooks/useHookName.jsx` or `.tsx` (export const)
- **Utils**: `utils/utilityName.ts` (export const)
- **Shared**: `components/shared/ComponentName/ComponentName.tsx`

### Language & File Types
- Use **TypeScript** for new components (.tsx, .ts) - define interfaces for props
- Legacy JSX files (.jsx, .js) exist but prefer TypeScript
- CSS Modules (.module.css) for component-specific styling
- Global styles in `styles/` directory

### Imports
```typescript
// External libraries first
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Internal imports (alphabetical)
import { HelperComponent } from '../shared/HelperComponent';
import styles from './ComponentName.module.css';
import { utilityFunction } from '../../utils/utility';
```

### Component Style
```typescript
// Define props interface
interface ComponentProps {
  prop1: string;
  prop2?: number; // optional
  callback: () => void;
}

export const ComponentName: React.FC<ComponentProps> = ({
  prop1,
  prop2 = 0,
  callback
}) => {
  // Hooks at top
  const [state, setState] = useState(initialValue);

  // Event handlers with "handle" prefix
  const handleClick = () => {
    // Early returns for readability
    if (!condition) return;
    
    callback();
  };

  return (
    <div className={styles.container}>
      {/* JSX content */}
    </div>
  );
};
```

### Naming Conventions
- **Components**: PascalCase (ProductCard, Navigation)
- **Functions/Consts**: camelCase (handleClick, formatPhoneNumber)
- **Event handlers**: "handle" prefix (handleClick, handleKeyDown, handleChange)
- **CSS classes**: kebab-case (styles.container, styles.button-primary)
- **Constants**: PascalCase for exports, camelCase for local

### Styling
- **CSS Modules**: Import as `import styles from './Component.module.css'`
- Use className={styles.className} instead of CSS-in-JS
- **No TailwindCSS** (despite Cursor rules, this project uses CSS Modules)
- Global CSS variables defined in `styles/global.css` (e.g., --accent, --bg-color)

### TypeScript Best Practices
- Define interfaces for all component props
- Use explicit types for functions and returns
- Avoid `any` - use unknown or specific interfaces
- Use utility types (Partial<T>, Required<T>) when appropriate

### Error Handling
- Validation functions return error strings (empty string = valid)
- Display error messages conditionally in UI
- Form validation in `utils/validation.ts`
- Use try-catch for async operations

### Performance
- Use `React.memo` for expensive components
- Use `useMemo` for expensive computations
- Use `useCallback` for event handlers passed to children
- Avoid inline function definitions in JSX props

### Accessibility
- Include semantic HTML elements
- Add tabIndex="0" to interactive elements
- Include aria-labels for buttons without text
- Support keyboard navigation (onKeyDown handlers)
- Use proper heading hierarchy

### Hooks Patterns
- Custom hooks in `hooks/` directory
- Use `useLayoutEffect` for DOM mutations that block painting
- Use `useEffect` for side effects
- Provide context via createContext/useContext pattern (see useTheme)

### Best Practices
- Use early returns to reduce nesting
- DRY principle - extract repeated logic
- Comment in Russian for business logic, English for technical notes
- Don't leave TODOs or placeholders
- Ensure all imports are used
- Use const arrow functions instead of function declarations

### Testing (Jest + ts-jest)
- Test files should be co-located or in `__tests__` directories
- Tests use TypeScript via ts-jest
- Configure in `jest.config.js`
- Test environment: node
- File extensions: .ts, .tsx, .js, .jsx

### Next.js Specifics
- Pages export default functions
- Use `Link` component for internal navigation (prefetch={false} for optimization)
- Use `Image` from next/image for optimized images
- Metadata passed to Layout component via metaConfig prop
- Schema.org structured data passed to Layout component

### Git Commit Guidelines
- Commit messages should be concise and descriptive
- Follow existing commit message style (imperative mood)
- Only commit when explicitly requested by user

### Important Notes
- Mixed TypeScript and JSX codebase - prefer TypeScript for new code
- CSS Modules only (no TailwindCSS despite .cursorrules mentioning it)
- No lint/typecheck scripts configured in package.json
- Dark theme only (useTheme hook always returns "dark")
- Output directory is `docs/` (static export configuration)

---
inclusion: auto
---

# Project Best Practices

This document outlines the coding standards, architectural patterns, and best practices for this Chrome Extension project built with React, TypeScript, Vite, and Material-UI.

## Project Overview

This is a Chrome Extension built as a Single Page Application (SPA) using:
- React 19 with TypeScript
- Vite as the build tool
- Material-UI (MUI) v7 for UI components
- Redux Toolkit with redux-persist for state management
- React Router v7 for navigation
- SCSS modules for custom styling

## Architecture & Project Structure

### Directory Organization

```
src/
├── presentation/          # UI layer
│   ├── app/              # Root App component
│   ├── pages/            # Page components (Landing, Login, Error)
│   ├── router/           # Routing configuration
│   └── shared/           # Shared UI resources
│       ├── components/   # Reusable components
│       ├── theme/        # MUI theme customizations
│       └── util/         # UI utilities
├── redux/                # State management
│   ├── services/         # API services and handlers
│   └── slices/           # Redux slices by feature
├── static/               # Static assets (images, icons)
└── types/                # Global TypeScript definitions
```

### Key Principles

1. **Feature-based organization**: Group related files by feature/domain (e.g., auth slice contains types, selectors, and slice)
2. **Separation of concerns**: Keep presentation logic separate from business logic
3. **Component isolation**: Each component in its own folder with related files
4. **Shared resources**: Common components, themes, and utilities in `shared/`

## TypeScript Standards

### Type Safety
- Always define explicit types for function parameters and return values
- Use interfaces for object shapes, types for unions/intersections
- Avoid `any` - use `unknown` if type is truly unknown
- Define types in separate files when shared across multiple files

### Type Organization
```typescript
// Feature-specific types in dedicated files
// Example: src/redux/slices/auth/authTypes.ts
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}
```

### Component Typing
```typescript
import { FC } from "react";

// Use FC (FunctionComponent) for React components
const MyComponent: FC<{ title: string; optional?: boolean }> = ({ title, optional }) => {
  return <div>{title}</div>;
};
```

## React Component Standards

### Component Structure
- Use functional components with hooks
- Use `FC` type from React for component definitions
- Keep components focused and single-responsibility
- Extract complex logic into custom hooks

### Component File Organization
```
ComponentName/
├── ComponentName.tsx       # Component implementation
├── ComponentName.module.scss  # Component-specific styles (if needed)
└── index.ts               # Re-export (optional)
```

### Import Order (Enforced by ESLint)
```typescript
// 1. External dependencies (React, MUI, etc.)
import { FC } from "react";
import Box from "@mui/material/Box";

// 2. Internal aliases (@redux, @src, @presentation, @pages, @shared)
import { useAppSelector } from "@redux/hooks";
import { selectUser } from "@src/redux/slices/auth/authSelector";

// 3. Relative imports
import "./ComponentName.module.scss";
```

## Material-UI (MUI) Best Practices

### Import Specificity
**CRITICAL**: Always import MUI components from their specific paths, never from the root package.

```typescript
// ✅ CORRECT
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

// ❌ WRONG - Will trigger ESLint error
import { Box, Button } from "@mui/material";
```

This is enforced by ESLint rule: `no-restricted-imports` with pattern `^@mui/[^/]+$`

### Theme Customization
- Theme customizations are in `src/presentation/shared/theme/customizations/`
- Organized by component category (input, navigation, surfaces, etc.)
- Use the `AppTheme` wrapper component for consistent theming
- Access theme values via `sx` prop with theme parameter

```typescript
<Box
  sx={(theme) => ({
    backgroundColor: theme.vars
      ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
      : alpha(theme.palette.background.default, 1),
  })}
/>
```

### Component Composition
- Use MUI's `sx` prop for styling instead of inline styles
- Leverage MUI's responsive utilities (`xs`, `sm`, `md`, `lg`, `xl`)
- Use `Stack` for layout spacing instead of manual margins

## Redux State Management

### Slice Structure
Each feature should have its own slice with:
```
feature/
├── featureSlice.ts      # Slice definition with reducers
├── featureTypes.ts      # TypeScript interfaces
└── featureSelector.ts   # Reusable selectors
```

### Redux Toolkit Patterns
```typescript
// Use createSlice for all state management
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Use PayloadAction for typed actions
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});
```

### State Persistence
- Use `redux-persist` for persisting auth and critical state
- Configure serialization checks to ignore persist actions
- Store configuration in `src/redux/store.ts`

## Path Aliases

Use configured path aliases for cleaner imports:
- `@src` → `./src`
- `@presentation` → `./src/presentation`
- `@pages` → `./src/presentation/pages`
- `@shared` → `./src/presentation/shared`
- `@redux` → `./src/application/redux`

## Styling Guidelines

### SCSS Modules
- Use SCSS modules for component-specific styles
- Name files as `ComponentName.module.scss`
- Import and use with CSS modules pattern

### MUI Theme vs Custom Styles
- Prefer MUI's `sx` prop and theme system for styling
- Use SCSS modules only for complex custom styles not achievable with MUI
- Maintain consistency with MUI's design system

## Chrome Extension Specifics

### Manifest Configuration
- Manifest file located at `src/manifest.json`
- Copied to build output via `vite-plugin-static-copy`
- Update version and permissions as needed

### Build Configuration
- Multiple entry points: background script, popup, and main app
- Static assets copied from `src/static` to build output
- Output format: ESM modules

### Background Scripts
- Background service worker in `src/background.ts`
- Handle extension lifecycle and background tasks
- Use Chrome Extension APIs appropriately

## Code Quality

### ESLint Configuration
- Strict TypeScript rules enabled
- React Hooks rules enforced
- Import ordering and organization required
- No restricted MUI imports (must use specific paths)

### Running Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

## Development Workflow

### Development Server
```bash
npm run dev         # Start Vite dev server
```

### Building
```bash
npm run build       # TypeScript check + Vite build
```

### Extension Installation
1. Build the project (`npm run build`)
2. Navigate to `chrome://extensions/`
3. Enable Developer mode
4. Click "Load unpacked" and select the `dist` folder
5. To update: click reload icon on extension card

## Common Patterns

### Authentication Flow
- Auth state managed in Redux (`src/redux/slices/auth/`)
- Auth service handles Google SSO (`src/redux/services/authService.ts`)
- Web auth handler for Chrome identity API
- AuthGuard component protects routes
- AuthInitializer handles auth state on app load

### Routing
- Routes defined in `src/presentation/router/`
- Use React Router v7 patterns
- Protected routes wrapped with AuthGuard

### Component Composition
- Break down complex UIs into smaller components
- Use composition over inheritance
- Keep components under 200 lines when possible
- Extract reusable logic into custom hooks

## Performance Considerations

- Use React.memo for expensive components
- Implement proper dependency arrays in useEffect/useMemo/useCallback
- Lazy load routes and heavy components when appropriate
- Optimize Redux selectors to prevent unnecessary re-renders

## Security Best Practices

- Never commit sensitive data (API keys, tokens) to version control
- Use `.env` files for environment variables (see `.env.example`)
- Validate and sanitize user inputs
- Follow Chrome Extension security best practices
- Use Content Security Policy appropriately

## Documentation

- Document complex logic with comments
- Keep README.md updated with setup instructions
- Document API integrations and external dependencies
- Maintain this steering document as patterns evolve

## Version Requirements

- Node.js >= 22.18.05
- npm >= 10.9.3
- Follow package.json for dependency versions

## Contributing

- Follow the established patterns in the codebase
- Run linting before committing
- Keep commits focused and atomic
- Update documentation when adding new patterns or features

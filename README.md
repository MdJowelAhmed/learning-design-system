# My Design System

A production-grade, modular design system built as a Turborepo + pnpm monorepo.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + CSS Variables
- **Components:** Radix UI + CVA
- **Tokens:** Style Dictionary v4 (DTCG format)
- **Build:** tsup (ESM + CJS)
- **Testing:** Vitest + React Testing Library + Playwright
- **Documentation:** Storybook 8 + Next.js

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-design-system

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev
```

## Project Structure

```
├── apps/
│   ├── docs/          # Next.js documentation site
│   └── storybook/     # Storybook component explorer
├── packages/
│   ├── ui/            # Core UI components
│   ├── tokens/        # Design tokens (Style Dictionary)
│   ├── theme/         # Theme system (Light/Dark)
│   ├── hooks/         # Shared React hooks
│   ├── utils/         # Shared utilities
│   ├── icons/         # Icon system (Lucide + custom)
│   ├── config/        # Shared TypeScript configs
│   └── eslint-config/ # Shared ESLint config
```

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| `@myds/ui` | Core UI components | `0.0.1` |
| `@myds/tokens` | Design tokens | `0.0.1` |
| `@myds/theme` | Theme system | `0.0.1` |
| `@myds/hooks` | React hooks | `0.0.1` |
| `@myds/utils` | Utilities | `0.0.1` |
| `@myds/icons` | Icon system | `0.0.1` |

## Scripts

```bash
pnpm build          # Build all packages
pnpm dev            # Start dev servers
pnpm lint           # Lint all packages
pnpm test           # Run all tests
pnpm type-check     # Type-check all packages
pnpm format         # Format all files
pnpm changeset      # Create a changeset
pnpm release        # Build and publish
```

## License

MIT

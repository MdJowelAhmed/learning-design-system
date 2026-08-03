# 🎨 My Design System

A modern, production-grade, accessible **React 19 Design System & UI Component Library** built with TypeScript, Tailwind CSS v4, Radix UI primitives, and Style Dictionary tokens.

---

## ⚡ Features

- **🎨 18+ Accessible UI Components**: Button, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Avatar, Card, Alert, Separator, Dialog/Modal, Tooltip, Dropdown Menu, Tabs, Accordion, and Toast Notification System.
- **🌓 Theme Engine**: Built-in `ThemeProvider` and `useTheme` hook with Light, Dark, and System preference support.
- **🪙 Design Tokens**: Tokens powered by **Style Dictionary v4** auto-generating CSS variables and TypeScript constants.
- **📦 Single Repository Architecture**: Clean bundling using `tsup` producing tree-shakeable **ESM**, **CommonJS**, **TypeScript declarations**, and **CSS stylesheets**.
- **🧪 100% Test Coverage for Primitives**: Unit testing using **Vitest** and `@testing-library/react`.
- **📖 Interactive Storybook 8**: Comprehensive documentation site and interactive component showcase.

---

## 📦 Installation

Install the package using your preferred package manager:

```bash
# pnpm
pnpm add my-design-system

# npm
npm install my-design-system

# yarn
yarn add my-design-system
```

---

## 🚀 Quick Start

### 1. Import Global Styles

Import the design system CSS variables and utilities at the root of your application (`src/main.tsx` or `app/layout.tsx`):

```tsx
import 'my-design-system/styles.css';
```

### 2. Wrap App with ThemeProvider

Wrap your root application component with `ThemeProvider`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'my-design-system';
import 'my-design-system/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

### 3. Use Components in Your Application

```tsx
import React from 'react';
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  ToastProvider,
  useToast,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from 'my-design-system';

function ProfileSection() {
  const { addToast } = useToast();

  return (
    <div className="space-y-4 p-6">
      {/* Toast Trigger */}
      <Button
        variant="primary"
        onClick={() =>
          addToast({
            title: 'Changes Saved!',
            description: 'Your settings have been updated successfully.',
            variant: 'success',
          })
        }
      >
        Save Profile
      </Button>

      {/* Modal Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Settings</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Account Settings</DialogTitle>
            <DialogDescription>
              Manage your personal preferences and notification settings.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="account" className="mt-4 w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="rounded-md border p-4">
              Account details & info...
            </TabsContent>
            <TabsContent value="security" className="rounded-md border p-4">
              Password & Two-Factor Authentication...
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <ProfileSection />
    </ToastProvider>
  );
}
```

---

## 🗂️ Component Catalog

| Category                | Components                                                             | Description                                                                         |
| :---------------------- | :--------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **Form Inputs**         | `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch` | Accessible, styled form controls with loading states and size variants.             |
| **Data Display**        | `Badge`, `Avatar`, `Card`, `Separator`, `Alert`                        | Information presentation cards, badges, indicators, and alerts.                     |
| **Overlays & Popups**   | `Dialog` (Modal), `Tooltip`, `DropdownMenu`, `Toast`                   | Accessible Radix-powered modals, tooltips, menus, and toast notifications.          |
| **Navigation & Layout** | `Tabs`, `Accordion`                                                    | Interactive tab panels and expandable FAQ accordions with smooth animations.        |
| **System Tools**        | `ThemeProvider`, `useTheme`, `useMediaQuery`, `cn`, `tokens`           | Theme manager, responsive hooks, class merger utility, and design token references. |

---

## 🛠️ Local Development & Scripts

Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/MdJowelAhmed/learning-design-system.git
cd my-design-system

# Install dependencies
pnpm install

# Build tokens and library bundle (CJS, ESM, Types, CSS)
pnpm build

# Start Tsup watch mode
pnpm dev

# Launch Storybook documentation explorer (http://localhost:6006)
pnpm storybook

# Build Storybook static production site
pnpm run build-storybook

# Run Vitest unit test suite
pnpm test

# Run ESLint & Type-checking
pnpm lint
pnpm type-check
```

---

## 📁 Repository Folder Structure

```text
my-design-system/
├── .github/
│   └── workflows/
│       ├── ci.yml            # Automated CI Testing, Linting & Storybook build
│       └── publish.yml       # Automated NPM publishing workflow
├── .storybook/               # Storybook 8 configuration & previews
├── src/
│   ├── components/           # 18+ UI Components & story files
│   ├── tokens/               # Style Dictionary DTCG tokens & config
│   ├── theme/                # ThemeProvider & theme script helpers
│   ├── hooks/                # Custom React hooks (useMediaQuery, etc.)
│   ├── icons/                # Lucide React icon wrappers
│   ├── utils/                # cn utility, a11y helpers, shared types
│   ├── styles/               # Global CSS stylesheet & keyframe animations
│   ├── stories/              # Storybook documentation pages
│   └── index.ts              # Unified entry point for library exports
├── dist/                     # Compiled CJS, ESM, Types, and CSS artifacts
├── package.json              # Single package configuration
├── tsconfig.json             # TypeScript path aliases (@/components, etc.)
├── tsup.config.ts            # Bundling configuration
└── vitest.config.ts          # Vitest testing setup
```

---

## 📄 License

Distributed under the [MIT License](LICENSE).

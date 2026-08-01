import {
  Button,
  Alert,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@myds/ui';
import { Sparkles, ArrowRight } from '@myds/icons';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <div className="space-y-4">
        <Badge
          variant="success"
          leftIcon={<Sparkles className="h-3 w-3" />}
          pill
        >
          v1.0 Ready
        </Badge>
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Enterprise Design System
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Modular, accessible, and high-performance component library powered by
          React 19, TypeScript, Style Dictionary v4, and Tailwind CSS v4.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
            Get Started
          </Button>
          <Button variant="outline">Storybook Explorer</Button>
        </div>
      </div>

      <Alert variant="info" title="Production Ready">
        All 12 core UI components have been thoroughly tested and built into
        optimized ESM & CJS bundles.
      </Alert>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card hoverable>
          <CardHeader>
            <CardTitle>Design Tokens</CardTitle>
            <CardDescription>
              DTCG-compliant CSS Variables & TS constants.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Includes 7 color palettes, typography, spacing, shadows, radius, and
            motion tokens.
          </CardContent>
        </Card>

        <Card hoverable>
          <CardHeader>
            <CardTitle>Radix UI Primitives</CardTitle>
            <CardDescription>
              Accessible component primitives with ARIA compliance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Full keyboard navigation, focus trap, and screen reader
            announcements built-in.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

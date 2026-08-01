import type { Metadata } from 'next';
import { ThemeProvider } from '@myds/theme';
import '@myds/tokens/css';
import '@myds/ui/styles.css';

export const metadata: Metadata = {
  title: 'Enterprise Design System — Documentation',
  description:
    'Official documentation and API reference for the design system components.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}

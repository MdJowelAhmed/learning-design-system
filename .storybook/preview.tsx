import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme';
import '../src/styles/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#09090b' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="min-h-[150px] p-6 font-sans text-neutral-900 dark:text-neutral-100">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;

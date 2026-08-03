import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/components/test-setup.ts'],
    exclude: ['src/test/visual.spec.ts', 'node_modules', 'dist'],
  },
});

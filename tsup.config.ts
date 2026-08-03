import { defineConfig } from 'tsup';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  onSuccess: async () => {
    if (!existsSync('dist')) {
      mkdirSync('dist', { recursive: true });
    }
    if (existsSync('src/styles/styles.css')) {
      copyFileSync('src/styles/styles.css', join('dist', 'styles.css'));
      console.log('✅ Coerced styles.css into dist/styles.css');
    }
  },
});

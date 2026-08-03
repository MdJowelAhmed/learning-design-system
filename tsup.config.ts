import { defineConfig } from 'tsup';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    tokens: 'src/tokens/index.ts',
    theme: 'src/theme/index.ts',
    hooks: 'src/hooks/index.ts',
    icons: 'src/icons/index.ts',
    utils: 'src/utils/index.ts',
    button: 'src/components/button/index.ts',
    input: 'src/components/input/index.ts',
    textarea: 'src/components/textarea/index.ts',
    select: 'src/components/select/index.ts',
    checkbox: 'src/components/checkbox/index.ts',
    radio: 'src/components/radio/index.ts',
    switch: 'src/components/switch/index.ts',
    badge: 'src/components/badge/index.ts',
    avatar: 'src/components/avatar/index.ts',
    card: 'src/components/card/index.ts',
    alert: 'src/components/alert/index.ts',
    separator: 'src/components/separator/index.ts',
    dialog: 'src/components/dialog/index.ts',
    tooltip: 'src/components/tooltip/index.ts',
    'dropdown-menu': 'src/components/dropdown-menu/index.ts',
    tabs: 'src/components/tabs/index.ts',
    accordion: 'src/components/accordion/index.ts',
    toast: 'src/components/toast/index.ts',
    form: 'src/components/form/index.ts',
    motion: 'src/components/motion/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'tailwindcss',
    'lucide-react',
    'framer-motion',
    'react-hook-form',
    'zod',
    '@hookform/resolvers',
  ],
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

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    host: 'localhost',
  },
  plugins: [tsconfigPaths()],
  optimizeDeps: {
    exclude: ['@antv/infographic'],
  },
});

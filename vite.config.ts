import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Todo-for-strong-team/',
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src/'),
    },
  },
});

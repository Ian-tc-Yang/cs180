import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cs180/',
  plugins: [react()],
  server: {
    watch: {
      useFsEvents: false,
      usePolling: true,
    },
  },
});

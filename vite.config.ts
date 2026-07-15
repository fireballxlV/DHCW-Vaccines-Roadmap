import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/DHCW-Vaccines-Roadmap/',
  plugins: [react()],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // 👈 ensures assets load correctly
  plugins: [react(), tailwindcss()],
});

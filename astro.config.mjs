// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
   server: {
    host: '0.0.0.0',  // Permite acceso desde otros dispositivos
    port: 3000,       // Puerto opcional (puedes cambiarlo)
  }
});
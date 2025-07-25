// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // IMPORTANT for Shopify asset URLs
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '', // put assets in root of dist
    rollupOptions: {
      output: {
        entryFileNames: 'react-widget.js', // you can rename this
      },
    },
  },
  plugins: [react()],
});

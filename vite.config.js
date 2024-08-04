import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Final-Frontend-UTN-TM/' : '/', // Ajusta el base para producción
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});

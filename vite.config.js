import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Final-Frontend-UTN-TM/' // Asegúrate de que esta ruta sea correcta para tu repositorio
});

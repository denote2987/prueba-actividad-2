import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: "/prueba-actividad-2/",
	build: {
    outDir: 'build', // Esto es por defecto, pero asegúrate de que no diga otra cosa
  }
});

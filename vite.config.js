// vite.config.js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/map2map',
	plugins: [
		react({
			// Enables React Fast Refresh + JSX transform
			jsxRuntime: 'automatic',
			babel: {
				plugins: [
					// Example: enable React Refresh lint rule auto-fix in dev
				],
			},
		}),
	],
	server: {
		port: 3000,
		open: true, // auto-open browser
	},
	build: {
		sourcemap: true,
		outDir: 'dist',
	},
});

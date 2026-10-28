import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	// The app is served from labs.redivis.com/k-anonymity
	base: '/k-anonymity/',
	plugins: [react()],
	server: {
		port: 8080,
	},
	css: {
		modules: {
			generateScopedName: '[name]_[local]-[hash:base64:3]',
		},
	},
});

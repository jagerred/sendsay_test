import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		preserveSymlinks: true,
		alias: {
			components: '/src/components',
			assets: '/src/assets',
			store: '/src/store',
			hooks: '/src/hooks',
			helpers: '/src/helpers',
			types: '/src/types',
		},
	},
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // '/api': {
            //     target: process.env.VITE_BACKEND_URL,
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace(/^\/api/, ''),
            //     // ws: true,
            // },
            '/api': process.env.VITE_BACKEND_URL,
        },
    },
});

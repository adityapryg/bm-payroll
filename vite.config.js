import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {

    // Always use localhost for development to avoid DNS issues
    const devHost = 'localhost';
    return {

        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
            }),
            react(),
            tailwindcss(),
            wayfinder({
                formVariants: true,
            }),
        ],
        esbuild: {
            jsx: 'automatic',
        },
        server: {
            host: '0.0.0.0',
            port: 5173,
            hmr: {
                host: devHost,
                protocol: 'ws',
                // Use localhost to ensure consistent connections
                clientPort: 5173,
            },
            // Allow access from all domains
            cors: {
                origin: '*',
            },
            // More specific headers to avoid CORS issues
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
            }
        },
        // Handle relative paths better
        base: command === 'build' ? '/build/' : `http://${devHost}:5173/`,
    };
});

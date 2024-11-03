import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        AutoImport({
            imports: ['react'],
            dirs: ['src/components/**'],
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json' // Path to ESLint configuration file
            }
        }),
        terser({
            compress: {
                drop_console: true // Removes console.* statements
            },
            format: {
                comments: false // Removes comments
            }
        })
    ],
    server: {
        port: 5000,
        host: true,
        open: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@admin': fileURLToPath(new URL('./src/pages/admin', import.meta.url)),
            '@frontend': fileURLToPath(new URL('./src/pages/frontend', import.meta.url))
        }
    },
    define: {
        'process.env': {} // Define process.env to use environment variables
    },
    devtools: { enabled: true }
});


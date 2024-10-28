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
            },
            vueTemplate: false // Not needed for React
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
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 5000,
        host: true,
        open: true
    }
});


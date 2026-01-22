import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), 
        eslint({
            // For ESLint 9, use overrideConfigFile instead of configFile
            overrideConfigFile: 'eslint.config.js',
            // Only check src directory
            include: ['src/**/*.{js,vue}'],
            // Exclude built files and other directories
            exclude: ['dist/**', 'node_modules/**'],
            // Only emit warnings, don't fail the build
            emitWarning: true,
            emitError: false,
            // Disable lint on start to speed up development
            lintOnStart: false
        })
    ],
    server: {
        port: 1023,
    },
});

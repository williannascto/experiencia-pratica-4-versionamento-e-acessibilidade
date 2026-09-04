import { defineConfig } from 'vite';

export default defineConfig({
    base: '/experiencia-pratica-4-versionamento-e-acessibilidade/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
        cssMinify: true
    }
});
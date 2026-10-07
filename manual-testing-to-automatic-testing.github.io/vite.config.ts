import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { LOCALES } from './src/lib/i18n/locale-codes.js';

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: '404.html',
        strict: true
      }),
      prerender: {
        // Each locale's home page; the crawler follows its links to every
        // page. Every page is prerendered and every link is followed, so a
        // broken internal link fails the build.
        entries: ['*', ...LOCALES.map((code) => `/${code}/`)]
      }
    })
  ]
});

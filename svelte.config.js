import { vitePreprocess } from '@sveltejs/kit/vite'
import static_adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    postcss: true,
  }),

  kit: {
    adapter: static_adapter(),
    prerender: {
      crawl: process.env.NODE_ENV !== 'development',
    },

    paths: { assets: '', base: '' },
    appDir: '2022',
  },
}

export default config

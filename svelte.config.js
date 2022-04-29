import preprocess from 'svelte-preprocess'
import static_adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: static_adapter(),
    prerender: {
      crawl: process.env.NODE_ENV !== 'development',
      enabled: process.env.NODE_ENV !== 'development',
    },

    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : '/2022',
    },
  },
}

export default config

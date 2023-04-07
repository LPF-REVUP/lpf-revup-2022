import preprocess from 'svelte-preprocess'
import static_adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: static_adapter(),

    paths: { assets: '', base: '' },
    appDir: '2022',
  },
}

export default config

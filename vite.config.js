import { sveltekit } from '@sveltejs/kit/vite'
import fs from 'fs'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['devalue'],
  },
  server: {
    https: {
      cert: fs.readFileSync('./certificates/localhost.pem'),
      key: fs.readFileSync('./certificates/localhost-key.pem'),
    },
  },
}

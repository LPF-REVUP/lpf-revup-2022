// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string
  }

  interface ImportMetaEnv {
    VITE_LIFF_ID: string
    VITE_MICROCMS_API_KEY: string
    VITE_MICROCMS_API_ENDPOINT: string
  }

  // interface Platform {}

  // interface PrivateEnv {}

  // interface PublicEnv {}
}

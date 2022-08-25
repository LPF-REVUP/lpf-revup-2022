<script>
  import { variables } from '$lib/variables'
  import { getStores } from '$app/stores'
  const { page } = getStores()
  $: {
    if (typeof gtag !== 'undefined') {
      // eslint-disable-next-line no-undef
      gtag('config', variables.gtagId, {
        page_path: $page.url.pathname,
      })
    }
  }
</script>

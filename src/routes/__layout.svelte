<script lang="ts">
  import { onMount } from 'svelte'
  import NavSection from '$lib/pages/NavSection.svelte'
  import FooterSection from '$lib/pages/FooterSection.svelte'
  import { variables } from '$lib/variables'
  import '../app.css'

  let liffObject

  async function initialize() {
    import('@line/liff').then((liff: any) => {
      liff
        .init({ liffId: variables.liffId })
        .then(() => {
          liffObject = liff
        })
        .catch((err) => {
          console.error({ err })
        })
    })
  }

  const handleSignIn = () => {
    if (!liffObject.isLoggedIn()) {
      liffObject.login({})
    }
  }

  onMount(() => {
    initialize().then(async () => {
      //
    })
  })
</script>

<NavSection on:signIn={handleSignIn} />
<slot />
<FooterSection />

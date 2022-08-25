<script lang="ts">
  import { onMount } from 'svelte'
  import AnalyticsSection from '$lib/pages/AnalyticsSection.svelte'
  import NavSection from '$lib/pages/NavSection.svelte'
  import FooterSection from '$lib/pages/FooterSection.svelte'
  import { variables } from '$lib/variables'
  import '../app.css'

  let liffObject
  let profileName
  let profileUrl

  async function initialize() {
    import('@line/liff').then((liff: any) => {
      liff
        .init({ liffId: variables.liffId })
        .then(() => {
          liffObject = liff
          liff
            .getProfile()
            .then((profile: any) => {
              profileName = profile.displayName
              profileUrl = profile.pictureUrl
            })
            .catch((err: any) => {
              console.error({ err })
            })
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

<AnalyticsSection />
<NavSection
  signedStatus={liffObject?.isLoggedIn()}
  {profileName}
  {profileUrl}
  on:signIn={handleSignIn}
/>
<slot />
<FooterSection />

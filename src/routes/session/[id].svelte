<script context="module" lang="ts">
  import { fetchResBy } from '$lib/services/content.service'
  import { ogTitle } from '$lib/utils/constants'
  export async function load({ params }) {
    let sessionRes = await fetchResBy('sessions', params.id)
    return { props: { session: sessionRes } }
  }
</script>

<script lang="ts">
  import SessionInfo from '$lib/info/SessionInfo.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
  export let session
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`${session.title} | ${ogTitle}`}</title>
  <meta name="description" content={session.description} />
  <meta name="twitter:title" content={`${session.title} | ${ogTitle}`} />
  <meta name="twitter:description" content={session.description} />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center h-48">
    <h1 class="text-white text-4xl">{session.title}</h1>
  </div>
</div>

<SessionInfo {session} />
<SocialSection />

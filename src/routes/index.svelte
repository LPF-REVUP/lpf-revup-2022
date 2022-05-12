<script context="module" lang="ts">
  import { SPEAKER, SPONSOR } from '$lib/feature'
  import { variables } from '$lib/variables'
  import { ogDescription, ogTitle, twitterUserName, websiteUrl } from '$lib/utils/constants'
  export async function load() {
    let sponsorRes
    let speakerRes
    Promise.all([
      (sponsorRes = await fetch(`${variables.microCmsApiEndpoint}sponsors?limit=50`, {
        headers: { 'X-MICROCMS-API-KEY': variables.microCmsApiKey },
      })),
      (speakerRes = await fetch(`${variables.microCmsApiEndpoint}speakers?limit=50`, {
        headers: { 'X-MICROCMS-API-KEY': variables.microCmsApiKey },
      })),
    ])
    const sponsors = await sponsorRes.json()
    const speakers = await speakerRes.json()
    return { props: { sponsors: sponsors, speakers: speakers } }
  }
</script>

<script lang="ts">
  import MainSection from '$lib/pages/MainSection.svelte'
  import MessageSection from '$lib/pages/MessageSection.svelte'
  import AboutSection from '$lib/pages/AboutSection.svelte'
  import TimetableSection from '$lib/pages/TimetableSection.svelte'
  import SpeakerSection from '$lib/pages/SpeakerSection.svelte'
  import SponsorSection from '$lib/pages/SponsorSection.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
  export let sponsors
  export let speakers
  export let sessions
</script>

<svelte:head>
  <html lang="ja" />
  <title>{ogTitle}</title>
  <meta name="description" content={ogDescription} />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:url" content={websiteUrl} />
  <meta name="twitter:creator" content={`@${twitterUserName}`} />
  <meta name="twitter:site" content={`A;@${twitterUserName}`} />
</svelte:head>

<MainSection />
<MessageSection />
<AboutSection />
{#if SPEAKER}
  <SpeakerSection items={speakers.contents} />
{/if}
{#if SPONSOR}
  <SponsorSection items={sponsors.contents} />
{/if}
<SocialSection />

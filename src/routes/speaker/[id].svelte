<script context="module" lang="ts">
  import { fetchResBy } from '$lib/services/content.service'
  import { ogTitle, websiteUrl } from '$lib/utils/constants'
  export async function load({ params }) {
    let speakerRes = await fetchResBy('speakers', params.id)
    return { props: { id: params.id, speaker: speakerRes } }
  }
</script>

<script lang="ts">
  import SpeakerInfo from '$lib/info/SpeakerInfo.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
  export let id
  export let speaker
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`${speaker.familyNameJp} ${speaker.firstNameJp} | ${ogTitle}`}</title>
  <meta
    name="description"
    content={`${speaker.familyNameJp}${speaker.firstNameJp}の自己紹介ページです。`}
  />
  <meta
    name="twitter:title"
    content={`${speaker.familyNameJp} ${speaker.firstNameJp} | ${ogTitle}`}
  />
  <meta
    name="twitter:description"
    content={`${speaker.familyNameJp}${speaker.firstNameJp}の自己紹介ページです。`}
  />
  <meta name="twitter:url" content={`${websiteUrl}/speaker/${id}`} />
  <meta name="twitter:creator" content={`@${speaker.twitter}`} />
  <meta name="twitter:site" content={`A;@${speaker.twitter}`} />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center h-48">
    <h1 class="text-white text-4xl">{`${speaker.familyNameJp} ${speaker.firstNameJp}`}</h1>
  </div>
</div>

<SpeakerInfo {speaker} />
<SocialSection />

<script lang="ts">
  import SpeakerInfo from '$lib/info/SpeakerInfo.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'

  import { ogTitle, websiteUrl } from '$lib/utils/constants'
  import type { Speaker } from '../../../app'

  export let data: { id: string; speaker: Speaker }
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`${data.speaker.familyNameJp} ${data.speaker.firstNameJp} | ${ogTitle}`}</title>
  <meta
    name="description"
    content={`${data.speaker.familyNameJp}${data.speaker.firstNameJp}の自己紹介ページです。`}
  />
  <meta
    name="og:site_name"
    content={`${data.speaker.familyNameJp} ${data.speaker.firstNameJp} | ${ogTitle}`}
  />
  <meta name="og:type" content="website" />
  <meta
    name="og:description"
    content={`${data.speaker.familyNameJp}${data.speaker.firstNameJp}の自己紹介ページです。`}
  />
  <meta
    name="og:title"
    content={`${data.speaker.familyNameJp} ${data.speaker.firstNameJp} | ${ogTitle}`}
  />
  <meta name="og:url" content={`${websiteUrl}/speaker/${data.id}`} />
  <meta
    name="og:image"
    content={`${websiteUrl}og/RevUp_${data.speaker.familyNameJp}_${data.speaker.firstNameJp}.png`}
  />
  <meta
    name="twitter:title"
    content={`${data.speaker.familyNameJp} ${data.speaker.firstNameJp} | ${ogTitle}`}
  />
  <meta
    name="twitter:description"
    content={`${data.speaker.familyNameJp}${data.speaker.firstNameJp}の自己紹介ページです。`}
  />
  <meta name="twitter:url" content={`${websiteUrl}/speaker/${data.id}`} />
  <meta name="twitter:creator" content={`@${data.speaker.twitter}`} />
  <meta name="twitter:site" content={`A;@${data.speaker.twitter}`} />
  <meta
    name="twitter:image"
    content={`${websiteUrl}og/RevUp_${data.speaker.familyNameJp}_${data.speaker.firstNameJp}.png`}
  />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center h-48">
    <h1 class="text-white text-4xl">
      {`${data.speaker.familyNameJp} ${data.speaker.firstNameJp}`}
    </h1>
  </div>
</div>

<SpeakerInfo speaker={data.speaker} />
<SocialSection />

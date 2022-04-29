<script context="module" lang="ts">
  import { ogDescription, ogTitle, twitterUserName, websiteUrl } from '$lib/utils/constants'
</script>

<script lang="ts">
  import PrivacySection from '$lib/pages/PrivacySection.svelte'
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`個人情報保護方針 | ${ogTitle}`}</title>
  <meta name="description" content={ogDescription} />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:url" content={`${websiteUrl}/privacy`} />
  <meta name="twitter:creator" content={`@${twitterUserName}`} />
  <meta name="twitter:site" content={`A;@${twitterUserName}`} />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center h-48">
    <h1 class="text-white text-4xl">個人情報保護方針</h1>
  </div>
</div>

<PrivacySection />

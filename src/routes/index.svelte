<script context="module" lang="ts">
  import { ogDescription, ogTitle, twitterUserName, websiteUrl } from '$lib/utils/constants'
</script>

<script lang="ts">
  import MainSection from '$lib/pages/MainSection.svelte'
  import MessageSection from '$lib/pages/MessageSection.svelte'
  import AboutSection from '$lib/pages/AboutSection.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
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
<SocialSection />

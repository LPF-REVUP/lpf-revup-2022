<script lang="ts">
  import MainSection from '$lib/pages/MainSection.svelte'
  import NoticeSection from '$lib/pages/NoticeSection.svelte'
  import MessageSection from '$lib/pages/MessageSection.svelte'
  import AboutSection from '$lib/pages/AboutSection.svelte'
  import TimetableSection from '$lib/pages/TimetableSection.svelte'
  import SpeakerSection from '$lib/pages/SpeakerSection.svelte'
  import SponsorSection from '$lib/pages/SponsorSection.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
  import TeamSection from '$lib/pages/TeamSection.svelte'
  import ProfileSection from '$lib/pages/ProfileSection.svelte'

  import { SHUFFLE_SPEAKER, SPEAKER, SPONSOR, TEAM, TIMETABLE } from '$lib/feature'
  import { shuffleArray } from '$lib/services/collection.service'
  import { staffs } from '$lib/utils/team.constants'
  import { ogDescription, ogTitle, twitterUserName, websiteUrl } from '$lib/utils/constants'
  import type { MicroCMSEndpoint } from '../app'

  export let data: MicroCMSEndpoint
</script>

<svelte:head>
  <html lang="ja" />
  <title>{ogTitle}</title>
  <meta name="description" content={ogDescription} />
  <meta name="og:site_name" content={ogTitle} />
  <meta name="og:type" content="website" />
  <meta name="og:description" content={ogDescription} />
  <meta name="og:title" content={ogTitle} />
  <meta name="og:url" content={websiteUrl} />
  <meta name="og:image" content={`${websiteUrl}top_og.png`} />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:url" content={websiteUrl} />
  <meta name="twitter:creator" content={`@${twitterUserName}`} />
  <meta name="twitter:site" content={`A;@${twitterUserName}`} />
  <meta name="twitter:image" content={`${websiteUrl}top_og.png`} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<MainSection />
<NoticeSection />
<MessageSection />
<AboutSection />
{#if TEAM}
  <TeamSection items={staffs} />
{/if}
{#if TIMETABLE && data.sessions.totalCount !== 0}
  <TimetableSection items={data.sessions.contents} />
{/if}
{#if SPEAKER && data.speakers.totalCount !== 0}
  <SpeakerSection
    items={SHUFFLE_SPEAKER ? shuffleArray(data.speakers.contents) : data.speakers.contents}
  />
{/if}
{#if SPONSOR && data.sponsors.totalCount !== 0}
  <SponsorSection items={data.sponsors.contents} />
{/if}
<ProfileSection />
<SocialSection />

<script context="module" lang="ts">
  import { fetchRes } from '$lib/services/content.service'
  import { SPEAKER, SPONSOR, TEAM, TIMETABLE } from '$lib/feature'
  import { staffs } from '$lib/utils/team.constants'
  import { ogDescription, ogTitle, twitterUserName, websiteUrl } from '$lib/utils/constants'
  export async function load() {
    let sponsorRes
    let speakerRes
    let sessionRes
    Promise.all([
      (sponsorRes = await fetchRes('sponsors')),
      (speakerRes = await fetchRes('speakers')),
      (sessionRes = await fetchRes('sessions')),
    ])
    return { props: { sponsors: sponsorRes, speakers: speakerRes, sessions: sessionRes } }
  }
</script>

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
  export let sponsors
  export let speakers
  export let sessions
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
</svelte:head>

<MainSection />
<NoticeSection />
<MessageSection />
<AboutSection />
{#if TEAM}
  <TeamSection items={staffs} />
{/if}
{#if TIMETABLE}
  <TimetableSection items={sessions.contents} />
{/if}
{#if SPEAKER}
  <SpeakerSection items={speakers.contents} />
{/if}
{#if SPONSOR}
  <SponsorSection items={sponsors.contents} />
{/if}
<SocialSection />

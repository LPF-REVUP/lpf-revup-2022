<script lang="ts">
  import dayjs from 'dayjs'
  import duration from 'dayjs/plugin/duration.js'
  dayjs.extend(duration)
  import SessionInfo from '$lib/info/SessionInfo.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'
  import LinkPreview from '$lib/info/LinkPreview.svelte'

  import { ogTitle, websiteUrl } from '$lib/utils/constants'
  import { SHOW_ARCHIVE } from '$lib/feature'
  import type { Session } from '../../../app'

  export let data: { id: string; session: Session }

  const filterTime = (time: Date | string) => {
    return dayjs(time).format('HH:mm')
  }
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`${data.session.title} | ${ogTitle}`}</title>
  <meta name="description" content={data.session.description} />
  <meta name="og:site_name" content={`${data.session.title} | ${ogTitle}`} />
  <meta name="og:type" content="website" />
  <meta name="og:description" content={data.session.description} />
  <meta name="og:title" content={`${data.session.title} | ${ogTitle}`} />
  <meta name="og:url" content={`${websiteUrl}/session/${data.session.id}`} />
  <meta name="og:image" content={`${websiteUrl}og/session/RevUp_${data.session.id}.png`} />
  <meta name="twitter:title" content={`${data.session.title} | ${ogTitle}`} />
  <meta name="twitter:description" content={data.session.description} />
  <meta name="twitter:url" content={`${websiteUrl}/session/${data.session.id}`} />
  <meta name="twitter:creator" content={`@${data.session.speakers[0].twitter}`} />
  <meta name="twitter:site" content={`A;@${data.session.speakers[0].twitter}`} />
  <meta name="twitter:image" content={`${websiteUrl}og/session/RevUp_${data.session.id}.png`} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center flex-col md:w-[48vw] mx-auto h-48">
    <h1 class="text-white text-lg md:text-4xl">{data.session.title}</h1>
    <h2 class="text-white text-sm md:text-xl">
      {`${data.session.area.name} / ${filterTime(data.session.startsAt)} - ${filterTime(
        data.session.endsAt,
      )}`}
    </h2>
  </div>
</div>

<SessionInfo session={data.session} />
{#if SHOW_ARCHIVE && data.session.movieUrl}
  <div class="py-4 flex justify-center">
    <div class="flex justify-center items-center">
      <iframe src={data.session.movieUrl} title={data.session.title} width="900" height="600" />
    </div>
  </div>
{/if}
{#if SHOW_ARCHIVE && data.session.documentUrl}
  <div class="py-4 flex justify-center">
    <LinkPreview
      archiveInfo={{
        title: data.session.title,
        description: '',
        url: data.session.documentUrl,
        image: '',
      }}
    />
  </div>
{/if}
<SocialSection />

<script lang="ts">
  import dayjs from 'dayjs'
  import duration from 'dayjs/plugin/duration.js'
  dayjs.extend(duration)
  import SessionInfo from '$lib/info/SessionInfo.svelte'
  import SocialSection from '$lib/pages/SocialSection.svelte'

  import { ogTitle } from '$lib/utils/constants'

  export let data

  const filterTime = (time) => {
    return dayjs(time).format('HH:mm')
  }
</script>

<svelte:head>
  <html lang="ja" />
  <title>{`${data.session.title} | ${ogTitle}`}</title>
  <meta name="description" content={data.session.description} />
  <meta name="twitter:title" content={`${data.session.title} | ${ogTitle}`} />
  <meta name="twitter:description" content={data.session.description} />
</svelte:head>

<div class="bg-revup-top">
  <div class="flex items-center justify-center flex-col h-48">
    <h1 class="text-white text-4xl">{data.session.title}</h1>
    <h2 class="text-white text-xl">
      {`${data.session.area.name} / ${filterTime(data.session.startsAt)} - ${filterTime(
        data.session.endsAt,
      )}`}
    </h2>
  </div>
</div>

<SessionInfo session={data.session} />
<SocialSection />

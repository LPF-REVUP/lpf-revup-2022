<script lang="ts">
  import { match } from 'ts-pattern'
  import dayjs from 'dayjs'
  import duration from 'dayjs/plugin/duration.js'
  import AvatarInfo from '$lib/info/AvatarInfo.svelte'
  import { SHOW_ARCHIVE } from '$lib/feature'
  import VideoLogo from '$lib/assets/video_logo.svg'
  import ClipLogo from '$lib/assets/clip_logo.svg'
  import style from '$lib/services/style.service'
  import type { AreaId, Session } from '../../app'
  dayjs.extend(duration)
  export let items: Session[]
  $: hourLabels = () => {
    const minHour = minStartAt.hour()
    const max = items.map((s) => dayjs(s.endsAt)).reduce((a, b) => (dayjs(a).isAfter(b) ? a : b))
    const maxHour = max.minute() ? max.hour() + 1 : max.hour()
    const result = []
    for (let i = minHour; i < maxHour; i++) {
      result.push(i + ':00')
    }
    return result
  }
  const areas = ['biz', 'tech', 'hands', 'pioneer', 'collabo'].map(
    (id) => items.filter((s) => s.areaId?.area_id === id)[0]?.areaId,
  )
  const areaName = (area: AreaId) => {
    return match<unknown, string>(area)
      .with('biz', () => 'サービスデザイン')
      .with('tech', () => 'LINE Tech')
      .with('hands', () => 'ハンズオン')
      .with('pioneer', () => 'パイオニア')
      .with('collabo', () => 'コラボ')
      .exhaustive()
  }
  const minStartAt = items
    .map((s) => dayjs(s.startsAt))
    .reduce((a, b) => (dayjs(a).isBefore(b) ? a : b))
  const sessionLength = (session: Session) => {
    const hours = dayjs.duration(dayjs(session.endsAt).diff(session.startsAt)).asHours()
    return `${hours * 425 + (hours / 0.5 - 1) * 8 * 4}px`
  }
  const sessionBackgroundColor = (area: AreaId, isOpacity?: boolean) => {
    return match<unknown, string>(area)
      .with('biz', () => (isOpacity ? 'rgba(2, 72, 115, 0.8)' : '#024873'))
      .with('tech', () => (isOpacity ? 'rgba(2, 89, 48, 0.8)' : '#025930'))
      .with('hands', () => (isOpacity ? 'rgba(11, 35, 55, 0.8)' : '#0B2337'))
      .with('pioneer', () => (isOpacity ? 'rgba(79, 39, 2, 0.8)' : '#4f2702'))
      .with('collabo', () => (isOpacity ? 'rgba(139, 12, 225, 0.8)' : '#8B0CE1'))
      .exhaustive()
  }
  const showSessions = (areaId: string) => {
    const sortedSessions = items
      .filter((s) => s.areaId.area_id === areaId)
      .sort((a, b) => dayjs(a.startsAt).diff(b.startsAt))
    const result: Session[] = []
    const dummySessionBase = {
      title: '',
      description: '',
      applicationPage: '',
      speakers: [],
      tags: [],
      applicantsMessage: '',
    }
    let fromIndex = dayjs(minStartAt)
    sortedSessions.forEach((s, index) => {
      if (!s.color) s.color = '#666666'
      const startAt = dayjs(s.startsAt)
      if (fromIndex.isBefore(startAt)) {
        const dummySession = {
          id: index.toString(),
          areaId: items.filter((s) => s.areaId.area_id === areaId)[0].areaId,
          startsAt: fromIndex.toDate(),
          endsAt: startAt.toDate(),
          ...dummySessionBase,
        }
        result.push(dummySession)
      }
      result.push(s)
      fromIndex = dayjs(s.endsAt)
    })
    return result
  }
</script>

<section id="timetable" class="w-full bg-revup-medium-brand p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-line-primary-black font-bold text-left font-biryani-heading">
        TIMETABLE
      </div>
      <div class="ml-2 text-lg text-line-primary-black">タイムテーブル</div>
    </div>
    <div class="p-1">
      <p class="mt-8 mb-4 text-white">
        今年は各セッション毎の申し込みは不要です。上部のボタンよりお申し込み下さい。視聴URL、資料等はConnpassで共有いたします。
      </p>
      <div class="mt-44 overflow-x-scroll max-w-[800px] md:max-w-full">
        <div class="flex md:flex-wrap flex-col">
          <div class="flex flex-wrap flex-nowrap">
            <div class="mt-44">
              {#each hourLabels() as hourLabel}
                <div class="flex flex-col h-[473px] p-2 m-2 text-white">
                  {hourLabel}
                </div>
              {/each}
            </div>
            {#each areas as area}
              <div class="flex md:flex-wrap flex-col p-2 text-white">
                <div
                  class="flex items-center justify-center min-h-[93px] w-50"
                  use:style={{
                    'background-color': sessionBackgroundColor(area?.area_id),
                  }}
                >
                  <h2 class="font-bold">
                    {areaName(area?.area_id)}
                  </h2>
                </div>
                <div
                  class="w-0 h-0 border border-t-[36px] border-x-[105px]"
                  use:style={{
                    'border-color': `${sessionBackgroundColor(
                      area?.area_id,
                    )} transparent transparent`,
                  }}
                />
                {#each showSessions(area?.area_id) as session}
                  {#if session.title !== ''}
                    <a
                      href={`/session/${session.id}`}
                      title={session.title}
                      class="text-white hover:no-underline border-revup-deep-brand shadow rounded p-2 my-2"
                      use:style={{
                        'background-color': sessionBackgroundColor(session.areaId.area_id, true),
                      }}
                    >
                      <div
                        class="flex flex-col justify-between min-h-[183px] w-48"
                        use:style={{ height: sessionLength(session) }}
                      >
                        <div class="flex justify-around flex-col gap-2">
                          <h3>{session.title}</h3>
                          <div class="flex flex-col justify-end">
                            {#each session.speakers as speaker}
                              <div class="mb-2">
                                <AvatarInfo
                                  alt={`${speaker.familyNameJp} ${speaker.firstNameJp} Logo`}
                                  src={speaker.image.url}
                                  isMini={true}
                                  isHorizontal={true}
                                >
                                  {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                                </AvatarInfo>
                              </div>
                            {/each}
                          </div>
                        </div>
                        <div class="relative">
                          <div
                            class="flex justify-end mt-4 absolute right-[2px] bottom-[12px] z-20"
                          >
                            {#if SHOW_ARCHIVE && session.movieUrl}
                              <a href={session.movieUrl} target="_blank" rel="noopener noreferrer">
                                <img alt="Video" src={VideoLogo} class="w-9 px-2 z-20" />
                              </a>
                            {/if}
                            {#if SHOW_ARCHIVE && session.documentUrl}
                              <a
                                href={session.documentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img alt="Document" src={ClipLogo} class="w-9 px-2 z-20" />
                              </a>
                            {/if}
                          </div>
                        </div>
                      </div>
                    </a>
                  {:else}
                    <div
                      class="bg-line-secondary-black border-revup-deep-brand shadow rounded p-6 my-2"
                    >
                      <div class="flex flex-col min-h-[183px] w-32 h-40" />
                    </div>
                  {/if}
                {/each}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

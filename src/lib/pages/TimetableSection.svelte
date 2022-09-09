<script lang="ts">
  import dayjs from 'dayjs'
  import duration from 'dayjs/plugin/duration.js'
  import style from '$lib/services/style.service'
  import type { Session } from '../../app'
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
  const areas = ['tech', 'biz', 'pioneer', 'collabo', 'hands'].map(
    (id) => items.filter((s) => s.area?.id === id)[0]?.area,
  )
  const minStartAt = items
    .map((s) => dayjs(s.startsAt))
    .reduce((a, b) => (dayjs(a).isBefore(b) ? a : b))
  const sessionLength = (session: Session) => {
    const hours = dayjs.duration(dayjs(session.endsAt).diff(session.startsAt)).asHours()
    return `${hours * 425 + (hours / 0.5 - 1) * 8 * 4}px`
  }
  const showSessions = (areaId: string) => {
    const sortedSessions = items
      .filter((s) => s.area.id === areaId)
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
          area: items.filter((s) => s.area.id === areaId)[0].area,
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
        セッションへの参加登録はConnpassを利用しますので、視聴されたいセッションへの参加登録をお願いいたします。開始時刻前に配信URLをメールにてお知らせいたします。同時刻、複数セッションへの申込みも可能ですので、少しでも興味のあるセッションには参加登録をしておくことをおすすめいたします。
      </p>
      <div class="mt-12">
        <div class="flex md:flex-wrap flex-col">
          <div class="flex flex-wrap">
            <div class="mt-12">
              {#each hourLabels() as hourLabel}
                <div class="flex flex-col md:h-[473px] h-[383px] p-2 m-2 text-white">
                  {hourLabel}
                </div>
              {/each}
            </div>
            {#each areas as area}
              <div class="flex flex-col p-2 text-white">
                {area?.name}
                {#each showSessions(area?.id) as session}
                  {#if session.title !== ''}
                    <a
                      href={`/session/${session.id}`}
                      class="bg-primary-blue text-white hover:no-underline border-revup-deep-brand shadow rounded p-2 my-2"
                    >
                      <div
                        class="flex flex-col md:min-h-[183px] min-h-[150px] w-40"
                        use:style={{ height: sessionLength(session) }}
                      >
                        <h3>{session.title}</h3>
                        {#each session.speakers as speaker}
                          <div class="flex items-center mb-4">
                            <img
                              alt={`${speaker.familyNameJp} ${speaker.firstNameJp} Logo`}
                              src={speaker.image.url}
                              class="w-6 object-cover rounded-[50%]"
                            />
                            <div class="flex flex-col text-sm ml-2">
                              {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                            </div>
                          </div>
                        {/each}
                      </div>
                    </a>
                  {:else}
                    <div
                      class="bg-line-secondary-black border-revup-deep-brand shadow rounded p-6 my-2"
                    >
                      <div class="flex flex-col md:min-h-[183px] min-h-[150px] w-32 h-40" />
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

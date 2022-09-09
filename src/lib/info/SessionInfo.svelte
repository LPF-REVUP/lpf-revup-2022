<script lang="ts">
  import type { Session } from '../../app'
  export let session: Session
</script>

<div class="py-16 bg-revup-medium-brand">
  <div class="container m-auto px-6 md:px-12 xl:px-6">
    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-1">
      <div class="row-span-2 p-6 rounded-xl text-center sm:p-8">
        <div class="h-full flex flex-col justify-center space-y-4">
          <div class="flex flex-wrap items-center justify-center">
            {#each session.speakers as speaker}
              <a href={`/speaker/${speaker.id}`} class="flex flex-col px-2">
                <img
                  class="w-40 h-40 mx-auto rounded-full"
                  src={speaker.image.url}
                  alt={`${speaker.familyNameJp} ${speaker.firstNameJp} Logo`}
                  loading="lazy"
                />
                <h6 class="text-lg text-white font-semibold leading-none">
                  {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                </h6>
                <span class="text-xs text-white">
                  {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                </span>
              </a>
            {/each}
          </div>
          <p class="text-white md:text-xl md:px-24 px-2">
            {@html session.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

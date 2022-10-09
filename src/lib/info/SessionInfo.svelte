<script lang="ts">
  import type { Session } from '../../app'
  import { START_APPLY } from '$lib/feature'
  export let session: Session
</script>

<div class="py-16 bg-revup-medium-brand z-20">
  <div class="container m-auto px-6 md:px-12 xl:px-6">
    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-1">
      <div class="row-span-2 p-6 rounded-xl text-center sm:p-8">
        <div class="h-full flex flex-col justify-center space-y-4">
          <div class="flex flex-wrap items-center justify-center">
            {#each session.speakers as speaker}
              <a href={`/speaker/${speaker.id}`} class="flex flex-col gap-2 px-2 py-4 max-h-72">
                <img
                  class="md:w-40 w-24 md:h-36 h-24 min-w-[140px] min-h-[140px] mx-auto object-cover rounded-full"
                  src={speaker.image.url}
                  alt={`${speaker.familyNameJp} ${speaker.firstNameJp} Logo`}
                  loading="lazy"
                />
                <h6 class="text-lg text-white font-semibold">
                  {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                </h6>
                <span class="text-xs text-white">
                  {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                </span>
                {#if speaker.affiliation !== undefined}
                  <p class="md:text-md text-sm text-white text-center font-normal">
                    {speaker.affiliation}
                  </p>
                {/if}
                {#if speaker.title !== undefined}
                  <p class="md:text-md text-sm text-white text-center font-normal">
                    {speaker.title}
                  </p>
                {/if}
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
  {#if START_APPLY}
    <div class="text-center py-8">
      <div class="custom-btn">
        <a
          href="https://linedevelopercommunity.connpass.com/event/260460"
          target="_blank"
          rel="noopener noreferrer"
        >
          参加申し込みはこちら
        </a>
      </div>
    </div>
  {/if}
</div>

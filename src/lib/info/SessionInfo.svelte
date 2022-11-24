<script lang="ts">
  import type { Session } from '../../app'
  import AvatarInfo from '$lib/info/AvatarInfo.svelte'
  import LinkPreview from '$lib/info/LinkPreview.svelte'
  import { START_APPLY, SHOW_ARCHIVE } from '$lib/feature'
  export let session: Session
</script>

<div class="py-16 bg-revup-medium-brand z-20">
  <div class="container m-auto px-6 md:px-12 xl:px-6">
    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-1">
      <div class="row-span-2 p-6 rounded-lg border text-center sm:p-8">
        <div class="h-full flex flex-col justify-center space-y-4 gap-8">
          <div class="flex flex-wrap items-center justify-center">
            {#each session.speakers as speaker}
              <a
                href={`/speaker/${speaker.id}`}
                title={`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                class="flex flex-col gap-2 px-2 py-4 max-h-72 hover:no-underline hover:transition-none hover:filter-none"
              >
                <AvatarInfo
                  alt={`${speaker.familyNameJp} ${speaker.firstNameJp} Logo`}
                  src={speaker.image.url}
                >
                  <div class="flex flex-col text-sm ml-2">
                    <h6 class="text-lg text-white font-semibold">
                      {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                    </h6>
                    <span class="text-xs text-white">
                      {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                    </span>
                    {#if speaker.affiliation !== undefined}
                      <p
                        class="md:text-md text-sm text-white md:text-center max-w-[200px] w-full font-normal"
                      >
                        {speaker.affiliation}
                      </p>
                    {/if}
                    {#if speaker.title !== undefined}
                      <p
                        class="md:text-md text-sm text-white md:text-center max-w-[200px] w-full font-normal"
                      >
                        {speaker.title}
                      </p>
                    {/if}
                  </div>
                </AvatarInfo>
              </a>
            {/each}
          </div>
          <div class="flex justify-center">
            <p class="p-4 text-white md:text-xl md:px-24 w-[80vw] md:w-[48] px-2">
              {@html session.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {#if SHOW_ARCHIVE && session.movieUrl}
    <div class="py-4 flex justify-center">
      <div class="flex justify-center items-center">
        <iframe
          src={`https://www.youtube.com/embed/${session.movieUrl.split('v=')[1]}?autoplay=1&mute=1`}
          title={session.title}
          width="900"
          height="600"
        />
      </div>
    </div>
  {/if}
  {#if SHOW_ARCHIVE && session.documentUrl}
    <div class="py-4 flex justify-center">
      <LinkPreview
        archiveInfo={{
          title: session.title,
          description: '',
          url: session.documentUrl,
          image: '',
        }}
      />
    </div>
  {/if}
  {#if START_APPLY}
    <div class="text-center py-8">
      <div class="custom-btn">
        <a
          href="https://linedevelopercommunity.connpass.com/event/260460"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:transition-none hover:filter-none"
        >
          参加申し込みはこちら
        </a>
      </div>
    </div>
  {/if}
</div>

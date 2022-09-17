<script lang="ts">
  import type { Speaker } from '../../app'
  export let items: Speaker[]
</script>

<section id="speaker" class="w-full bg-revup-medium-brand p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-line-primary-black font-bold text-left font-biryani-heading">
        SPEAKERS
      </div>
      <div class="ml-2 text-lg text-line-primary-black">スピーカー</div>
    </div>
    <div class="p-1 mx-auto">
      <div class="h-full">
        <div class="mr-2 mb-3 w-full flex flex-wrap justify-center md:justify-start gap-px">
          {#each items as speaker}
            <div class="px-2 py-4 w-[170px] md:w-52">
              <a href={`/speaker/${speaker.id}`} class="text-white hover:no-underline">
                <img
                  alt={`${speaker.familyNameEn} ${speaker.firstNameEn} logo`}
                  src={speaker.image.url}
                  class="md:w-48 w-24 md:h-44 h-24 min-w-[140px] min-h-[140px] object-cover rounded-[50%]"
                />
                <div class="flex flex-col items-center justify-center">
                  <h3
                    class="md:text-lg text-md md:text-center max-w-[160px] h-12 leading-6 font-bold"
                  >
                    {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                  </h3>
                  <h4
                    class="md:text-md text-sm md:text-center max-w-[160px] h-10 leading-3 font-normal"
                  >
                    {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                  </h4>
                  {#if speaker.affiliation !== undefined}
                    <p
                      class="md:text-md text-sm md:text-center max-w-[160px] h-8 leading-4 font-normal"
                    >
                      {speaker.affiliation}
                    </p>
                  {/if}
                  {#if speaker.title !== undefined}
                    <p
                      class="md:text-md text-sm md:text-center max-w-[160px] h-8 leading-2 font-normal"
                    >
                      {speaker.title}
                    </p>
                  {/if}
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

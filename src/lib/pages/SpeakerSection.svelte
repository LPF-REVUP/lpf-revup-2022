<script lang="ts">
  export let items
</script>

<section id="about" class="w-full bg-line-primary-black p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-revup-brand font-bold text-left font-biryani-heading">
        SPEAKERS
      </div>
      <div class="ml-2 text-lg text-revup-brand">スピーカー</div>
    </div>
    <div class="p-1">
      <div class="h-full">
        <div class="mr-2 mb-3 w-full flex flex-wrap gap-px">
          {#each items as speaker}
            <div class="p-4">
              <a href={`/speaker/${speaker.id}`}>
                <img
                  alt={`${speaker.familyNameEn} ${speaker.firstNameEn} logo`}
                  src={speaker.image.url}
                  class="md:w-48 w-24 min-w-[140px] object-cover rounded-[50%]"
                />
                <div class="flex flex-col">
                  <h3
                    class="md:text-lg text-md md:text-center max-w-[140px] leading-6 text-white font-bold"
                  >
                    {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                  </h3>
                  <h4
                    class="md:text-md text-sm md:text-center max-w-[140px] leading-8 text-white font-normal"
                  >
                    {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                  </h4>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

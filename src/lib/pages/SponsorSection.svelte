<script lang="ts">
  export let items
</script>

<section id="sponsor" class="w-full bg-revup-medium-brand p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-line-primary-black font-bold text-left font-biryani-heading">
        SPONSORS
      </div>
      <div class="ml-2 text-lg text-line-primary-black">スピーカー</div>
    </div>
    <div class="p-1">
      <div class="h-full">
        <div class="mr-2 mb-3 w-full flex flex-wrap gap-px">
          {#each items as sponsor}
            <div class="px-2 py-4">
              <a href={sponsor.link} target="_blank" rel="noopener">
                <img alt={`${sponsor.name} logo`} src={sponsor.image.url} class="md:w-72 w-36" />
                <div class="flex flex-col items-center justify-center">
                  <h3
                    class="md:text-lg text-md md:text-center max-w-[140px] h-8 leading-8 text-white font-bold"
                  >
                    {sponsor.name}
                  </h3>
                </div>
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

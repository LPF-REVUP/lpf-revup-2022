<script lang="ts">
  export let items
</script>

<section id="about" class="w-full bg-line-primary-black p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-revup-brand font-bold text-left font-biryani-heading">
        SPONSORS
      </div>
      <div class="ml-2 text-lg text-revup-brand">スピーカー</div>
    </div>
    <div class="p-1">
      <div class="h-full">
        <div class="mr-2 mb-3 w-full flex flex-wrap gap-px">
          {#each items as sponsor}
            <div class="p-4">
              <a href={sponsor.link} target="_blank" rel="noopener">
                <img alt={`${sponsor.name} logo`} src={sponsor.image.url} class="md:w-72 w-36" />
                <div class="flex flex-col">
                  <h3
                    class="md:text-lg text-md md:text-center max-w-[140px] leading-6 text-white font-bold"
                  >
                    {sponsor.name}
                  </h3>
                  <h4 class="md:text-md text-sm md:text-center leading-8 text-white font-normal">
                    {sponsor.rank}
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

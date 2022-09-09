<script lang="ts">
  import type { Staff } from '../../app'
  export let items: Staff[]
</script>

<section id="team" class="w-full bg-revup-medium-brand p-3">
  <div class="pt-20 pb-2.5 md:mx-24">
    <div class="mb-4">
      <div class="ml-2 text-3xl text-line-primary-black font-bold text-left font-biryani-heading">
        Team
      </div>
      <div class="ml-2 text-lg text-line-primary-black">実行委員</div>
    </div>
    <div class="p-1">
      <div class="h-full">
        <div class="mr-2 mb-3 w-full flex flex-wrap gap-px">
          {#each items as staff}
            <div class="px-2 py-4 flex flex-col align-middle items-center justify-center">
              <img
                alt={`${staff.name} logo`}
                src={staff.image}
                class="md:w-48 w-24 min-w-[140px] object-cover rounded-[50%]"
              />
              <div class="flex flex-col items-center justify-center">
                <h3
                  class="md:text-lg text-md md:text-center max-w-[140px] h-6 leading-6 text-white font-bold"
                >
                  {`${staff.name}`}
                </h3>
                <h4
                  class="md:text-md text-sm md:text-center max-w-[160px] h-6 leading-4 text-white font-normal"
                >
                  {`${staff.company}`}
                </h4>
                <p
                  class="md:text-md text-sm md:text-center max-w-[160px] h-6 leading-2 text-white font-normal"
                >
                  {`${staff.description}`}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

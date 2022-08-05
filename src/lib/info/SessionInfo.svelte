<script lang="ts">
  export let session
</script>

<div class="py-16">
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-1">
      <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
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
                <h6 class="text-lg font-semibold leading-none">
                  {`${speaker.familyNameJp} ${speaker.firstNameJp}`}
                </h6>
                <span class="text-xs text-gray-500">
                  {`${speaker.familyNameEn} ${speaker.firstNameEn}`}
                </span>
              </a>
            {/each}
          </div>
          <p class="text-gray-600 md:text-xl px-24 md:px-2">
            {@html session.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import dayjs from 'dayjs'
  import { notices } from '$lib/utils/notice.constants'
</script>

<section class="grow basis-auto shrink-0 mx-auto w-full max-w-full bg-revup-light-brand">
  <div class="py-4 w-full mx-auto relative text-center overflow-hidden">
    <div class="px-3 mx-auto w-full py-8">
      {#each notices as item}
        <div class="mb-2 flex justify-center align-middle items-center flex-col md:flex-row">
          <h3 class="text-lg font-bold md:mr-4">{dayjs(item.date).format('YYYY年MM月DD日')}</h3>
          <p class="text-sm font-normal">{item.title}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

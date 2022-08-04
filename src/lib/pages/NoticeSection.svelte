<script lang="ts">
  import dayjs from 'dayjs'
  import { notices } from '$lib/notice'
</script>

<section class="grow basis-auto shrink-0 mx-auto w-full max-w-full bg-revup-light-brand">
  <div class="py-4 w-full mx-auto relative text-center overflow-hidden">
    <div class="px-3 mx-auto w-full py-8">
      {#each notices as item}
        <div class="text-lg">
          {`${dayjs(item.date).format('YYYY年MM月DD日')} - ${item.title}`}
        </div>
      {/each}
    </div>
  </div>
</section>

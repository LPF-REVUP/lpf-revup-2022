<script lang="ts">
  import dayjs from 'dayjs'
  import { notices } from '$lib/utils/notice.constants'
</script>

<section class="grow basis-auto shrink-0 mx-auto w-full max-w-full bg-revup-light-brand">
  <div class="py-4 w-full mx-auto relative text-center overflow-hidden">
    <ul class="px-3 mx-auto w-full py-8">
      {#each notices as item}
        <li class="mb-2 flex justify-center align-middle items-center flex-col md:flex-row">
          <h3 class="md:text-right md:w-40 text-lg text-line-secondary-black font-bold">
            {dayjs(item.date).format('YYYY年MM月DD日')}
          </h3>
          <p class="text-sm md:w-96 md:pl-4 md:text-left text-line-secondary-black font-normal">
            {item.title}
          </p>
        </li>
      {/each}
    </ul>
  </div>
</section>

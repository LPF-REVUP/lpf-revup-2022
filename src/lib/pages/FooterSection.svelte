<script lang="ts">
  import { copyright, pastEvents } from '$lib/utils/constants'
</script>

<footer class="bg-line-primary-black">
  <div>
    <div class="text-center py-4 h-12">
      <a href="/privacy" target="_blank" rel="noopener" class="text-white">個人情報保護方針</a>
    </div>
    <div class="flex justify-center items-center py-4 h-12">
      {#each pastEvents as event}
        <a href={event.url} class="mx-2 text-revup-brand" target="_blank" rel="noopener"
          >{event.text}</a
        >
      {/each}
    </div>
    <div class="h-12 text-white text-center py-4">{copyright}</div>
  </div>
</footer>

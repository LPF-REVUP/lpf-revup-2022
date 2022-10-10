<script lang="ts">
  export let src
  export let alt
  export let isMini = false
  export let isHorizontal = false
</script>

<div class={isHorizontal ? 'flex items-center flex-row' : 'flex items-center flex-col'}>
  <img
    {alt}
    {src}
    class={isMini
      ? 'w-6 h-6 object-cover rounded-[50%]'
      : 'md:w-48 w-24 md:h-44 h-24 min-w-[140px] min-h-[140px] object-cover rounded-[50%]'}
  />
  <slot />
</div>

<script lang="ts">
  import { socialLinks } from '$lib/utils/constants'
  import FacebookLogo from '$lib/assets/facebook_logo.svg'
  import HatenaLogo from '$lib/assets/hatena_logo.svg'
  import TwitterLogo from '$lib/assets/twitter_logo.svg'
</script>

<section class="grow basis-auto shrink-0 mx-auto w-[64vw] max-w-full bg-line-black bg-white">
  <div class="py-16 w-full mx-auto relative text-center overflow-hidden">
    <div class="px-3 mx-auto w-full py-8">
      <span
        class="m-0 absolute t-[60%] l-2/4 md:text-[120px] text-6xl -translate-x-2/4 -translate-y-2/4 text-line-green opacity-10 pointer-events-none font-biryani-heading"
      >
        SHARE!
      </span>
      <div class="flex items-center justify-center align-middle">
        {#each socialLinks as link}
          <a href={link.url} class="cursor-pointer" target="_blank" rel="noopener">
            {#if link.value === 'facebook'}
              <img alt={`${link.text} Logo`} src={FacebookLogo} class="w-12 px-2" />
            {/if}
            {#if link.value === 'twitter'}
              <img alt={`${link.text} Logo`} src={TwitterLogo} class="w-12 px-2" />
            {/if}
            {#if link.value === 'hatena'}
              <img alt={`${link.text} Logo`} src={HatenaLogo} class="w-12 px-2" />
            {/if}
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

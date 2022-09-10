<script lang="ts">
  import { developerDescription, developerLinks, developerName } from '$lib/utils/constants'
  import GithubLogo from '$lib/assets/github_mono_logo.svg'
  import BlogLogo from '$lib/assets/blog_mono_logo.svg'
  import TwitterLogo from '$lib/assets/twitter_mono_logo.svg'
  import EmailLogo from '$lib/assets/email_mono_logo.svg'
</script>

<div class="p-6 md:py-12 md:px-72 bg-revup-light-brand">
  <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
    <img
      src="/bakeneko2.png"
      alt=""
      class="self-center flex-shrink-0 w-24 h-24 rounded-full md:justify-self-start bg-gray-500 border-gray-700"
    />
    <div class="flex flex-col">
      <h4 class="text-lg font-semibold text-center text-line-secondary-black md:text-left">
        {developerName}
      </h4>
      <p class="text-line-black">{developerDescription}</p>
    </div>
  </div>
  <div class="flex justify-center pt-4 space-x-4 align-center">
    {#each developerLinks as link}
      <a
        href={link.url}
        class="p-2 rounded-md text-line-secondary-black hover:text-revup-light-brand"
        target="_blank"
        rel="noopener"
      >
        {#if link.value === 'github'}
          <img alt={`${link.text} Logo`} src={GithubLogo} class="w-8 px-1" />
        {/if}
        {#if link.value === 'tech_blog'}
          <img alt={`${link.text} Logo`} src={BlogLogo} class="w-8 px-1" />
        {/if}
        {#if link.value === 'twitter'}
          <img alt={`${link.text} Logo`} src={TwitterLogo} class="w-8 px-1" />
        {/if}
        {#if link.value === 'email'}
          <img alt={`${link.text} Logo`} src={EmailLogo} class="w-8 px-1" />
        {/if}
      </a>
    {/each}
  </div>
</div>

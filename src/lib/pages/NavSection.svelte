<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { SPEAKER, SPONSOR, TIMETABLE } from '$lib/feature'
  import MainLogo from '$lib/assets/main-picture_invert-logo.svg'
  import GithubLogo from '$lib/assets/github_logo.svg'
  import LoginLogo from '$lib/assets/h__login--hover.svg'

  export let signedStatus
  export let profileName
  export let profileUrl

  const dispatch = createEventDispatcher()

  const signIn = () => {
    dispatch('signIn')
  }
</script>

<nav class="bg-revup-deep-brand border-gray-200 h-14 mt-0 translate-y-0 md:w-full px-2 sm:px-4">
  <div class="container flex flex-wrap justify-between align-middle h-14 items-center mx-auto">
    <a href="https://revup.jp" class="flex items-center">
      <img alt="revup 2022 Logo" src={MainLogo} class="w-24" />
    </a>
    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
      <svg
        class="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <a
            href="#about"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
          >
            About
          </a>
        </li>
        {#if TIMETABLE}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="#timetable"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
            >
              Timetable
            </a>
          </li>
        {/if}
        {#if SPEAKER}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="#speaker"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
            >
              Speaker
            </a>
          </li>
        {/if}
        {#if SPONSOR}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="#sponsor"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
            >
              Sponsor
            </a>
          </li>
        {/if}
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <a
            href="https://github.com/LPF-REVUP/lpf-revup-2022"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
            target="_blank"
            rel="noopener"
          >
            <img alt="Github Logo" src={GithubLogo} class="w-8" />
          </a>
        </li>
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <button
            type="button"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-revup-brand md:p-0"
            on:click={signIn}
          >
            {#if !signedStatus}
              <img alt="Login Logo" src={LoginLogo} class="w-32" />
            {:else}
              <img
                alt={`${profileName} Logo`}
                src={profileUrl}
                class="w-12 object-cover rounded-[50%]"
              />
            {/if}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

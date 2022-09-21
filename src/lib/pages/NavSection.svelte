<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { SPEAKER, SPONSOR, TIMETABLE } from '$lib/feature'
  import MainLogo from '$lib/assets/main-picture_invert-logo.svg'
  import GithubLogo from '$lib/assets/github_logo.svg'
  import GithubMonoLogo from '$lib/assets/github_mono_logo.svg'
  import LoginLogo from '$lib/assets/h__login--hover.svg'

  export let signedStatus
  export let profileName
  export let profileUrl

  let isOpen = false

  const dispatch = createEventDispatcher()

  const signIn = () => {
    dispatch('signIn')
  }

  // トグルが効いていないので、ハック的に発火メソッドを書いた
  const toggleMenu = () => {
    isOpen = !isOpen
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
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
      aria-controls="mobile-menu"
      aria-expanded="false"
      on:click={toggleMenu}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6 text-white"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    {#if isOpen}
      <div class="md:hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li>
            <a
              href="/"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              on:click={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              on:click={toggleMenu}
            >
              About
            </a>
          </li>
          {#if TIMETABLE}
            <li>
              <a
                href="/#timetable"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                on:click={toggleMenu}
              >
                Timetable
              </a>
            </li>
          {/if}
          {#if SPEAKER}
            <li>
              <a
                href="/#speaker"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                on:click={toggleMenu}
              >
                Speaker
              </a>
            </li>
          {/if}
          {#if SPONSOR}
            <li>
              <a
                href="/#sponsor"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                on:click={toggleMenu}
              >
                Sponsor
              </a>
            </li>
          {/if}
          <li>
            <a
              href="https://github.com/LPF-REVUP/lpf-revup-2022"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              target="_blank"
              rel="noopener"
            >
              <img alt="Github Logo" src={GithubMonoLogo} class="w-8" />
            </a>
          </li>
          <li>
            <button
              type="button"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
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
    {/if}
    <div class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <a
            href="/#about"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
          >
            About
          </a>
        </li>
        {#if TIMETABLE}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="/#timetable"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
            >
              Timetable
            </a>
          </li>
        {/if}
        {#if SPEAKER}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="/#speaker"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
            >
              Speaker
            </a>
          </li>
        {/if}
        {#if SPONSOR}
          <li class="list-none p-0 m-0 flex justify-center items-center">
            <a
              href="/#sponsor"
              class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
            >
              Sponsor
            </a>
          </li>
        {/if}
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <a
            href="https://github.com/LPF-REVUP/lpf-revup-2022"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
            target="_blank"
            rel="noopener"
          >
            <img alt="Github Logo" src={GithubLogo} class="w-8" />
          </a>
        </li>
        <li class="list-none p-0 m-0 flex justify-center items-center">
          <button
            type="button"
            class="block text-white py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
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

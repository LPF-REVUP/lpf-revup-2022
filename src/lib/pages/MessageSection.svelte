<script lang="ts">
  import {
    organization,
    conferenceTitle,
    conferenceSubtitle,
    message1,
    message2,
    videoUrl,
  } from '$lib/utils/constants'
  import { START_APPLY, START_PROPOSAL, SHOW_YOUTUBE } from '$lib/feature'
</script>

<section class="w-full mx-auto px-0 bg-revup-medium-brand py-8 px-3 z-20">
  <div class="mx-auto">
    {#if SHOW_YOUTUBE}
      <div class="mb-4">
        <div class="flex justify-center items-center">
          <iframe src={videoUrl} title="revup 2021" width="900" height="600" />
        </div>
      </div>
    {/if}
    <div class="py-15 mb-4 w-full">
      <h2 class="text-center py-4 mb-8 text-line-primary-black text-4xl font-biryani-heading">
        {organization}
      </h2>
      <h3 class="text-center py-4 mb-8 text-line-primary-black text-3xl font-biryani-heading">
        {conferenceTitle}
      </h3>
      <h4
        class="text-white text-center py-4 mb-8 text-line-primary-black text-lg font-biryani-heading"
      >
        {conferenceSubtitle}
      </h4>
      <p
        class="text-white text-center py-4 px-0 mx-auto md:max-w-[50%] flex grow shrink-0 basis-6/12 mb-8 text-white text-lg"
      >
        {message1}
      </p>
      <p
        class="text-white text-center py-4 px-0 mx-auto md:max-w-[50%] flex grow shrink-0 basis-6/12 mb-8 text-white text-lg"
      >
        {message2}
      </p>
      {#if START_PROPOSAL}
        <div class="text-center">
          <a
            href="https://zenn.dev/linedc/articles/58b8148aa77d29"
            class="bg-primary-blue p-6 text-white rounded no-underline hover:text-white hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            登壇申し込み(CfP)はこちら！
          </a>
        </div>
      {/if}
      {#if START_APPLY}
        <div class="text-center">
          <div class="custom-btn">
            <a
              href="https://linedevelopercommunity.connpass.com/event/260460"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="block relative"> 参加申し込みはこちら </span>
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

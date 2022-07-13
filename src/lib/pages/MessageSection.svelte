<script lang="ts">
  import {
    organization,
    conferenceTitle,
    conferenceSubtitle,
    message1,
    message2,
    videoUrl,
  } from '$lib/utils/constants'
</script>

<section class="w-full mx-auto px-0 bg-line-primary-black p-3">
  <div class="mx-auto">
    <div class="mb-4">
      <div class="flex justify-center items-center">
        <iframe src={videoUrl} title="revup 2021" width="900" height="600" />
      </div>
    </div>
    <div class="py-15 mb-4 w-full">
      <h2 class="text-center py-4 mb-8 text-revup-brand text-4xl font-biryani-heading">
        {organization}
      </h2>
      <h3 class="text-center py-4 mb-8 text-revup-brand text-3xl font-biryani-heading">
        {conferenceTitle}
      </h3>
      <h4 class="text-white text-center py-4 mb-8 text-revup-brand text-lg font-biryani-heading">
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
    </div>
  </div>
</section>

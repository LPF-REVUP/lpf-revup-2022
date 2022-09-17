<script lang="ts">
  import TwitterLogo from '$lib/assets/twitter_logo.svg'
  import style from '$lib/services/style.service'
  import type { Speaker } from '../../app'
  export let speaker: Speaker
</script>

<div class="py-16 bg-revup-medium-brand">
  <div class="container mt-16 mb-16 mx-auto p-4 md:p-0">
    <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
      <div
        class="bg-cover bg-center w-full md:w-1/3 h-96 md:h-auto relative"
        use:style={{ 'background-image': `url(${speaker.image.url})` }}
      >
        <div class="absolute text-xl">
          <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
        </div>
      </div>
      <div class="bg-white w-full md:w-2/3 bg-revup-medium-brand">
        <div class="h-full mx-auto md:px-0 md:-ml-6 relative">
          <div
            class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center"
          >
            <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
              <h3 class="h-12 leading-6">{`${speaker.familyNameJp} ${speaker.firstNameJp}`}</h3>
              <p class="mb-0 mt-3 text-grey-dark text-sm italic h-10 leading-8">
                {`${speaker.firstNameEn} ${speaker.familyNameEn}`}
              </p>
              <hr class="w-1/4 md:ml-0 mt-4 border lg:hidden" />
            </div>
            <div class="w-full lg:w-3/5 lg:px-3 min-h-[120px] flex items-center justify-center">
              <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                {@html speaker.profile}
              </p>
            </div>
            <div
              class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 min-h-[240px] flex items-center justify-center text-center md:text-left"
            >
              <a href={`https://twitter.com/${speaker.twitter}`} target="_blank" rel="noopener">
                <img alt="Twitter logo" src={TwitterLogo} class="w-12 px-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  export let archiveInfo
</script>

<div class="table w-full max-w-[72vw] border border-[#e6e6e6] link-preview">
  <a href={archiveInfo.url} target="_blank" rel="noopener noreferrer">
    <div class="mb-2 max-h-[100px] overflow-hidden text-base text-white font-bold break-all">
      {archiveInfo.title}
    </div>
    <div
      class="max-h-12 mb-1 line-clamp-2 overflow-hidden text-white text-sm font-normal leading-6 break-all"
    >
      {archiveInfo.description}
    </div>
    <div
      class="block mb-0 min-w-[120px] max-w-[120px] md:min-w-[320px] text-white md:max-w-[320px] text-sm font-normal leading-6"
    >
      {archiveInfo.url}
    </div>
  </a>
  <img
    class="w-1/4 object-cover min-w-[160px] md:min-w-[240px] h-[150px] align-middle"
    alt=""
    src={archiveInfo.image ? archiveInfo.image : `/og/${archiveInfo.image}.jpg`}
  />
</div>

<style>
  .link-preview > a {
    display: table-cell;
    flex: 1;
    flex-direction: column;
    width: 75%;
    padding: 16px;
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
  }
</style>

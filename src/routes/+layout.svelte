<script lang="ts">
  import { useLine } from '$lib/hooks/useLine'
  import { useLineInfo } from '$lib/hooks/useLineInfo'
  import NavSection from '$lib/pages/NavSection.svelte'
  import FooterSection from '$lib/pages/FooterSection.svelte'
  import { variables } from '$lib/variables'
  import '../app.css'

  let profile = {}
  let errorMessage = ''

  const { liffObject, status, login, logout } = useLine()
  const {
    profile: { displayName, pictureUrl },
    language,
    os,
    version,
    lineVersion,
  } = useLineInfo({
    liff: liffObject,
    status: status,
  })
</script>

<NavSection signedStatus={status} {displayName} {pictureUrl} on:signIn={login} />
<slot />
<FooterSection />

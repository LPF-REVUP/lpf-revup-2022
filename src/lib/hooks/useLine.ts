import { onMount } from 'svelte'

export type Status = 'signin' | 'inited'

export const useLine = () => {
  let liffObject: any | null = null
  let status: Status = 'signin'

  onMount(() => {
    if (status === 'inited') return

    import('@line/liff').then((liff: any) => {
      liff
        .init({ liffId: import.meta.env.VITE_LIFF_ID })
        .then(() => {
          liffObject = liff
          if (liff.isLoggedIn()) status = 'inited'
        })
        .catch((err: any) => {
          console.error({ err })
        })
    })
  })

  const login = () => {
    liffObject?.login({})
  }

  const logout = () => {
    liffObject?.logout()
  }

  return {
    liffObject,
    status,
    login,
    logout,
  }
}

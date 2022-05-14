import { variables } from '$lib/variables'

export const fetchRes = async (url: 'sponsors' | 'speakers' | 'sessions') => {
  const res = await fetch(`${variables.microCmsApiEndpoint}${url}?limit=50`, {
    headers: { 'X-MICROCMS-API-KEY': variables.microCmsApiKey },
  })
  return await res.json()
}

export const fetchResBy = async (url: 'speakers' | 'sessions', id: string) => {
  const res = await fetch(`${variables.microCmsApiEndpoint}${url}/${id}`, {
    headers: { 'X-MICROCMS-API-KEY': variables.microCmsApiKey },
  })
  return await res.json()
}

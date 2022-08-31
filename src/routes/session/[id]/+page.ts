import { fetchResBy } from '$lib/services/content.service'

export async function load({ params }) {
  const sessionRes = await fetchResBy('sessions', params.id)
  return { session: sessionRes }
}

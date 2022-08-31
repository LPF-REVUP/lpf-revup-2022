import { fetchResBy } from '$lib/services/content.service'

export async function load({ params }) {
  const speakerRes = await fetchResBy('speakers', params.id)
  return { id: params.id, speaker: speakerRes }
}

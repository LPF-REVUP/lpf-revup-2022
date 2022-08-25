import { fetchRes } from '$lib/services/content.service'

export async function load() {
  let sponsorRes
  let speakerRes
  let sessionRes
  Promise.all([
    (sponsorRes = await fetchRes('sponsors')),
    (speakerRes = await fetchRes('speakers')),
    (sessionRes = await fetchRes('sessions')),
  ])
  return { sponsors: sponsorRes, speakers: speakerRes, sessions: sessionRes }
}

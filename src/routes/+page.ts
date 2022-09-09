import { fetchRes } from '$lib/services/content.service'
import type { Session, Speaker, Sponsor } from '../app'

export async function load() {
  let sponsorRes: Promise<{ totalCount: number; contents: Sponsor[] }>
  let speakerRes: Promise<{ totalCount: number; contents: Speaker[] }>
  let sessionRes: Promise<{ totalCount: number; contents: Session[] }>
  Promise.all([
    (sponsorRes = await fetchRes('sponsors')),
    (speakerRes = await fetchRes('speakers')),
    (sessionRes = await fetchRes('sessions')),
  ])
  return { sponsors: sponsorRes, speakers: speakerRes, sessions: sessionRes }
}

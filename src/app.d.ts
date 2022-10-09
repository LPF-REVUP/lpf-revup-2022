// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string
  }

  interface ImportMetaEnv {
    VITE_LIFF_ID: string
    VITE_MICROCMS_API_KEY: string
    VITE_MICROCMS_API_ENDPOINT: string
  }

  // interface Platform {}

  // interface PrivateEnv {}

  // interface PublicEnv {}
}

export interface Staff {
  name: string
  description: string
  company: string
  image: string
}

interface Image {
  url: string
}

interface Area {
  id: string
  name: string
}

interface Tag {
  name: string
}

export interface Sponsor {
  name: string
  link: string
  image: Image
  rank: string
}

export interface Speaker {
  id: string
  firstNameJp: string
  familyNameJp: string
  firstNameEn: string
  familyNameEn: string
  title: string
  affiliation: string
  profile: string
  image: Image
  sessions: Session[]
  twitter: string
  facebook: string
  hideInSpeakerList: boolean
}

export interface Session {
  id: string
  title: string
  description: string
  area: Area // if you use microCMS team plan
  startsAt: Date | string
  endsAt: Date | string
  applicationPage: string
  speakers: Speaker[]
  tags: Tag[] // if you use microCMS team plan
  applicantsMessage: string
  documentUrl?: string
  movieUrl?: string
  color?: string
  applicantCount?: number
}

export interface MicroCMSEndpoint {
  sponsors: { totalCount: number; contents: Sponsor[] }
  speakers: { totalCount: number; contents: Speaker[] }
  sessions: { totalCount: number; contents: Session[] }
}

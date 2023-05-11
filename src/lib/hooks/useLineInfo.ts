import type { Status } from './useLine'

interface UseLineInfoProps {
  liff: any | null
  status: Status
}

export const useLineInfo = ({ liff, status }: UseLineInfoProps) => {
  let displayName = ''
  let pictureUrl = ''

  if (status !== 'inited') return { profile: { displayName, pictureUrl }, version: '' }

  liff
    .getProfile()
    .then((profile: any) => {
      displayName = profile.displayName
      pictureUrl = profile.pictureUrl
    })
    .catch((err: any) => {
      console.error({ err })
    })

  const version = liff.getVersion()

  return {
    profile: { displayName, pictureUrl },
    version,
  }
}

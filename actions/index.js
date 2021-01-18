import useSWR from 'swr'

export const fetcher = (url) => fetch(url).then(async res => {
  const result = await res.json()
  return res.status === 200 ? result : Promise.reject(result)
})

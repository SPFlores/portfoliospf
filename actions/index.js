import useSWR from 'swr'

export const fetcher = (url) => fetch(url).then(async res => {
  const result = await res.json()
  return res.status === 200 ? result : Promise.reject(result)
})

export const useGetPosts = _ => {
  const { data, error, ...rest } = useSWR('/api/v1/posts', fetcher)
  return { data, error, loading: !data && !error, ...rest }
}

export const useGetPostById = id => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/posts/${id}` : null, fetcher)
  return { data, error, loading: !data && !error, ...rest }
}

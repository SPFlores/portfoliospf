import useSWR from 'swr'
import { fetcher } from './index'

export const useGetUser = _ => {
  const { data, error, ...rest } = useSWR('/api/v1/me', fetcher)
  return { data, error, loading: !error && !data, ...rest }
}

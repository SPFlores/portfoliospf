import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetData = url => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(_ => {
    async function fetchData () {
      axios.get(url)
        .then(({ data, status }) => {
          status !== 200 && setError(data.json())
          status === 200 && setData(data)
          setLoading(false)
        })
        .catch(e => setError(e))
    }
    url && fetchData()
  }, [url])

  return { data, error, loading }
}

export default useGetData

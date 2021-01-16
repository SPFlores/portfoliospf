import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetPosts = _ => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()

  useEffect(_ => {
    async function getPosts() {
      axios.get('api/v1/posts')
        .then(({ data, status }) => {
          status !== 200 && setError(data.json())
          status === 200 && setPosts(data)
        })
        .catch(e => setError(e))
    }
    getPosts()
  }, [])

  return { posts, error }
}

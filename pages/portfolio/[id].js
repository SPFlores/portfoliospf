import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import axios from 'axios'
// import { useGetData } from '@/actions'
import { useRouter } from 'next/router'

const Portfolio = _ => {
  // const router = useRouter()
  // const { data, error, loading } = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null)

  return (
    <BaseLayout>
      {/* {loading
        ? <p>Loading...</p>
        : error
          ? <div className='alert alert-danger' style={{ width: '60%', margin: 'auto' }}>{error.message}</div>
          :
          <>
            <p>ID: {data.id}</p>
            <h1>{data.title}</h1>
            <p>Body: {data.body}</p>
          </>
      } */}
    </BaseLayout>
  )
}

export default Portfolio

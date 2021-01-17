import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import axios from 'axios'
import { useGetPostById } from '@/actions'
import { useRouter } from 'next/router'
import { useGetUser } from '@/actions/user'

const Portfolio = _ => {
  const router = useRouter()
  const { data, error, loading } = useGetPostById(router.query.id)
  const { data: userData, loading: userLoading } = useGetUser()

  return (
    <BaseLayout
      user={userData}
      loading={userLoading}>
      {loading
        ? <p>Loading...</p>
        : error
          ? <div className='alert alert-danger' style={{ width: '60%', margin: 'auto' }}>{error.message}</div>
          :
          <>
            <p>ID: {data.id}</p>
            <h1>{data.title}</h1>
            <p>Body: {data.body}</p>
          </>
      }
    </BaseLayout>
  )
}

export default Portfolio

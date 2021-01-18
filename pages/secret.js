import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useGetUser } from '@/actions/user'
import { useRouter } from 'next/router'
import Redirect from '@/components/shared/Redirect'

const Secret = _ => {
  const router = useRouter()
  const { data, loading } = useGetUser()

  if (loading) {
    return (
      <BaseLayout
        user={data}
        loading={loading}>
        <p>Loading...</p>
      </BaseLayout >
    )
  }

  if (!data) {
    return <Redirect to={'/api/v1/login'} />
  } else {
    return (
      <BaseLayout
        user={data}
        loading={loading}>
        <div>
          <h1>Secret</h1>
        </div>
      </BaseLayout>
    )
  }
}

export default Secret

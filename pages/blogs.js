import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useGetUser } from '@/actions/user'

const Blogs = _ => {
  const { data, loading } = useGetUser()

  return (
    <BaseLayout
      user={data}
      loading={loading}>
      <div>
        <h1>Blog</h1>
      </div>
    </BaseLayout>
  )
}

export default Blogs

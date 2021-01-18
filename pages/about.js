import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import { useGetUser } from '@/actions/user'

const About = _ => {
  const { data, loading } = useGetUser()

  return (
    <BaseLayout
      user={data}
      loading={loading}>
      <div>
        <h1>About</h1>
      </div>
    </BaseLayout>
  )
}

export default About

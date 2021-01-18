import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import withAuth from '@/HOC/withAuth'

const Secret = ({ data: user, loading }) => {
  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <div>
        <h1>Secret - hello {user.nickname}</h1>
      </div>
    </BaseLayout>
  )
}

export default withAuth(Secret)

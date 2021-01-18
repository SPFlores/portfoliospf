import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import withAuth from '@/HOC/withAuth'

const Admin = ({ data: user, loading }) => {
  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <div>
        <h1>Only admin - hello admin {user.nickname}</h1>
      </div>
    </BaseLayout>
  )
}

export default withAuth(Admin, 'admin')

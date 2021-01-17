import React from 'react'
import { Navigation } from '@/components'
import BasePage from '@/components/BasePage'

const BaseLayout = ({ user, loading, className, children }) => {
  return (
    <div className='layout-container' >
      <Navigation user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>
          <BasePage>
            {children}
          </BasePage>
        </div>
      </main>
    </div >
  )
}

export default BaseLayout

import React from 'react'
import { Navigation } from '@/components'
import BasePage from '@/components/BasePage'

const BaseLayout = ({ user, loading, navClass = 'with-bg', className, children, header, bpClass }) => {
  return (
    <div className='layout-container' >
      <Navigation user={user} loading={loading} className={navClass} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>
          {navClass === 'home'
            ? children
            : <BasePage header={header} className={bpClass}>
              {children}
            </BasePage>}
        </div>
      </main>
    </div >
  )
}

export default BaseLayout

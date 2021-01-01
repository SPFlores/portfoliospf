import React from 'react'
import { Navigation } from '../../components'
import BasePage from '../BasePage'

const BaseLayout = props => {
  return (
    <div className='layout-container' >
      <Navigation />
      <main className={`cover ${props.className}`}>
        <div className='wrapper'>
          <BasePage>
            {props.children}
          </BasePage>
        </div>
      </main>
    </div >
  )
}

export default BaseLayout

import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import Link from 'next/link'

const Navigation = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const pagesNLinks = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/portfolio',
      name: 'Portfolio'
    },
    {
      path: '/blogs',
      name: 'Blogs'
    },
    {
      path: '/cv',
      name: 'CV'
    },
    {
      path: '/secret',
      name: 'Secret'
    },
    {
      path: '/secretSSR',
      name: 'Secret SSR'
    },
    {
      path: '/admin',
      name: 'Admin'
    },
    {
      path: '/adminSSR',
      name: 'Admin SSR'
    }
  ]

  const loginLink = <a href='/api/v1/login' className='nav-link port-navbar-link clickable'>Login</a>

  const logoutLink = <a href='/api/v1/logout' className='nav-link port-navbar-link clickable'>Logout</a>

  return (
    <div>
      <Navbar className='port-navbar port-default absolute' color='transparent' dark expand='md'>
        <Link href='/'>
          <a className='nav-link port-navbar-link navbar-brand port-navbar-brand'>Samantha Flores</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            {pagesNLinks.map(item =>
              <NavItem className='port-navbar-item' key={`${item.name}`}>
                <Link href={`${item.path}`}><a className='nav-link port-navbar-link'>{item.name}</a></Link>
              </NavItem>
            )}
          </Nav>
          <Nav navbar>
            {!loading &&
              <>
                {user && <NavItem>
                  {logoutLink}
                </NavItem>}
                {!user && <NavItem>
                  {loginLink}
                </NavItem>}
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation

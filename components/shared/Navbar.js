import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import Link from 'next/link'

const Navigation = (props) => {
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
    }
  ]

  const loginLink = <Link href='/api/v1/login'><span className='nav-link port-navbar-link clickable'>Login</span></Link>

  const logoutLink = <Link href='/api/v1/logout'><span className='nav-link port-navbar-link clickable'>Logout</span></Link>

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
            <NavItem>
              {loginLink}
            </NavItem>
            <NavItem>
              {logoutLink}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation

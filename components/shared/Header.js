
import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link href='/'>
          <a className='header__link'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='header__link'>About</a>
        </Link>
        <Link href='/portfolio'>
          <a className='header__link'>Portfolio</a>
        </Link>
        <Link href='/blogs'>
          <a className='header__link'>Blog</a>
        </Link>
        <Link href='/cv'>
          <a className='header__link'>CV</a>
        </Link>
      </div>
    )
  }
}

export default Header

import React from 'react'
import Navbar from './navbar'
import logo from '../assets/images/logo-medical.png'

export default function Header() {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <Navbar />
    </header>
  )
}

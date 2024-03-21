import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavbarMainDiv'>
      <div className="main">
        <div className="mainLeft">
          <div className="navLinks">
            <Link to="/" className={`links ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
            <div className="links">NEW ARRIVALS</div>
            <div className="links">SHOP</div>
            <select name="" id="">
              <option value="">COLLECTIONS</option>
              <option value="">MEN</option>
              <option value="">WOMEN</option>
            </select>
            <div className="links">INSTAGRAM SHOP</div>
            <div className="links">STORE</div>
            <div className="links">INFLUENCER</div>
          </div>
        </div>
        <div className="mainRight">
          <Link className='loginBtn'>Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

// Ternary operator that only loads links if user is auth

const Nav = ({ isAuth }) => (
  <nav>
    {isAuth ? 
      (
        <ul>
          <li><Logout /></li>
          <li><Link to="/User">Profile</Link></li>
        </ul>

      ) : (

        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      )}
      
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

  </nav>
)

export default Nav

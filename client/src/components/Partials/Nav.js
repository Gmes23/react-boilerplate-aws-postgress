import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Nav = ({ isAuth }) => (
  <nav>
    {isAuth ? ( <Logout />) 
    : (
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

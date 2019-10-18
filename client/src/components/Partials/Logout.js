import React from 'react'
import { Link, Route } from 'react-router-dom'

const Logout = ({ isAuth }) => (
  <nav>
     <nav>
    {isAuth ? 
    ( 
    <ul>
      <li><Link to="/logout">logout</Link></li>
    </ul>)
      : (
          <ul>
              <p>user is logged out</p>
          </ul>
      )}
  </nav>
   
  </nav>
)

export default Logout

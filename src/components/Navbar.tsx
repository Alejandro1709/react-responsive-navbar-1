import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="Wrapper">
        <div className="Logo-Container">
          <h2>React Navigation Test</h2>
        </div>
        <div className="Links-Container">
          <ul role="navigation">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="Account-Container">
          <p>Last Updated: Today</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
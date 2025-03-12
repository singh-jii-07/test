import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <h1>Menu</h1>
      </div>
      <div className="list">
        <h1>R.V</h1>
      </div>
      <div className="icon">
        <span>cart(0)</span>
        <span><i class="fa-solid fa-circle-user"></i> Log in</span>
      </div>
    </div>
  )
}

export default Navbar

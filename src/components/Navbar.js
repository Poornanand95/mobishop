import React from 'react';
import './css/Navbar.css';
function Navbar() {
  return (
    <div>
      <ul className='navbar'>
        <li className='nav-items logo'>
          <i class='fas fa-store'></i>
          <p>Mobi Shop</p>
        </li>
        <li className='nav-items user-name'>Hi Punnu</li>
        <li className='nav-items'>
          <button className='sign-out'>Sign Out</button>
        </li>
        <li className='nav-items'>
          <button className='sign-out'>Sign In</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

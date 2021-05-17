import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <ul className='navbar'>
        <Link to='/' className='nav-items logo'>
          <i class='fas fa-store'></i>
          <p>Mobi Shop</p>
        </Link>
        <li className='nav-items user-name'>Hi, Poornanand</li>
        <li>
          <Link to='./AddItems' className='nav-items'>
            <button className='add-items'>Add Items</button>
          </Link>
        </li>
        <li>
          <Link to='/' className='nav-items'>
            <button className='sign-out'>Sign Out</button>
          </Link>
        </li>
        <li>
          <Link to='/SignIn' className='nav-items'>
            <button className='sign-in'>Sign In</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <Link to='/'>
          
          </Link>
          <ul className='nav-links'>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

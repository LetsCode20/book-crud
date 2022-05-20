import React from 'react';
// React Router Dom
import { Link } from 'react-router-dom';
// Style
import './Navbar.scss';
// Icon
import BookRoundedIcon from '@mui/icons-material/BookRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarContainer'>
        <Link to='/' className='navLogo'>
          <BookRoundedIcon />
          <h2 className='navbarLogo'>Books App</h2>
        </Link>

        <ul className='navbarLinks'>
          <li>
            <Link className='navbarLink' to='/books'>
              List of Books
            </Link>
          </li>
          <li>
            <Link className='navbarLink' to='/books/create'>
              Add New Books
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

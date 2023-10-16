import React from 'react';
import ProfileOne from '../assets/profile1.png'
import { FiBell, FiSearch } from 'react-icons/fi';

 const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='search-container'>
             <FiSearch className='search-icon'/><input className='search-input border border-0' type='search' placeholder='Search' />
            </div>
            <ul className='nav-ul'>
                <li ><FiBell className='bell-icon' />notifications</li>
                <li>500 Credits</li>
                <li>Elton<img className='profile-img' src={ProfileOne} alt='profile'/></li>
            </ul>
        </nav>
    </>
  )
}




export default Navbar
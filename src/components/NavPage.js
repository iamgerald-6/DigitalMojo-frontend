import React from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';
import ProfileOne from '../assets/profile1.png';
import {TbFilterSearch} from 'react-icons/tb';

export const NavPage = (props) => {
  return (
    <>
        <nav class="navbar navbar-light ">
            <div class="container-fluid">
                <div className='d-inline-flex flex-column'>
                    <h4 class="navbar-brand">{props.name}</h4>
                    <h7 className=''>{props.paragraph}</h7>
                </div>
               
                <ul className='nav-ul'>
                        <li ><FiBell className='bell-icon' />notifications</li>
                        <li>500 Credits</li>
                        <li>Elton<img className='profile-img' src={ProfileOne} alt='profile'/></li>
                 </ul>
            </div>
            <div className='d-flex'>
            <div id={props.element}className='search-container mt-3 ms-2'>
              <FiSearch className='search-icon'/><input className='search-input border border-0' type='search' placeholder='Search' />
              
            </div>
            <div id={props.elementId} className='mt-4 ms-4'><TbFilterSearch size='20' className='ms-2'/> <span className='ms-2'>Sort by: All</span></div>
            </div>
        </nav>
        

    </>
  )
}

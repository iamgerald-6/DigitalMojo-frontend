import React from 'react';
import {NavLink} from 'react-router-dom'

export const SecondNav = () => {
        const secondNavStyle = ({isActive}) => {
            return{
            background: isActive ? '#E9E9E9' : 'none',
            width: isActive ? '50px' : '',
            color:  isActive ? '#060508' : '',
            borderRadius: isActive ? '48px' : ''

            }
        }

  return (
    <>
        
        <nav className='second-nav position-relative'>
            <ul className='second-nav-ul '>
                <li ><NavLink style={secondNavStyle} to='/' className='secNav-edit '>
                    All
                </NavLink></li>
                <li><NavLink style={secondNavStyle} className='secNav-edit ' to='/tutorials'>
                    Tutorials
                </NavLink></li>
                <li><NavLink to='/courses' className='secNav-edit'>
                    Courses
                </NavLink></li>
                <li><NavLink to='/catalog' className='secNav-edit '>Catalog</NavLink></li>
                <li><NavLink to ='/templates' className='secNav-edit '>Template</NavLink></li>
                <li><NavLink to='/inspiration' className='secNav-edit ' >Inspiration</NavLink></li>
            </ul>
            
        </nav>
        <hr className='horizontal-line '></hr>
    
    </>
  )
}



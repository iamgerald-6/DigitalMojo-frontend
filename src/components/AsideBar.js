import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom';
import {IoSettingsOutline} from 'react-icons/io5';
import {TbLogout2} from 'react-icons/tb';
import Resources from '../assets/document-favorite.png';
import Message from '../assets/messages.png';
import Wallet from '../assets/wallet.png';
import Search from '../assets/search-normal.png';
import Rocket from '../assets/Rocket.png';
import SmallCloud from '../assets/smallCloud.png';
import Cloud from '../assets/cloud.png';
import '../styles/index.css'



export default function AsideBar() {

const navStylesLink = ({isActive}) => {
    return {
    background: isActive ? '#E9FF9D' : 'none',
    borderRadius: isActive ? '48px' : 'none',
    height: isActive ? '40px': '',
    alignItems: isActive ? 'center' : 'none',
    color: isActive ? '#060508' : ''
    }
  
};

const [imageColor, setColor] = useState('black');

const handleChange = () => {
  setColor((prev) => { 
    return prev === 'black' ? '#696961' : 'blue'
  });
      

  }


  return (
  <>
    <div className='position-relative'>
      <aside className=' d-flex flex-column bg-black aside-width position-absolute top-0 start-0 '>
          <div>
            <h2 className='text-color-title mb-5 mt-5 text-center'>DezignSntr</h2>
          </div>
          <ul className='d-flex flex-column'>
            <NavLink style={navStylesLink }  to='/profile' className='  li-width aside-nav-btn mt-4 d-inline-flex gap-2 text-color'><img onClick={handleChange} style={{filter: 'brightness(1)', color: imageColor}} className=' ms-3 icons-aside text-color' src={Search} alt='Search'/> Explore designs</NavLink>
            <NavLink style={navStylesLink } to='/' className='aside-nav-btn mt-4 d-inline-flex li-width gap-2 text-color'><img className=' ms-3 icons-aside text-color'src={Resources} alt='resources'/>Resources</NavLink>
            <NavLink style={navStylesLink } to='/wallet' className=' aside-nav-btn mt-4 d-inline-flex li-width gap-2 text-color'><img className=' ms-3 icons-aside text-color'src={Wallet} alt='Wallet'/>Wallet</NavLink>
            <NavLink style={navStylesLink } to='/chat' className=' aside-nav-btn my-4 d-inline-flex  li-width gap-2 text-color'><img className='ms-3 icons-aside text-color'src={Message} alt='Message'/>Chat</NavLink>
          </ul>

          <div>
              <img className='position-absolute  aside-rocket'src={Rocket} alt='Rocket'/>
              <img className='position-absolute  aside-small-cloud' src={SmallCloud} alt='SmallCloud'/>
              <img className='position-absolute  aside-cloud'src={Cloud} alt='Cloud'/>

          </div>
          <div className='aside-margin mt-5 position-absolute '>
            <div className='aside-container-1 '>
                  <button className='aside-btn-1 aside-btn btn '>Upgrade to agency</button>
                  <NavLink className='aside-btn-2 aside-btn btn'>Upgrade now</NavLink>
            </div>
          </div>
          <div className='aside-bottom-text-container position-absolute  '>
            <h6 className='aside-bottom-text aside-settings mt-3 d-flex gap-2 text-color'><IoSettingsOutline className='settings-icon-aside mb-1' size='20'/>Settings</h6>
            <h6 className='aside-bottom-text aside-logout mt-4 d-flex gap-2  text-light'><TbLogout2 className='mb-1 logout-icon-aside text-light' size='20'/>Logout</h6>
          </div>

      </aside>
    </div>
    
  </>
  )
}

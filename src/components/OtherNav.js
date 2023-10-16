import React from 'react';
import { FiBell,FiSearch} from 'react-icons/fi';
import ProfileOne from '../assets/profile1.png';
import '../styles/index.css';

 const Navbar = () => {
  return (
    // FaRegBell
<>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid border border-1">
            <form class="d-flex">
                <div className='border border-1'><FiSearch/><input className=" border border-0 me-2" type="search" placeholder="Search" aria-label="Search"/></div>
                
            </form>
            
            <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><FiBell/>notification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">500 credits</a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Elton<img src={ProfileOne} alt='profile pic'/></a>
        </li>
      </ul>
              </div>
     
          </div>
             
            
        </div>
        
    </nav>


</>
  )
}


export default Navbar
import React from 'react';
import Catalog1 from '../assets/Catalog.png'
import Catalog2 from '../assets/Catalog2.png'
import Catalog3 from '../assets/Catalog3.png'
import Catalog4 from '../assets/Catalog4.png'
import { Link } from 'react-router-dom';

 const Inspiration = () => {
  return (
    <>
        <div className='container-lg '>
            <div className='row justify-content-between'>
                <div className='col-md-3'>
                    <h3 className='mt-5'>Inspiration</h3>
                </div>
                <div className='col-md-3'>
                   <Link className=' justify-content-end text-end text-end mt-5'>See all</Link>
               </div>
            </div>
            <div className='row justify-content-around'>
                <div className='col-lg-3 '>
                    <img className =' img-fluid'src={Catalog1} alt='TutorialPic1'/>
                    <h6 className='mt-3 mb-5 font-size fw-bold'>Business branding</h6>
                    
                </div>
                <div className='col-lg-3 '>
                    <img className =' img-fluid' src={Catalog2} alt='TutorialPic2'/>
                    <h6 className='mt-3 font-size font-size2 fw-bold'>Social media branding</h6>
                     
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Catalog3} alt='TutorialPic3'/>
                    <h6 className='mt-3 font-size fw-bold'>web design</h6>
                     
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Catalog4} alt='TutorialPic4'/>
                    <h6 className=' mt-3 font-size fw-bold'>social media post</h6>
                </div>
            

            </div>
            <div className='row'>
                <p className='footer'></p>
            </div>
            
        </div>
    
    </>
  )
}


export default Inspiration
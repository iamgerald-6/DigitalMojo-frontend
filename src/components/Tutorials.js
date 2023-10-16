import React from 'react'
import Tutorials1 from '../assets/tutorials1.png';
import Tutorials2 from '../assets/tutorials2.png';
import Tutorials3 from '../assets/tutorials3.png';
import Tutorials4 from '../assets/tutorials4.png';
import { Link } from 'react-router-dom';

const Tutorials = (props) => {
  return (
    <>
        <div className='container-lg '>
            <div className='row justify-content-between'>
                <div className='col-md-3'>
                    <h3 className='mt-2'>{props.name}</h3>
                </div>
                <div className='col-md-3'>
                   <Link  to='#' className='  justify-content-end text-end mt-3'>{props.title}</Link>
               </div>
            </div>
            <div className='row justify-content-around'>
                <div className='col-lg-3 '>
                    <img className =' img-fluid'src={Tutorials1} alt='TutorialPic1'/>
                    <h6 className='mt-2 font-size fw-bold'>How to create a facebook post</h6>
                    
                </div>
                <div className='col-lg-3 '>
                    <img className =' img-fluid' src={Tutorials2} alt='TutorialPic2'/>
                    <h6 className='mt-2 font-size font-size3 fw-bold'>How to create a linkedin post</h6>
                     
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Tutorials3} alt='TutorialPic3'/>
                    <h6 className='mt-2 font-size fw-bold'>Creating engaging instagram posts</h6>
                     
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Tutorials4} alt='TutorialPic4'/>
                    <h6 className=' mt-2 font-size fw-bold'>How to create a facebook post</h6>
                </div>

            </div>
            
        </div>
    </>
  )
}



export default Tutorials
import React from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Template1 from '../assets/tutorials1.png';
import Template2 from '../assets/tutorials2.png';
import Template3 from '../assets/tutorials3.png';
import Template4 from '../assets/tutorials4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';
import { Link } from 'react-router-dom';

export const Templates = (props) => {
  return (
    <>
            <div className='container-lg '>
            <div className='row justify-content-between'>
                <div className='col-md-3'>
                    <h3 className='mt-2'>{props.name}</h3>
                </div>
                <div className='col-md-3'>
                   <Link className='justify-content-end text-end text-end mt-2'>{props.title}</Link>
               </div>
            </div>
            <div className='row justify-content-around'>
                <div className='col-lg-3 '>
                    <img className ='img-fluid'src={Template1} alt='TutorialPic1'/>
                    <h6 className='mt-2 font-size2 fw-bold'>Black friday sale<LiaInfoCircleSolid className='ms-5 '/><span className='ms-1 color-text-edit'>PSD</span></h6>
                    <div className='d-flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>
                
                <div className='col-lg-3'>
                    <img className ='img-fluid' src={Template2} alt='TutorialPic2'/>
                    <h6 className='mt-2 font-size font-size2 fw-bold'>Black friday sale<LiaInfoCircleSolid className='ms-5'/><span className='ms-1 color-text-edit'>PSD</span></h6>
                    <div className='d-flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Template3} alt='TutorialPic3'/>
                    <h6 className='mt-2 font-size2 fw-bold '>Creative agency design<LiaInfoCircleSolid className='ms-2'/><span className='ms-1 color-text-edit'>PSD</span></h6>
                    <div className='d-flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>

                <div className='col-lg-3'>
                    <img className =' img-fluid' src={Template4} alt='TutorialPic4'/>
                    <h6 className=' mt-2 font-size2 fw-bold'>{props.hTag}<LiaInfoCircleSolid className='ms-1'/><span className='color-text-edit'>PSD</span></h6>
                    <div className='d-flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>

            </div>
            
        </div>
    
    
    
    </>
  )
}

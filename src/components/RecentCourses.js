import React from 'react';
import RecentCourse1 from '../assets/recentcourse1.png';
import RecentCourse2 from '../assets/recentcourse2.png';
import RecentCourse3 from '../assets/recentcourse3.png';
import RecentCourse4 from '../assets/recentcourse4.png';
import {LuCrown} from 'react-icons/lu'
import { Link } from 'react-router-dom';

 const RecentCourses = (props) => {
  return (
    <>
             <div className='container-lg '>
                 <div className='row justify-content-between'>
                    <div className='col-md-3'>
                        <h3 className='mt-5'>{props.name}</h3>
                    </div>
                    <div className='col-md-3'>
                         <Link className='justify-content-end text-end text-end mt-5'>{props.title}</Link>
                    </div>
                 </div>
                 <div className='row justify-content-around'>
                    <div className='col-lg-3 '>
                        <img className =' img-fluid'src={RecentCourse1} alt='TutorialPic1'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-2 font-size fw-bold'>Beginner cyber security 101</h6>
                        <p className='mt-2'> Taking you through the basics of cyber security</p>
                        
                    </div>
                    <div className='col-lg-3 '>
                        <img className =' img-fluid' src={RecentCourse2} alt='TutorialPic2'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>{props.certified}</span></div>
                        <h6 className='mt-2 font-size font-size2 fw-bold'>Instagram growth</h6>
                        <p className='mt-2'>Learn how to grow your instagram from 0-10,000 followers and more.</p>
                    </div>

                    <div className='col-lg-3'>
                        <img className =' img-fluid' src={RecentCourse3} alt='TutorialPic3'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-2 font-size fw-bold'>Facebook marketing</h6>
                        <p className='mt-2 '>Learn home to utilize the facebook marketing to sell products and services</p>
                    </div>

                    <div className='col-lg-3'>
                        <img className =' img-fluid' src={RecentCourse4} alt='TutorialPic4'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className=' mt-2 font-size fw-bold'>Social media marketing</h6>
                        <p className='mt-2'> Learn how to utilize the power of social media in marketing</p>
                    </div>

                 </div>
            
             </div>
    
    
    </>
  )
}





export default RecentCourses
import React, { useState } from 'react';
import Credit from '../assets/Credit.svg';
import DollarsSign from '../assets/Dollars.svg';

export const Wallet = () => {

  const [progress, setProgress] =useState(0)

  const handleChange = () => {
    if(progress < 100){
        setProgress(progress + 15)
    } 
  }
  return (
    <>
        <div className='container-lg'>
            <div className='row gap-4'>
                <div className='col-lg-7 wallet-container position-relative mt-5'>
                       <div className='d-inline-flex  my-4  ms-2'>
                        <img src={Credit} alt='Credit'/>
                        <div className='flex-column ms-2'>
                           <h6 className='mt-2'>Credit Usage</h6>
                           <h5>500 of 2000</h5>
                        </div>
                        
                        

                        </div> 
                        <div className='mt-5 ms-2'>
                          <h6>Credit available</h6>
                          <div className='d-flex '>
                            <div className='progress-bar border border-1 border-light mt-2'>
                              <div className='progress-fill' style={{width: `${progress}%`}}></div>
                            </div>
                            <div className='progress-label ms-2'>{progress}%</div>
                          </div>
                           <button onClick={handleChange} className='  px-3 topUp-btn  mb-4 text-center'> Top up</button>
                        </div>
                        <div className=' dollar-sign position-absolute top-0 end-0'>
                          <img className='img-fluid'src={DollarsSign} alt='Dollars'/>
                        </div>
                          
                </div>

                <div className='col-lg-4 wallet-container-2 border border-1 mt-5 bg-dark rounded-4'>
                  <div className='mt-3'>
                    <h6 className='my-4 text-light'>Credit balance</h6>
                    <h3 className='text-light'>500</h3>
                  </div>

                </div>
            </div>
            <div className='row'>
                
            </div>

        </div>


    </>
  )
}


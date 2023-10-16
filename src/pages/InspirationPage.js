import React from 'react'
import { NavPage } from '../components/NavPage'
import { Inspiration2 } from '../components/Inspiration2';
import {LoadMore} from '../components/LoadMore';

export const InspirationPage = () => {
  return (
    <>
        <NavPage name='Inspiration' paragraph='A place to get more inspired and get more creative' elementId='props-filter'/>
        <Inspiration2/>
        <LoadMore/>
    </>
  )
}

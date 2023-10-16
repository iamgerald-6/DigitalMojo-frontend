import React from 'react'
import { NavPage } from '../components/NavPage'
import Tutorials from '../components/Tutorials'
import { LoadMore } from '../components/LoadMore'

export const TutorialsPage = () => {
  return (
    <>
            <NavPage name='Tutorial'paragraph='Browse through our helpful tutorial' elementId='props-filter'/>
            <Tutorials/>
            <Tutorials/>
            <Tutorials/>
            <LoadMore/>


    </>
  )
}


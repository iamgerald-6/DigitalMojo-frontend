import React from 'react'
import { NavPage } from '../components/NavPage'
import { Templates } from '../components/Templates'
import { LoadMore } from '../components/LoadMore'

export const TemplatesPage = () => {
  return (
    <>
        <NavPage name='Templates' paragraph='Browse and download our design templates' elementId='props-filter'/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <LoadMore hTag='Marketing agency'/>

    
    </>
  )
}

import React from 'react'
import Tutorials from '../components/Tutorials';
import Navbar from '../components/Navbar';
import {SecondNav}  from '../components/SecondNav';
import RecentCourses from '../components/RecentCourses';
import  {Templates}  from '../components/Templates';
import  Catalog  from '../components/Catalog';
import Inspiration from '../components/Inspiration';

 const All = () => {
  return (
   <>
        <Navbar/>
        <SecondNav/>
        <Tutorials name ='Tutorials' title='See all' />
        <RecentCourses elementId='props-certified' name='Recent Courses' title='See all'/>
        <Templates name='Templates' title='See all' hTag='Marketing agency design'/>
        <Catalog name='Catalog' title ='See all'/>
        <Inspiration/>
   </>
  )
}




export default All
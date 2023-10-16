import React from 'react'
import { NavPage } from '../components/NavPage'
import RecentCourses from '../components/RecentCourses'

export const RecentPages = () => {
  return (
    <>
        <NavPage name='Courses' paragraph='Browse all our free and paid courses'/>
        <RecentCourses name='Recent Courses' elementId='props-certified'/>
        <RecentCourses name='Paid courses' certified='Certified course'/>
        <RecentCourses name='Free courses' certified='Non-Certified'/>
    </>
  )
}

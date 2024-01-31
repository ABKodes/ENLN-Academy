import React from 'react'
import MyCourses from '../components/Instructor/My Courses'
import Profile from '../components/Instructor/Profile'
import About from '../components/Instructor/About'
import HeaderBefore from '../components/Reusable Components/HeaderBefore'
import Footer from '../components/Reusable Components/Footer'

function Instructor() {
  return (
    <div className='space-y-2'>
      <HeaderBefore/>
        <Profile/>
        <About/>
        <MyCourses/>
        <Footer/>
    </div>
  )
}

export default Instructor
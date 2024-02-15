import React from 'react'
import MyCourses from '../components/Instructor/My Courses'
import Profile from '../components/Instructor/Profile'
import About from '../components/Instructor/About'

function Instructor() {
  return (
    <div className="space-y-2">
      <Profile />
      <About />
      <MyCourses />
    </div>
  );
}

export default Instructor
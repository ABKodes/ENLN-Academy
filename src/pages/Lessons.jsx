import React from 'react'
import Lessonsoftheweek from '../components/Lesson/Lessons of the week'
import RightSideBar from '../components/Lesson/Right Side Bar'
import LeftSideBar from "../components/Lesson/Left Side Bar";

function Lessons() {
  return (
    <div>
      <div className='flex'>
        <LeftSideBar />
        <Lessonsoftheweek />
        <RightSideBar />
      </div>
    </div>
  );
}

export default Lessons
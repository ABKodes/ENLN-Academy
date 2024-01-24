import React from 'react'
import Lessonsoftheweek from '../components/Lesson/Lessons of the week'
import RightSideBar from '../components/Lesson/Right Side Bar'
import LeftSideBar from "../components/Lesson/Left Side Bar";
import HeaderLesson from '../components/Reusable Components/Header Lesson';

function Lessons() {
  return (
    <div>
      <HeaderLesson />
      <div className="flex w-full  lg:m-3">
        <div className="lg:w-1/4 ">
          <LeftSideBar />
        </div>
        <div className="lg:w-3/4">
          <Lessonsoftheweek />
        </div>
        <div className="lg:w-1/4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Lessons
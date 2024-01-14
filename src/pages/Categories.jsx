import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'

function Categories() {
  return (
    <>
      <div className='w-11/12'>
        <GetYouStarted />
        <div className="grid w-full grid-cols-[30%,70%] mt-20 ">
          <div className='ml-2'>
            <FilterSidebar />
          </div>
          <div className='ml-5'>
            <AllCoursesList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories
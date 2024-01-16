import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'

function Categories() {
  return (
    <>
      <div className="w-11/12">
        <GetYouStarted />
        <div className="mt-20 grid w-full grid-rows lg:grid-cols-[30%,70%] ">
          <div className="lg:ml-2">
            <FilterSidebar />
          </div>
          <div className="lg:ml-5 ml-5">
            <AllCoursesList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories
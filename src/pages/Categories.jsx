import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'

function Categories() {
  return (
    <>
      <GetYouStarted />
      <div className="flex flex-row">
        <div>
          <FilterSidebar />
        </div>
        <div>
          <AllCoursesList />
        </div>
      </div>
    </>
  );
}

export default Categories
import React from 'react'
import HorizontalCard from '../Reusable Components/HorizontalCard'
function AllCoursesList() {
  return (
    <div>
      <div className="flex flex-col">
        <p className="text flex justify-end w-8/12">1000 results</p>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
    </div>
  );
}

export default AllCoursesList;
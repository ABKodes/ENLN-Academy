import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
function Categories() {
  return (
    <>
      <div className="w-11/12">
        <GetYouStarted />
        <div className="grid-rows mt-20 grid w-full lg:grid-cols-[30%,70%] ">
          <div className="lg:ml-2">
            <FilterSidebar />
          </div>
          <div className="ml-5 lg:ml-5">
            <AllCoursesList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories